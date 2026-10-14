import Image from "next/image";
import { SITE_CONFIG, WORK_FAQS, MEDIA_ASSETS } from "@/data/siteConfig";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Work with Vee (@veemeta)",
  description:
    "Book a time or reach out to Vee (@veemeta), Chief Recruit Officer at Doginal Dogs. Private consulting is also available through Crypto Spaces Network.",
  alternates: {
    canonical: "https://veesite.vercel.app/work-with-me",
  },
};

export default function WorkWithMePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: WORK_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const renderAnswer = (answer: string) => {
    const token = SITE_CONFIG.contactEmail;
    if (!answer.includes(token)) return answer;
    const [before, after] = answer.split(token);
    return (
      <>
        {before}
        <a href={SITE_CONFIG.contactMailto} className="descriptive-link">
          {SITE_CONFIG.contactEmail}
        </a>
        {after}
      </>
    );
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <div className="container">
        <section style={{ padding: "20px 0 40px" }}>
          <h1>Work with Vee</h1>
          <div className="answer-lead">
            <p>Got a big idea? Let&apos;s talk. Two easy paths below. Pick one and say hi.</p>
          </div>
        </section>

        <section style={{ margin: "20px 0 40px" }}>
          <h2>Two Ways In</h2>
          <div className="grid-2">
            <div className="card">
              <div>
                <h3 style={{ marginTop: 0 }}>Book a time or reach out</h3>
                <p>Tell us what you&apos;re after. A quick note is plenty.</p>
                <p style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                  <a href={SITE_CONFIG.contactMailto} className="descriptive-link">
                    {SITE_CONFIG.contactEmail}
                  </a>
                </p>
                <p>Private consulting is also available through CSN.</p>
              </div>
            </div>

            <div className="card">
              <div>
                <h3 style={{ marginTop: 0 }}>Crypto Spaces Network</h3>
                <p>
                  We partner with top hosts and leverage our distribution power to spotlight your project where the Web3 world is already tuned in.
                </p>
              </div>
              <a
                href={SITE_CONFIG.csnUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="descriptive-link"
                style={{ marginTop: "16px" }}
              >
                Find CSN on X {"→"}
              </a>
            </div>
          </div>
          <p style={{ marginTop: "8px" }}>
            Pricing is custom. A quick note on what you want is enough to start.
          </p>
        </section>

        <section style={{ margin: "40px 0" }}>
          <h2>Fit</h2>
          <div className="grid-2">
            <div
              style={{
                background: "rgba(222, 188, 255, 0.06)",
                border: "1px solid rgba(222, 188, 255, 0.35)",
                padding: "28px",
                borderRadius: "var(--radius-md)",
              }}
            >
              <h3 style={{ color: "#debcff", marginTop: 0 }}>✓ Good fit</h3>
              <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--text-secondary)" }}>
                <li style={{ marginBottom: "8px" }}>Collectors, builders, entrepreneurs, campaigns.</li>
                <li style={{ marginBottom: "8px" }}>Needing more reach.</li>
                <li style={{ marginBottom: "8px" }}>Ready for real results.</li>
              </ul>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px dashed rgba(255, 255, 255, 0.35)",
                padding: "28px",
                borderRadius: "var(--radius-md)",
              }}
            >
              <h3 style={{ color: "var(--text-primary)", marginTop: 0 }}>✕ Not a fit</h3>
              <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--text-secondary)" }}>
                <li style={{ marginBottom: "8px" }}>Financial, investment, or legal advice.</li>
                <li style={{ marginBottom: "8px" }}>Fake hype.</li>
                <li style={{ marginBottom: "8px" }}>Anything that asks her to speak as Doginal Dogs corporate.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="subs" style={{ margin: "40px 0" }}>
          <h2>Subs</h2>
          <div className="card">
            <div className="grid-2" style={{ alignItems: "center", gap: "24px" }}>
              <div>
                <p>Want more of the mic? Her X subscriptions live on X.</p>
                <a
                  href={SITE_CONFIG.subsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Subscribe on X
                </a>
              </div>
              <div style={{ maxWidth: "240px", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-color)", margin: "0 auto" }}>
                <Image
                  src="/media/vee/subs/veeGIF.gif"
                  alt="Vee waving hello in an animated clip."
                  width={1080}
                  height={1080}
                  unoptimized
                  loading="lazy"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <h2>Work with Vee FAQ</h2>
          <div>
            {WORK_FAQS.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <p className="faq-question">{faq.question}</p>
                <p className="faq-answer">{renderAnswer(faq.answer)}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
