import Link from "next/link";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata = {
  title: "Terms of Service | Vee (@veemeta)",
  description:
    "Terms of service for veesite.vercel.app. Short, plain-language usage terms.",
  alternates: {
    canonical: "https://veesite.vercel.app/terms",
  },
  openGraph: {
    title: "Terms of Service | Vee (@veemeta)",
    description:
      "Terms of service for veesite.vercel.app. Personal brand site notice, inquiry-only offers, and disclaimer.",
  },
};

export default function TermsPage() {
  return (
    <div className="container" style={{ maxWidth: "800px" }}>
      <section style={{ padding: "20px 0 60px" }}>
        <h1>Terms of Service</h1>

        <div className="answer-lead">
          <p>
            Welcome to veesite.vercel.app. By visiting or viewing this site, you agree to these straightforward terms.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginTop: "32px" }}>
          <div>
            <h2>1. Personal Brand Page</h2>
            <p>
              This website serves as the personal brand and identity portal for Vee (@veemeta). It is not the official corporate website of Doginal Dogs or any other entity, though her role as Chief Roar Officer is accurately represented.
            </p>
          </div>

          <div>
            <h2>2. Inquiry-Only Offers</h2>
            <p>
              All collaboration packages and service labels on this site ([OFFER_1], [OFFER_2], [OFFER_3]) represent inquiry options only. No transactions, pricing agreements, or binding commitments are formed through website browsing. Engagements are evaluated individually via email.
            </p>
          </div>

          <div>
            <h2>3. No Financial, Investment, or Legal Advice</h2>
            <p>
              Content, articles, briefings, and audio commentary linked or published on this site are for informational and cultural discussion purposes only. Nothing on this website constitutes financial, investment, trading, or legal advice.
            </p>
          </div>

          <div>
            <h2>4. Content Updates</h2>
            <p>
              Information, articles, and site content may be updated, amended, or revised over time to reflect current initiatives and public commentary.
            </p>
          </div>

          <div style={{ paddingTop: "20px", borderTop: "1px solid var(--border-color)" }}>
            <p style={{ fontSize: "0.95rem" }}>
              For legal or administrative inquiries, reach out to:{" "}
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
