import type { Metadata } from "next";
import LegalPageLayout from "../../components/ui/LegalPageLayout";
import DownloadCTA from "../../components/sections/DownloadCTA";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of the Renity App, provided by Unravel AS.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    id: "summary",
    label: "Summary",
    content: (
      <ul>
        <li>
          Renity is for recipes, meal planning, households, import from links,
          AI-assisted cook mode, and optional notifications.
        </li>
        <li>
          You&rsquo;re responsible for your account and what you upload or
          import.
        </li>
        <li>
          Paid plans go through <strong>Apple</strong> or{" "}
          <strong>Google</strong>; their rules apply to payments and refunds.
        </li>
        <li>
          The App is provided <strong>as is</strong>, with liability limits
          allowed by law.
        </li>
        <li>We may update these Terms; check the date above.</li>
      </ul>
    ),
  },
  {
    id: "eligibility",
    label: "1. Eligibility",
    content: (
      <>
        <p>
          You must be old enough under <strong>Norwegian law</strong> and your
          local law to use the App and accept these Terms (often{" "}
          <strong>16</strong>, sometimes <strong>13</strong> with parental
          rules&mdash;check for your situation).
        </p>
        <p>
          Keep your login details private. You&rsquo;re responsible for what
          happens on your account.
        </p>
        <p>
          We may suspend or close accounts that break these Terms or the law.
        </p>
      </>
    ),
  },
  {
    id: "what-the-app-does",
    label: "2. What the App does",
    content: (
      <>
        <p>
          Renity lets you store and edit recipes (including photos from your{" "}
          <strong>camera</strong> or <strong>library</strong>), plan meals, use
          shopping lists, create <strong>households</strong> with roles,{" "}
          <strong>share</strong> recipes, <strong>import from URLs</strong>, use{" "}
          <strong>cook mode</strong> (AI-assisted), and get{" "}
          <strong>push notifications</strong> if you enable them.
        </p>
        <p>
          We may change features; we don&rsquo;t promise the App will always be
          available or error-free.
        </p>
      </>
    ),
  },
  {
    id: "your-content",
    label: "3. Your content",
    content: (
      <>
        <p>
          You keep ownership of content you create (&ldquo;
          <strong>User Content</strong>&rdquo;). You give us permission to{" "}
          <strong>host, use, and show</strong> that content as needed to run the
          App&mdash;including to people you share with or your household.
        </p>
        <p>
          You must have the right to post what you post, and it must not break
          the law or others&rsquo; rights.
        </p>
        <p>We may remove content or accounts if we reasonably need to.</p>
      </>
    ),
  },
  {
    id: "importing",
    label: "4. Importing from websites",
    content: (
      <>
        <p>
          When you paste a <strong>URL</strong>, we <strong>fetch</strong> that
          page to build a recipe. We may pull <strong>text and images</strong>.
          You must respect <strong>copyright</strong> and each site&rsquo;s{" "}
          <strong>terms</strong>. We don&rsquo;t guarantee the import will work
          or that your use is lawful.
        </p>
        <p>
          You can <strong>replace</strong> the default image with your own photo
          anytime&mdash;and we encourage you to do so.
        </p>
      </>
    ),
  },
  {
    id: "ai-features",
    label: "5. AI features",
    content: (
      <p>
        Import and cook mode use <strong>AI</strong>; answers can be{" "}
        <strong>wrong</strong>. Not medical or dietary advice. You&rsquo;re
        responsible for food safety and allergies.
      </p>
    ),
  },
  {
    id: "fair-use",
    label: "6. Fair use",
    content: (
      <p>
        Don&rsquo;t misuse the App: no hacking, no harming others, no illegal
        content, no trying to break limits (e.g. subscription/import limits)
        except as we allow.
      </p>
    ),
  },
  {
    id: "households",
    label: "7. Households and deletion",
    content: (
      <p>
        If you&rsquo;re a <strong>household admin</strong> and other people are
        still in the household, you may need to <strong>remove them</strong>{" "}
        before you can delete your account (the App will explain).
      </p>
    ),
  },
  {
    id: "subscriptions",
    label: "8. Subscriptions",
    content: (
      <>
        <p>
          Payments go through the <strong>App Store</strong> or{" "}
          <strong>Google Play</strong>. <strong>Apple</strong> or{" "}
          <strong>Google</strong> charges you&mdash;not us directly.{" "}
          <strong>Refunds and billing</strong> follow <strong>their</strong>{" "}
          rules. We use <strong>RevenueCat</strong> to know your plan; that syncs
          to our systems.
        </p>
        <p>Trials and limits depend on what we show in the App.</p>
      </>
    ),
  },
  {
    id: "our-rights",
    label: "9. Our rights in the App",
    content: (
      <p>
        The App (name, logo, code, design) is ours or our licensors&rsquo;. We
        give you a <strong>personal, non-transferable licence</strong> to use the
        App on your devices. Don&rsquo;t copy or reverse-engineer it except
        where the law allows.
      </p>
    ),
  },
  {
    id: "disclaimers",
    label: "10. Disclaimers",
    content: (
      <>
        <p>
          The App is provided <strong>&ldquo;as is&rdquo;</strong> and{" "}
          <strong>&ldquo;as available&rdquo;</strong> to the fullest extent
          allowed by law. We don&rsquo;t warrant it will be uninterrupted or
          free of errors.
        </p>
        <p>
          Recipe info is <strong>informational</strong>, not professional advice.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    label: "11. Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by law (including{" "}
          <strong>Norwegian consumer law</strong> where it applies to you):
        </p>
        <ul>
          <li>
            We&rsquo;re <strong>not liable</strong> for indirect or
            consequential losses, lost profits, lost data, etc.
          </li>
          <li>
            Our <strong>total liability</strong> for claims related to these
            Terms or the App is limited to the greater of: (a) what you paid us
            directly for the App in the 12 months before the claim, or (b){" "}
            <strong>NOK 500</strong>&mdash;unless mandatory law sets a higher
            floor for consumers.
          </li>
        </ul>
        <p>
          Some liability <strong>cannot</strong> be excluded (e.g. fraud, or
          death/personal injury caused by negligence where the law forbids
          exclusion). This section doesn&rsquo;t limit those cases.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    label: "12. Indemnity",
    content: (
      <p>
        If someone sues us because of <strong>your content</strong>,{" "}
        <strong>your imports</strong>, or <strong>your breach</strong> of these
        Terms, you&rsquo;ll cover our reasonable losses to the extent allowed by
        law.
      </p>
    ),
  },
  {
    id: "ending-use",
    label: "13. Ending use",
    content: (
      <>
        <p>
          You can stop using the App and delete your account (subject to section
          7). We can suspend or stop access if you breach these Terms or we wind
          down the App (we&rsquo;ll give notice where we can).
        </p>
        <p>
          Sections that should survive (ownership, disclaimers, liability where
          allowed, law of Norway) <strong>survive</strong> after you stop.
        </p>
      </>
    ),
  },
  {
    id: "norwegian-law",
    label: "14. Norwegian law and disputes",
    content: (
      <>
        <p>
          These Terms are governed by <strong>Norwegian law</strong>, without
          sending conflicts to other countries&rsquo; rules&mdash;except that if
          you&rsquo;re a consumer in the EU/EEA or UK, mandatory consumer
          protections in your country still apply where the law says they must.
        </p>
        <p>
          <strong>Venue:</strong> Disputes are subject to the ordinary courts of
          Norway, unless mandatory law for consumers says you can sue where you
          live.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    label: "15. Changes",
    content: (
      <p>
        We may update these Terms and the date at the top. Important
        changes&mdash;we&rsquo;ll try to notify you in the App or by email.
      </p>
    ),
  },
  {
    id: "other",
    label: "16. Other",
    content: (
      <p>
        If one part of these Terms is invalid, the rest stays. We may assign our
        side of the agreement; you may not, without our consent. The{" "}
        <strong>English</strong> version wins if translations disagree.
      </p>
    ),
  },
  {
    id: "contact",
    label: "17. Contact",
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

export default function TermsPage() {
  return (
    <>
      <div className="flex-1 bg-renity-bg-light">
        <LegalPageLayout
          title="Terms of Service"
          lastUpdated="8 April 2026"
          intro={
            <>
              These Terms govern your use of <strong>Renity</strong> (the
              &ldquo;App&rdquo;). By using the App, you agree to them. If you
              don&rsquo;t agree, don&rsquo;t use the App.
            </>
          }
          sections={sections}
        />
      </div>
      <DownloadCTA />
    </>
  );
}
