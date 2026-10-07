import Link from "next/link";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata = {
  title: "Privacy Policy | Vee (@veemeta)",
  description:
    "Privacy policy for veesite.vercel.app. Short, plain-language privacy practices.",
  alternates: {
    canonical: "https://veesite.vercel.app/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Vee (@veemeta)",
    description:
      "Privacy policy for veesite.vercel.app. No account storage, mailto contact only, no cookies beyond basic Vercel hosting.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="container" style={{ maxWidth: "800px" }}>
      <section style={{ padding: "20px 0 60px" }}>
        <h1>Privacy Policy</h1>

        <div className="answer-lead">
          <p>
            This site is a personal brand page for Vee (@veemeta). We respect your privacy and keep data collection to a minimum.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginTop: "32px" }}>
          <div>
            <h2>1. Accounts &amp; Data Storage</h2>
            <p>
              This website does not require or store user accounts, logins, passwords, or personal profile databases.
            </p>
          </div>

          <div>
            <h2>2. Contact &amp; Email Handling</h2>
            <p>
              The only contact mechanism provided on this site is direct email via standard mailto links (
              <a href={SITE_CONFIG.contactMailto} className="descriptive-link">
                {SITE_CONFIG.contactEmail}
              </a>
              ). Any email you send is handled directly by your email provider and ours. We do not operate an online contact web form or database.
            </p>
          </div>

          <div>
            <h2>3. Newsletters &amp; Analytics Cookies</h2>
            <p>
              We do not run an email newsletter or marketing subscription list. We do not deploy third-party advertising tracking scripts or behavioral cookies. The site uses basic Vercel hosting analytics to monitor traffic and system performance.
            </p>
          </div>

          <div>
            <h2>4. Compliance Note</h2>
            <p>
              This site is a lightweight informational showcase. We do not claim formal GDPR certification or corporate privacy framework seals.
            </p>
          </div>

          <div style={{ paddingTop: "20px", borderTop: "1px solid var(--border-color)" }}>
            <p style={{ fontSize: "0.95rem" }}>
              Questions about this privacy statement? Contact:{" "}
              <a href={SITE_CONFIG.contactMailto} className="descriptive-link">
                {SITE_CONFIG.contactEmail}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
