import Image from "next/image";
import { SITE_CONFIG, WORK_FAQS, MEDIA_ASSETS } from "@/data/siteConfig";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Work with Vee (@veemeta)",
  description:
    "Explore collaboration offers, speaking, event moderation, and strategic community advisory with Vee (@veemeta), Chief Roar Officer at Doginal Dogs.",
  alternates: {
    canonical: "https://[CLIENT_DOMAIN]/work-with-me",
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

  return (
    <>
      <JsonLd data={faqSchema} />

      <div className="container">
        <section style={{ padding: "20px 0 40px" }}>
          <h1>Work with Vee</h1>
          <div className="answer-lead">
            <p>
              Vee (@veemeta) engages with select brands, Web3 organizations, and live media initiatives on a structured inquiry basis.
            </p>
          </div>
        </section>

        {/* Offers Grid */}
        <section style={{ margin: "20px 0 40px" }}>
          <h2>Current Collaboration Offers</h2>
          <p>
            All offerings remain inquiry-only until specific parameters, scope, and scheduling are evaluated.
          </p>

          <div className="grid-3">
            {SITE_CONFIG.offers.map((offer) => (
              <div key={offer.id} className="card">
                <div>
                  <div className="card-header">
                    <span className="badge">{offer.badge}</span>
                  </div>
                  <h3 style={{ fontSize: "1.3rem", margin: "12px 0 8px" }}>
                    <span className="placeholder-box">{offer.title}</span>
                  </h3>
                  <p style={{ fontWeight: 500, color: "var(--text-primary)" }}>
                    {offer.description}
                  </p>
                  <p style={{ fontSize: "0.95rem" }}>{offer.details}</p>
                </div>
                <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--border-color)" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    Status: Inquiry Required
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fit / Not Fit Section */}
        <section style={{ margin: "40px 0" }}>
          <h2>Fit &amp; Criteria</h2>
          <div className="grid-2">
            <div
              style={{
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                padding: "28px",
                borderRadius: "var(--radius-md)",
              }}
            >
              <h3 style={{ color: "#34d399", marginTop: 0 }}>Good Fit</h3>
              <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--text-secondary)" }}>
                <li style={{ marginBottom: "8px" }}>
                  Web3 &amp; Ordinals communities seeking live voice media moderation.
                </li>
                <li style={{ marginBottom: "8px" }}>
                  Live audio Spaces hosting on Crypto Spaces Network (CSN).
                </li>
                <li style={{ marginBottom: "8px" }}>
                  Initiatives aligned with Doginal Dogs and disciplined brand building (&ldquo;lock in&rdquo;).
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "rgba(239, 68, 68, 0.08)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                padding: "28px",
                borderRadius: "var(--radius-md)",
              }}
            >
              <h3 style={{ color: "#f87171", marginTop: 0 }}>Not a Fit</h3>
              <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--text-secondary)" }}>
                <li style={{ marginBottom: "8px" }}>
                  Requests for financial, investment, or legal advice.
                </li>
                <li style={{ marginBottom: "8px" }}>
                  Projects requesting misleading promotional claims or fake hype.
                </li>
                <li style={{ marginBottom: "8px" }}>
                  Engagements requiring undisclosed corporate employment outside Doginal Dogs and CSN.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Path with Small Type-First Portrait */}
        <section style={{ margin: "50px 0" }}>
          <h2>Direct Contact Path</h2>
          <div className="card">
            <div className="grid-2" style={{ alignItems: "center", gap: "24px" }}>
              <div>
                <h3>Initiate an Inquiry</h3>
                <p>
                  To initiate a collaboration inquiry, submit details to the primary booking channel:
                </p>
                <div style={{ margin: "20px 0" }}>
                  <p style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                    Contact Target:{" "}
                    <a
                      href={`mailto:${SITE_CONFIG.contactEmail}`}
                      className="descriptive-link"
                    >
                      {SITE_CONFIG.contactEmail}
                    </a>
                  </p>
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: 0 }}>
                  Include initiative details, proposed timeline, and specific scope in your message.
                </p>
              </div>

              <div style={{ maxWidth: "240px", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-color)", margin: "0 auto" }}>
                <Image
                  src={MEDIA_ASSETS.headshot1.thumbPath}
                  alt={MEDIA_ASSETS.headshot1.alt}
                  width={MEDIA_ASSETS.headshot1.width}
                  height={MEDIA_ASSETS.headshot1.height}
                  loading="lazy"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Work with Vee FAQ</h2>
          <div>
            {WORK_FAQS.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <p className="faq-question">{faq.question}</p>
                <p className="faq-answer">
                  {faq.answer.includes(SITE_CONFIG.contactEmail) ? (
                    <>
                      {faq.answer.split(`mailto:${SITE_CONFIG.contactEmail}`)[0]}
                      <a
                        href={`mailto:${SITE_CONFIG.contactEmail}`}
                        className="descriptive-link"
                      >
                        {SITE_CONFIG.contactEmail}
                      </a>
                      {faq.answer.split(`mailto:${SITE_CONFIG.contactEmail}`)[1]}
                    </>
                  ) : (
                    faq.answer
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
