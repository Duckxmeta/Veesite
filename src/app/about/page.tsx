import Image from "next/image";
import { SITE_CONFIG, ENTITY_FAQS, MEDIA_ASSETS } from "@/data/siteConfig";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "About Vee (@veemeta)",
  description:
    "Professional identity, active work, and background of Vee (@veemeta), Chief Roar Officer at Doginal Dogs and founding member of Crypto Spaces Network (CSN).",
  alternates: {
    canonical: "https://[CLIENT_DOMAIN]/about",
  },
  openGraph: {
    title: "About Vee (@veemeta)",
    description:
      "Professional identity of Vee (@veemeta), Chief Roar Officer at Doginal Dogs and founding member of Crypto Spaces Network (CSN).",
    images: [
      {
        url: MEDIA_ASSETS.headshot1.cardPath,
        width: MEDIA_ASSETS.headshot1.width,
        height: MEDIA_ASSETS.headshot1.height,
        alt: MEDIA_ASSETS.headshot1.alt,
      },
    ],
  },
};

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.displayName,
    alternateName: SITE_CONFIG.handle,
    url: "https://[CLIENT_DOMAIN]/about",
    image: `https://[CLIENT_DOMAIN]${MEDIA_ASSETS.headshot1.cardPath}`,
    sameAs: [SITE_CONFIG.xUrl, SITE_CONFIG.doginalDogsUrl],
    jobTitle: "Chief Roar Officer",
    worksFor: {
      "@type": "Organization",
      name: "Doginal Dogs",
      url: SITE_CONFIG.doginalDogsUrl,
    },
    description:
      "Professional identity of Vee (@veemeta), Chief Roar Officer at Doginal Dogs and founding member of Crypto Spaces Network (CSN).",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ENTITY_FAQS.map((faq) => ({
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
      <JsonLd data={[personSchema, faqSchema]} />

      <div className="container">
        <section style={{ padding: "20px 0 40px" }}>
          <h1>About Vee (@veemeta)</h1>

          <div className="answer-lead">
            <p>
              Vee (@veemeta) is the Chief Roar Officer at Doginal Dogs and a founding member of the Crypto Spaces Network (CSN). She focuses on personal brand discipline, community voice leadership, and live audio broadcasting.
            </p>
          </div>
        </section>

        {/* Identity & Active Work with Portrait */}
        <section style={{ margin: "30px 0" }}>
          <h2>Professional Identity &amp; Active Roles</h2>
          
          <div className="grid-2" style={{ alignItems: "flex-start", gap: "32px", marginBottom: "40px" }}>
            <div>
              <div className="card" style={{ marginBottom: "24px" }}>
                <h3>Chief Roar Officer at Doginal Dogs</h3>
                <p>
                  At{" "}
                  <a
                    href={SITE_CONFIG.doginalDogsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="descriptive-link"
                  >
                    Doginal Dogs
                  </a>
                  , Vee holds the primary public communications and community voice leadership role. As Chief Roar Officer, she coordinates official community Spaces, maintains brand energy, and leads public dialogue across live media channels.
                </p>
              </div>

              <div className="card">
                <h3>Founding Member of Crypto Spaces Network (CSN)</h3>
                <p>
                  As a founding member of the Crypto Spaces Network (CSN), Vee conducts live interactive broadcasts on X. These sessions bring together collectors, builders, and community members to discuss digital assets, community strategy, and live voice media dynamics.
                </p>
              </div>
            </div>

            <div style={{ position: "relative", width: "100%", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--border-color)" }}>
              <Image
                src={MEDIA_ASSETS.headshot1.cardPath}
                alt={MEDIA_ASSETS.headshot1.alt}
                width={MEDIA_ASSETS.headshot1.width}
                height={MEDIA_ASSETS.headshot1.height}
                loading="lazy"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* Proof Links */}
        <section style={{ margin: "40px 0" }}>
          <h2>Verified Proof Links</h2>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li style={{ marginBottom: "12px" }}>
              <strong>Official X Profile:</strong>{" "}
              <a
                href={SITE_CONFIG.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="descriptive-link"
              >
                https://x.com/veemeta?s=20
              </a>{" "}
              (Account ID: 32831485, Registered: April 18, 2009)
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong>Primary Organization:</strong>{" "}
              <a
                href={SITE_CONFIG.doginalDogsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="descriptive-link"
              >
                https://www.doginaldogs.com
              </a>{" "}
              (Doginal Dogs Ecosystem)
            </li>
          </ul>
        </section>

        {/* Narrative / Story Parts with Matching Image */}
        <section style={{ margin: "40px 0" }}>
          <h2>Narrative &amp; Public Focus</h2>
          <div className="grid-2" style={{ alignItems: "center", gap: "32px" }}>
            <div style={{ background: "var(--bg-surface)", padding: "28px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
              <p>
                <strong>Public Bio Statement:</strong> &ldquo;CSN Host | God is good | Chief Roar Officer @doginaldogs&rdquo;
              </p>
              <p>
                <strong>Core Pillars:</strong> Vee&apos;s public commentary centers around personal brand discipline (&ldquo;lock in&rdquo;), community coordination, live audio broadcasting, and Bitcoin as fixed-supply money.
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontStyle: "italic", marginBottom: 0 }}>
                {/* Draft Note: Extended biographical narrative items remain in draft state pending client additions. */}
              </p>
            </div>

            <div style={{ position: "relative", width: "100%", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-color)" }}>
              <Image
                src={MEDIA_ASSETS.ddveephoto.cardPath}
                alt={MEDIA_ASSETS.ddveephoto.alt}
                width={MEDIA_ASSETS.ddveephoto.width}
                height={MEDIA_ASSETS.ddveephoto.height}
                loading="lazy"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              {MEDIA_ASSETS.ddveephoto.caption && (
                <div style={{ padding: "8px 12px", background: "rgba(0,0,0,0.7)", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  {MEDIA_ASSETS.ddveephoto.caption}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* "In the Room" Photo Strip */}
        <section style={{ margin: "60px 0 40px" }}>
          <h2>In the Room &amp; Ecosystem Shots</h2>
          <p>A direct look at live events, community backdrops, and Doginal Dogs ecosystem art.</p>

          <div className="grid-2" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginTop: "24px" }}>
            <div style={{ background: "var(--bg-surface)", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-color)" }}>
              <Image
                src={MEDIA_ASSETS.ddnyc1.cardPath}
                alt={MEDIA_ASSETS.ddnyc1.alt}
                width={MEDIA_ASSETS.ddnyc1.width}
                height={MEDIA_ASSETS.ddnyc1.height}
                loading="lazy"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "12px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                {MEDIA_ASSETS.ddnyc1.caption}
              </div>
            </div>

            <div style={{ background: "var(--bg-surface)", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-color)" }}>
              <Image
                src={MEDIA_ASSETS.cherryddl.cardPath}
                alt={MEDIA_ASSETS.cherryddl.alt}
                width={MEDIA_ASSETS.cherryddl.width}
                height={MEDIA_ASSETS.cherryddl.height}
                loading="lazy"
                style={{ width: "100%", height: "200px", objectFit: "contain", background: "#000" }}
              />
              <div style={{ padding: "12px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                {MEDIA_ASSETS.cherryddl.caption}
              </div>
            </div>

            <div style={{ background: "var(--bg-surface)", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-color)" }}>
              <Image
                src={MEDIA_ASSETS.maryddl.cardPath}
                alt={MEDIA_ASSETS.maryddl.alt}
                width={MEDIA_ASSETS.maryddl.width}
                height={MEDIA_ASSETS.maryddl.height}
                loading="lazy"
                style={{ width: "100%", height: "200px", objectFit: "contain", background: "#000" }}
              />
              <div style={{ padding: "12px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                {MEDIA_ASSETS.maryddl.caption}
              </div>
            </div>

            <div style={{ background: "var(--bg-surface)", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-color)" }}>
              <Image
                src={MEDIA_ASSETS.bowdao.cardPath}
                alt={MEDIA_ASSETS.bowdao.alt}
                width={MEDIA_ASSETS.bowdao.width}
                height={MEDIA_ASSETS.bowdao.height}
                loading="lazy"
                style={{ width: "100%", height: "200px", objectFit: "contain", background: "#000" }}
              />
              <div style={{ padding: "12px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                {MEDIA_ASSETS.bowdao.caption}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "-8px", marginBottom: "24px" }}>
            Direct verification footprints and project background definitions.
          </p>
          <div>
            {ENTITY_FAQS.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <p className="faq-question">{faq.question}</p>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
