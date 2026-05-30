"use server";

interface ContactFormState {
  success: boolean;
  message: string;
}

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const RESEND_API_URL = "https://api.resend.com/emails";
const RECIPIENT = "renity@unravelcommerce.com";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Layer 2: honeypot — bots auto-fill hidden fields; silently discard
  const honeypot = formData.get("website") as string;
  if (honeypot) {
    return { success: true, message: "Thanks! We'll be in touch soon." };
  }

  // Layer 1: Cloudflare Turnstile verification (skipped when keys aren't configured)
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (secretKey) {
    const turnstileToken = formData.get("cf-turnstile-response") as string;
    if (!turnstileToken) {
      return {
        success: false,
        message: "Please complete the verification challenge.",
      };
    }

    const verifyRes = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: turnstileToken,
      }),
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return {
        success: false,
        message: "Verification failed. Please try again.",
      };
    }
  }

  // Field validation
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !subject || !message) {
    return { success: false, message: "All fields are required." };
  }

  if (!isValidEmail(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (message.length < 10) {
    return {
      success: false,
      message: "Your message must be at least 10 characters.",
    };
  }

  if (message.length > 5000) {
    return {
      success: false,
      message: "Your message must be under 5,000 characters.",
    };
  }

  // Collect image attachments (up to 3)
  const attachments: { filename: string; content: string }[] = [];
  for (let i = 0; i < 3; i++) {
    const data = formData.get(`attachment-${i}`) as string | null;
    const fileName = formData.get(`attachment-name-${i}`) as string | null;
    if (!data) break;

    if (data.length > 750_000) {
      return {
        success: false,
        message: "One or more images are too large. Please use smaller images.",
      };
    }

    attachments.push({
      filename: fileName || `image-${i + 1}.jpg`,
      content: data,
    });
  }

  // Send email via Resend
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }

  try {
    const emailBody: Record<string, unknown> = {
      from: "Renity Contact Form <noreply@renityapp.com>",
      to: [RECIPIENT],
      subject: `[Renity Contact] ${subject}`,
      reply_to: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        ${attachments.length > 0 ? `<p><em>${attachments.length} image(s) attached.</em></p>` : ""}
      `,
    };

    if (attachments.length > 0) {
      emailBody.attachments = attachments;
    }

    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailBody),
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error("Resend API error:", res.status, errorBody);
      return {
        success: false,
        message: "Failed to send your message. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Thanks! Your message has been sent. We'll be in touch soon.",
    };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
