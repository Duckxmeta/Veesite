import Image from "next/image";
import { SITE_CONFIG, WORK_FAQS } from "@/data/siteConfig";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Work with Vee (@veemeta)",
  description:
    "Book a time or reach out to Vee (@veemeta), Chief Roar Officer at Doginal Dogs. Private consulting is also available through Crypto Spaces Network.",
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
        <section id="problem" className="work-hero">
          <span className="eyebrow">Work with Vee</span>
          <h1>
            Got the idea. <span style={{ color: "#64ffff" }}>Need the room.</span>
          </h1>
          <p className="work-deck">
            Short on reach? Short on stage time? Say hi. A quick note on what you want is all it takes to start.
          </p>
          <a href="#ask" className="btn btn-primary">Start with a note</a>

          <div className="work-grid-2" style={{ marginTop: "48px", textAlign: "left" }}>
            <div className="work-card">
              <div>
                <span className="badge">For builders &amp; campaigns</span>
                <h3>Great project, quiet room</h3>
                <p><strong style={{ color: "var(--text-primary)" }}>The problem: </strong>You built something real. Not enough ears are tuned in yet.</p>
              </div>
              <a href="#track-1" className="descriptive-link">See the reach path {"→"}</a>
            </div>
            <div className="work-card">
              <div>
                <span className="badge">For creators &amp; emerging leaders</span>
                <h3>Big voice, small stage</h3>
                <p><strong style={{ color: "var(--text-primary)" }}>The problem: </strong>You have things to say and few real chances to practice saying them out loud.</p>
              </div>
              <a href="#track-2" className="descriptive-link">See the voice path {"→"}</a>
            </div>
          </div>
        </section>

        <section id="solution" className="work-section">
          <div className="work-section-head">
            <span className="eyebrow">Two ways in</span>
            <h2>Simple paths. <span style={{ color: "#ffe154" }}>Real results.</span></h2>
          </div>
          <div className="work-grid-2">
            <div id="track-1" className="work-card">
              <div>
                <span className="badge">Track 1</span>
                <h3>Reach out</h3>
                <ul className="work-check">
                  <li>Tell us what you&apos;re after in a quick note.</li>
                  <li>Collectors, builders, entrepreneurs, campaigns.</li>
                  <li>Pricing is custom.</li>
                </ul>
              </div>
              <div>
                <div className="work-result" style={{ marginBottom: "16px" }}>
                  <div className="label">The result</div>
                  <div className="text">A real conversation, no hoops.</div>
                </div>
                <a href={SITE_CONFIG.contactMailto} className="btn btn-primary">
                  {SITE_CONFIG.contactEmail}
                </a>
              </div>
            </div>

            <div id="track-2" className="work-card">
              <div>
                <span className="badge badge-cyan">Track 2</span>
                <h3>Custom consults</h3>
                <ul className="work-check">
                  <li>
                    We partner with top hosts and leverage our distribution power to spotlight your project where the Web3 world is already tuned in.
                  </li>
                  <li>Private consulting is also available through CSN.</li>
                </ul>
              </div>
              <div>
                <div className="work-result" style={{ marginBottom: "16px" }}>
                  <div className="label">The result</div>
                  <div className="text">Your project, where the ears already are.</div>
                </div>
                <a href={SITE_CONFIG.csnUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Talk through CSN {"→"}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="work-section">
          <div className="work-section-head">
            <span className="eyebrow">How it works</span>
            <h2>Three easy steps</h2>
          </div>
          <div className="work-grid-3">
            <div className="work-card">
              <div>
                <span className="work-num">01</span>
                <h3 className="num-title">Tell us what you want</h3>
                <p>One quick note. What you&apos;re building and what you need.</p>
              </div>
            </div>
            <div className="work-card">
              <div>
                <span className="work-num">02</span>
                <h3 className="num-title">Pick your path</h3>
                <p>Email for most things. CSN for custom consults.</p>
              </div>
            </div>
            <div className="work-card">
              <div>
                <span className="work-num">03</span>
                <h3 className="num-title">Make some noise</h3>
                <p>We get on the mic and get to work.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="ask" className="work-section" style={{ maxWidth: "820px", marginLeft: "auto", marginRight: "auto" }}>
          <div className="work-card" style={{ textAlign: "center", alignItems: "center", border: "1px solid rgba(222, 188, 255, 0.4)" }}>
            <span className="eyebrow">The ask</span>
            <h2 style={{ fontSize: "2.25rem", margin: 0 }}>Tell us what you&apos;re after.</h2>
            <p style={{ margin: 0 }}>A quick note is enough to start. Pricing is custom.</p>
            <a href={SITE_CONFIG.contactMailto} className="btn btn-primary">
              {SITE_CONFIG.contactEmail}
            </a>
          </div>
        </section>

        <section className="work-section" style={{ margin: "60px 0" }}>
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
                <li style={{ marginBottom: "8px" }}>Speaking as Doginal Dogs corporate.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="subs" className="work-section" style={{ margin: "60px 0" }}>
          <h2>Subs</h2>
          <div className="card">
            <div className="grid-2" style={{ alignItems: "center", gap: "24px", margin: 0 }}>
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
              <div style={{ position: "relative", width: "100%", maxWidth: "280px", aspectRatio: "1 / 1", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-color)", margin: "0 auto" }}>
                <Image
                  src="/media/vee/subs/vee-face.webp"
                  alt="Vee laughing, looking up."
                  fill
                  sizes="280px"
                  loading="lazy"
                  style={{ objectFit: "cover", objectPosition: "50% 35%" }}
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
