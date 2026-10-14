import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, ENTITY_FAQS, getSortedArticles, MEDIA_ASSETS } from "@/data/siteConfig";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Vee (@veemeta) | Chief Recruit Officer at Doginal Dogs & CSN Founding Member",
  description:
    "Vee — @veemeta. Chief Recruit Officer at Doginal Dogs. Founding member of Crypto Spaces Network. Toronto.",
  alternates: {
    canonical: "https://veesite.vercel.app",
  },
  openGraph: {
    title: "Vee (@veemeta) | Chief Recruit Officer at Doginal Dogs",
    description:
      "Official website of Vee (@veemeta), Chief Recruit Officer at Doginal Dogs and founding member of Crypto Spaces Network.",
    images: [
      {
        url: MEDIA_ASSETS.profpic.heroPath,
        width: MEDIA_ASSETS.profpic.width,
        height: MEDIA_ASSETS.profpic.height,
        alt: MEDIA_ASSETS.profpic.alt,
      },
    ],
  },
};

export default function HomePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.legalName,
    alternateName: [SITE_CONFIG.knownAs, SITE_CONFIG.handle],
    homeLocation: { "@type": "Place", name: "Toronto, Canada" },
    url: "https://veesite.vercel.app",
    image: `https://veesite.vercel.app${MEDIA_ASSETS.profpic.heroPath}`,
    sameAs: [SITE_CONFIG.xUrl, SITE_CONFIG.doginalDogsUrl],
    jobTitle: "Chief Recruit Officer",
    worksFor: {
      "@type": "Organization",
      name: "Doginal Dogs",
      url: SITE_CONFIG.doginalDogsUrl,
    },
    description:
      "Veronica Michelle Campbell, known as Vee Meta (@veemeta), is Chief Recruit Officer at Doginal Dogs and a founding member of the Crypto Spaces Network (CSN). Toronto, Canada.",
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

  const latestArticles = getSortedArticles().slice(0, 3);

  return (
    <>
      <JsonLd data={[personSchema, faqSchema]} />

      <div className="container">
        {/* Full-width Centered Hero Section */}
        <section style={{ padding: "48px 0 48px", textAlign: "center", width: "100%", margin: "0 auto" }}>
          <h1 style={{ fontSize: "3.25rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "20px" }}>
            It started on the <span style={{ color: "#64ffff" }}>mic</span>.
          </h1>          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.15rem",
              maxWidth: "640px",
              margin: "0 auto 36px",
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            Vee — @veemeta. Chief Recruit Officer at Doginal Dogs. Founding member of Crypto Spaces Network. Toronto.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/about" className="btn btn-primary">
              About Vee
            </Link>
            <Link href="/work-with-me" className="btn btn-secondary">
              Work with Vee &rarr;
            </Link>
          </div>
        </section>

        {/* Featured Initiatives */}
        <section style={{ margin: "40px 0" }}>
          <h2>Featured Initiatives</h2>
          <div className="grid-3">
            <div className="card">
              <div>
                <div style={{ position: "relative", width: "100%", height: "200px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", background: "#000" }}>
                  <Image
                    src={MEDIA_ASSETS.ddveephoto.cardPath}
                    alt={MEDIA_ASSETS.ddveephoto.alt}
                    width={MEDIA_ASSETS.ddveephoto.width}
                    height={MEDIA_ASSETS.ddveephoto.height}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", margin: "0 auto" }}
                  />
                </div>
                <div className="card-header">
                  <h3>Doginal Dogs</h3>
                  <span className="badge">Community &amp; Voice</span>
                </div>
                <p>
                  Recruiting the pack, rallying the crew, and roaring in Spaces. Come bark with us.
                </p>
                {MEDIA_ASSETS.ddveephoto.caption && (
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                    {MEDIA_ASSETS.ddveephoto.caption}
                  </p>
                )}
              </div>
              <a
                href={SITE_CONFIG.doginalDogsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="descriptive-link"
                style={{ marginTop: "16px" }}
              >
                Chief Recruit Officer at Doginal Dogs {"→"}
              </a>
            </div>

            <div className="card">
              <div>
                <div style={{ position: "relative", width: "100%", height: "200px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", background: "#000" }}>
                  <Image
                    src={MEDIA_ASSETS.ddnyc1.cardPath}
                    alt={MEDIA_ASSETS.ddnyc1.alt}
                    width={MEDIA_ASSETS.ddnyc1.width}
                    height={MEDIA_ASSETS.ddnyc1.height}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", margin: "0 auto" }}
                  />
                </div>
                <div className="card-header">
                  <h3>Crypto Spaces Network</h3>
                  <span className="badge badge-cyan">Live Audio</span>
                </div>
                <p>
                  Founding member. We spotlight projects where the Web3 world is already tuned in.
                </p>
                {MEDIA_ASSETS.ddnyc1.caption && (
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                    {MEDIA_ASSETS.ddnyc1.caption}
                  </p>
                )}
              </div>
              <a
                href={SITE_CONFIG.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="descriptive-link"
                style={{ marginTop: "16px" }}
              >
                Listen to Vee on CSN {"→"}
              </a>
            </div>

            <div className="card">
              <div>
                <div style={{ position: "relative", width: "100%", height: "200px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", background: "#000" }}>
                  <Image
                    src={MEDIA_ASSETS.headshot1.cardPath}
                    alt={MEDIA_ASSETS.headshot1.alt}
                    width={MEDIA_ASSETS.headshot1.width}
                    height={MEDIA_ASSETS.headshot1.height}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", margin: "0 auto" }}
                  />
                </div>
                <div className="card-header">
                  <h3>Work with Vee</h3>
                  <span className="badge">Collaborations</span>
                </div>
                <p>
                  Got a project, a stage, or a big idea? Drop a note. Let's make some noise.
                </p>
              </div>
              <Link
                href="/work-with-me"
                className="descriptive-link"
                style={{ marginTop: "16px" }}
              >
                Get in touch {"→"}
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section style={{ margin: "60px 0 40px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <h2>Latest Articles</h2>
            <Link href="/articles" className="descriptive-link">
              View all essays {"→"}
            </Link>
          </div>

          {latestArticles.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", margin: "24px 0 40px" }}>
              {latestArticles.map((article) => (
                <article key={article.slug} className="card" style={{ flexDirection: "row", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                  <Link href={`/articles/${article.slug}`} style={{ display: "block", flex: "0 0 280px", maxWidth: "100%", alignSelf: "center" }}>
                    <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-color)" }}>
                      <Image
                        src={article.image}
                        alt={article.imageAlt}
                        width={article.width}
                        height={article.height}
                        loading="lazy"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div style={{ flex: "1 1 240px", minWidth: 0 }}>
                    <div className="card-header">
                      <span className="badge">{article.category}</span>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{article.readTime}</span>
                    </div>
                    <h3 style={{ fontSize: "1.15rem", margin: "12px 0 8px" }}>
                      <Link href={`/articles/${article.slug}`} style={{ color: "var(--text-primary)", textDecoration: "none" }}>
                        {article.title}
                      </Link>
                    </h3>
                    <p style={{ fontSize: "0.95rem" }}>{article.answerLead}</p>
                    <Link href={`/articles/${article.slug}`} className="descriptive-link" style={{ fontSize: "0.9rem" }}>
                      Read essay: {article.title} {"→"}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p style={{ color: "var(--text-muted)", fontStyle: "italic", marginTop: "16px" }}>
              Essays are added as they are published.
            </p>
          )}
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "-8px", marginBottom: "24px" }}>
            Quick answers. Fresh brew.
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
