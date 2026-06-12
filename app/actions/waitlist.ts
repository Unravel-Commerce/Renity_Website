"use server";

interface WaitlistState {
  success: boolean;
  message: string;
}

const LOOPS_API_URL = "https://app.loops.so/api/v1/contacts/update";
const WAITLIST_MAILING_LIST_ID = "cmqbbbiyx0hy10jzwfz1wglcc";

const SUCCESS_MESSAGE =
  "You're on the list! We'll email you as soon as Renity launches.";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  // Honeypot — bots auto-fill hidden fields; silently discard
  const honeypot = formData.get("website") as string;
  if (honeypot) {
    return { success: true, message: SUCCESS_MESSAGE };
  }

  const email = (formData.get("email") as string)?.trim();

  if (!email || !isValidEmail(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const apiKey = process.env.LOOPS_API_KEY;
  if (!apiKey) {
    console.error("LOOPS_API_KEY is not configured");
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }

  try {
    // Upsert — repeat signups succeed without creating duplicates.
    const res = await fetch(LOOPS_API_URL, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        source: "website-waitlist",
        mailingLists: { [WAITLIST_MAILING_LIST_ID]: true },
      }),
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error("Loops API error:", res.status, errorBody);
      return {
        success: false,
        message: "Couldn't add you to the waitlist. Please try again later.",
      };
    }

    return { success: true, message: SUCCESS_MESSAGE };
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
