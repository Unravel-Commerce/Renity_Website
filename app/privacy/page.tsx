import type { Metadata } from "next";
import LegalPageLayout from "../../components/ui/LegalPageLayout";
import DownloadCTA from "../../components/sections/DownloadCTA";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Renity handles your personal data. GDPR-compliant privacy policy by Unravel AS.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    id: "who-we-are",
    label: "Who we are",
    content: (
      <>
        <div className="info-block">
          <p>
            <strong>Unravel AS</strong> · Moss, Norway · Org.nr. 934 054 423
          </p>
          <p>
            <a href="mailto:renity@unravelcommerce.com">
              renity@unravelcommerce.com
            </a>
          </p>
        </div>
        <p>
          This policy describes how we handle personal data when you use{" "}
          <strong>Renity</strong> (the &ldquo;App&rdquo;). We follow the{" "}
          <strong>GDPR</strong> and <strong>Norwegian privacy law</strong>{" "}
          (personopplysningsloven). If you live outside Norway, other rules may
          also apply; we still respect the rights below.
        </p>
      </>
    ),
  },
  {
    id: "at-a-glance",
    label: "At a glance",
    content: (
      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>What we collect</strong>
            </td>
            <td>
              Account and profile, recipes and other content you add, household
              and sharing data, subscription/usage info, push token if you enable
              notifications, URLs you give us for import, and short voice clips
              if you use voice features (processed and discarded, never stored).
            </td>
          </tr>
          <tr>
            <td>
              <strong>Why</strong>
            </td>
            <td>
              To run the App, subscriptions, service emails, optional push
              notifications, and security.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Legal bases</strong>
            </td>
            <td>
              Contract, legitimate interests (e.g. security), consent where
              needed (e.g. notifications).
            </td>
          </tr>
          <tr>
            <td>
              <strong>Sharing</strong>
            </td>
            <td>
              We use providers for hosting, AI, email, subscriptions, and app
              stores. We do not sell your data.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Outside Norway</strong>
            </td>
            <td>
              Data may be processed in other countries with safeguards where
              required.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Your rights</strong>
            </td>
            <td>
              Access, correction, deletion, restriction, objection, portability,
              complain to a regulator.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    id: "what-we-process",
    label: "What we process",
    content: (
      <>
        <ul>
          <li>
            <strong>Account</strong> — email, login data (password is handled
            securely by our auth provider; we don&rsquo;t store it in plain
            text).
          </li>
          <li>
            <strong>Profile</strong> — display name, photo if you add one,
            notification settings, push token if you turn notifications on.
          </li>
          <li>
            <strong>Your content</strong> — recipes (text, images, links), meal
            plans, shopping lists, and anything else you save in the App.
          </li>
          <li>
            <strong>Households</strong> — membership, roles, settings, and
            emails used for invitations.
          </li>
          <li>
            <strong>Sharing</strong> — when you share with someone (household or
            by email), we process what&rsquo;s needed to do that, including
            emails or notifications.
          </li>
          <li>
            <strong>Import</strong> — URLs you submit; we fetch that page and
            extract recipe info. Text/images from the page may be processed on
            our systems, including with AI (see below).
          </li>
          <li>
            <strong>Voice</strong> — if you use a voice feature, a short audio
            clip of what you say, only while you&rsquo;re actively recording. We
            don&rsquo;t store it (see below).
          </li>
          <li>
            <strong>Subscriptions</strong> — plan and usage limits, from the app
            stores and our subscription partner.
          </li>
          <li>
            <strong>Technical</strong> — e.g. IP address, app version; only as
            needed to run and secure the service.
          </li>
          <li>
            <strong>Device</strong> — we may ask for camera or photo access for
            profile or recipe pictures, or microphone access for voice features.
            Some data may be cached on your phone so the App loads faster.
          </li>
        </ul>
        <p>
          We don&rsquo;t aim to collect sensitive health data; if you type it
          into a recipe note, that&rsquo;s your choice.
        </p>
      </>
    ),
  },
  {
    id: "why-we-use-data",
    label: "Why we use data",
    content: (
      <>
        <p>We use your data to:</p>
        <ul>
          <li>Provide the App and your account</li>
          <li>Handle households and sharing</li>
          <li>Run import and cook mode</li>
          <li>Carry out voice commands (if you use voice features)</li>
          <li>Validate subscriptions</li>
          <li>Send verification codes and service emails</li>
          <li>Send push notifications (if you allow)</li>
          <li>Keep the service secure</li>
          <li>Comply with law</li>
        </ul>
        <p>
          Our legal bases are <strong>contract</strong>,{" "}
          <strong>legitimate interests</strong> (especially security), and{" "}
          <strong>consent</strong> where required.
        </p>
      </>
    ),
  },
  {
    id: "ai",
    label: "AI (import, cook mode & voice)",
    content: (
      <>
        <p>
          Recipe text may be sent to <strong>Google</strong> (e.g.{" "}
          <strong>Gemini</strong>) to structure imports or cook steps, and voice
          audio may be sent the same way to understand your spoken request (see{" "}
          <strong>Voice features &amp; microphone</strong> below). Results can
          be wrong — incomplete or inaccurate. This is <strong>not</strong>{" "}
          medical or dietary advice. You&rsquo;re responsible for safety and
          allergies.
        </p>
        <p>
          We don&rsquo;t use this to make automated decisions about you in a
          legal sense (GDPR Article 22).
        </p>
      </>
    ),
  },
  {
    id: "voice",
    label: "Voice features & microphone",
    content: (
      <>
        <p>
          Some parts of the App let you speak instead of type — for example,
          telling your shopping list &ldquo;add two avocados&rdquo;. Here&rsquo;s
          how that works:
        </p>
        <ul>
          <li>
            <strong>What we collect</strong> — a short audio clip of what you
            say, recorded only while you&rsquo;re actively using a voice feature.
            The App asks for microphone permission the first time you tap a
            microphone button, and never records in the background — recording
            only happens while the recording screen is visible, and you can
            cancel or stop at any time.
          </li>
          <li>
            <strong>Why</strong> — solely to carry out your spoken request, e.g.
            updating your shopping list.
          </li>
          <li>
            <strong>Who processes it</strong> — the clip is sent over an
            encrypted connection to our backend (<strong>Supabase</strong>),
            which passes it to <strong>Google</strong> (<strong>Gemini</strong>)
            to transcribe and interpret it. Google acts as our data processor
            and does <strong>not</strong> use your audio to train AI models.
          </li>
          <li>
            <strong>Retention</strong> — <strong>none</strong>. We don&rsquo;t
            store voice recordings or transcripts anywhere — no database, no
            file storage, no server logs. Audio is processed in memory and
            discarded, and the temporary file on your phone is deleted as soon
            as it&rsquo;s sent. Only the <strong>result</strong> of your command
            (e.g. the items added to your shopping list) is saved, like anything
            else you enter in the App.
          </li>
          <li>
            <strong>Your choice</strong> — voice is entirely optional.
            Everything can be done manually without it, and you can decline or
            revoke microphone permission at any time in your device settings.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "who-we-share-with",
    label: "Who we share with",
    content: (
      <>
        <p>
          We use suppliers who process data on our behalf, including:
        </p>
        <ul>
          <li><strong>Supabase</strong> — backend and storage</li>
          <li><strong>Google</strong> — Gemini AI (recipe imports, cook mode, voice)</li>
          <li><strong>Loops</strong> — service email</li>
          <li><strong>RevenueCat</strong> — subscription management</li>
          <li><strong>Apple / Google</strong> — payments and push notifications</li>
        </ul>
        <p>
          We may also disclose information if the law requires it, or to protect
          rights and safety. We <strong>do not sell</strong> your personal data.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    label: "Transfers outside Norway",
    content: (
      <p>
        Some providers may process data in the <strong>US</strong> or elsewhere.
        Where required, we rely on approved mechanisms (e.g. standard contractual
        clauses).
      </p>
    ),
  },
  {
    id: "data-retention",
    label: "How long we keep data",
    content: (
      <p>
        We keep your data while your account exists. After you delete your
        account, we delete or anonymise what we can; a little may remain briefly
        in backups or where the law requires.
      </p>
    ),
  },
  {
    id: "your-rights",
    label: "Your rights",
    content: (
      <>
        <p>Under the GDPR you may have the right to:</p>
        <ul>
          <li><strong>Access</strong> your personal data</li>
          <li><strong>Correct</strong> inaccurate data</li>
          <li><strong>Delete</strong> your data</li>
          <li><strong>Restrict</strong> or <strong>object</strong> to processing</li>
          <li><strong>Export</strong> your data (portability)</li>
          <li><strong>Withdraw consent</strong> where we rely on it</li>
          <li><strong>Complain</strong> to a supervisory authority</li>
        </ul>
        <div className="info-block">
          <p>
            <strong>Norway:</strong>{" "}
            <a
              href="https://www.datatilsynet.no/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datatilsynet
            </a>{" "}
            (Norwegian Data Protection Authority)
          </p>
          <p>
            <strong>EU/EEA:</strong> usually the authority where you live
          </p>
        </div>
        <p>
          Contact us at{" "}
          <a href="mailto:renity@unravelcommerce.com">
            renity@unravelcommerce.com
          </a>{" "}
          or via the{" "}
          <a href="/contact">contact form</a>. We&rsquo;ll handle
          privacy requests within the time the law allows. You can also use{" "}
          <strong>Delete account</strong> in the App where available.
        </p>
      </>
    ),
  },
  {
    id: "security",
    label: "Security",
    content: (
      <p>
        We use reasonable technical and organisational measures. No online
        service is 100% secure.
      </p>
    ),
  },
  {
    id: "children",
    label: "Children",
    content: (
      <p>
        The App is not aimed at young children. Don&rsquo;t use it if
        you&rsquo;re below the age your country sets for agreeing to services
        like this (often <strong>13</strong> or <strong>16</strong>). If you
        think we have a child&rsquo;s data by mistake, email us and we&rsquo;ll
        delete it.
      </p>
    ),
  },
  {
    id: "third-party",
    label: "Third-party sites",
    content: (
      <p>
        Importing a URL pulls content from <strong>other websites</strong>. We
        don&rsquo;t control those sites. Their rules apply to them.
      </p>
    ),
  },
  {
    id: "website-analytics",
    label: "Website analytics",
    content: (
      <p>
        On our marketing website (<strong>renityapp.com</strong>) we use{" "}
        <strong>Plausible Analytics</strong>, a privacy-friendly tool that is{" "}
        <strong>cookieless</strong> and collects only aggregate statistics (such
        as page views and referrers). It does not use cookies, does not track
        you across sites, and does not collect personal data. We do not sell or
        share this data.
      </p>
    ),
  },
  {
    id: "waitlist",
    label: "Launch waitlist",
    content: (
      <p>
        If you join the <strong>waitlist</strong> on our website, we store your{" "}
        <strong>email address</strong> with our email provider{" "}
        <strong>Loops</strong>, based on your <strong>consent</strong>, so we
        can notify you when Renity launches. We won&rsquo;t use it for anything
        else. You can <strong>unsubscribe</strong> via the link in any email or
        contact us to be removed at any time.
      </p>
    ),
  },
  {
    id: "changes",
    label: "Changes",
    content: (
      <p>
        We may update this policy and change the date at the top. If the change
        is important, we&rsquo;ll try to tell you in the App or by email.
      </p>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    content: (
      <div className="info-block">
        <p><strong>Unravel AS</strong> · Moss, Norway · Org.nr. 934 054 423</p>
        <p>
          <a href="mailto:renity@unravelcommerce.com">
            renity@unravelcommerce.com
          </a>
        </p>
        <p>
          <a href="https://www.renityapp.com" target="_blank" rel="noopener noreferrer">
            renityapp.com
          </a>
        </p>
      </div>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <div className="flex-1 bg-renity-bg-light">
        <LegalPageLayout
          title="Privacy Policy"
          lastUpdated="3 July 2026"
          intro={
            <>
              Provided by <strong>Unravel AS</strong>. This policy describes how
              we handle personal data when you use Renity.
            </>
          }
          sections={sections}
        />
      </div>
      <DownloadCTA />
    </>
  );
}
