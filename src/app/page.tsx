import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, ENTITY_FAQS, SEED_ARTICLES, MEDIA_ASSETS } from "@/data/siteConfig";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Vee (@veemeta) | Chief Roar Officer at Doginal Dogs & CSN Host",
  description:
    "Vee (@veemeta) is the Chief Roar Officer at Doginal Dogs and host on Crypto Spaces Network (CSN). Active on X since April 2009.",
  alternates: {
    canonical: "https://[CLIENT_DOMAIN]",
  },
  openGraph: {
    title: "Vee (@veemeta) | Chief Roar Officer at Doginal Dogs",
    description:
      "Official website of Vee (@veemeta), Chief Roar Officer at Doginal Dogs and CSN Spaces host.",
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
    name: SITE_CONFIG.displayName,
    alternateName: SITE_CONFIG.handle,
    url: "https://[CLIENT_DOMAIN]",
    image: `https://[CLIENT_DOMAIN]${MEDIA_ASSETS.profpic.heroPath}`,
    sameAs: [SITE_CONFIG.xUrl, SITE_CONFIG.doginalDogsUrl],
    jobTitle: "Chief Roar Officer",
    worksFor: {
      "@type": "Organization",
      name: "Doginal Dogs",
      url: SITE_CONFIG.doginalDogsUrl,
    },
    description:
      "Vee (@veemeta) is the Chief Roar Officer at Doginal Dogs and a host on the Crypto Spaces Network (CSN).",
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

  const latestArticles = SEED_ARTICLES.slice(0, 3);

  return (
    <>
      <JsonLd data={[personSchema, faqSchema]} />

      <div className="container">
        {/* Hero Section with Portrait */}
        <section style={{ padding: "20px 0 40px" }}>
          <div className="grid-2" style={{ alignItems: "center", gap: "40px" }}>
            <div>
              <h1>Vee — Chief Roar Officer at Doginal Dogs</h1>

              <div className="answer-lead">
                <p>
                  Vee (@veemeta) is the Chief Roar Officer at Doginal Dogs and a host on the Crypto Spaces Network (CSN). She has maintained an active presence on X since April 18, 2009.
                </p>
              </div>

              <p>
                This website serves as the canonical digital home for Vee. It provides an index of active initiatives, publications, and direct channels to connect.
              </p>
            </div>

            <div style={{ width: "100%", height: "100%", maxHeight: "70vh", display: "flex", justifyContent: "center" }}>
              <Image
                src={MEDIA_ASSETS.profpic.heroPath}
                alt={MEDIA_ASSETS.profpic.alt}
                width={MEDIA_ASSETS.profpic.width}
                height={MEDIA_ASSETS.profpic.height}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "70vh",
                  objectFit: "cover",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--border-color)",
                }}
              />
            </div>
          </div>
        </section>

        {/* Featured Initiatives */}
        <section style={{ margin: "40px 0" }}>
          <h2>Featured Initiatives</h2>
          <div className="grid-3">
            <div className="card">
              <div>
                <div style={{ position: "relative", width: "100%", height: "200px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "16px" }}>
                  <Image
                    src={MEDIA_ASSETS.ddveephoto.cardPath}
                    alt={MEDIA_ASSETS.ddveephoto.alt}
                    width={MEDIA_ASSETS.ddveephoto.width}
                    height={MEDIA_ASSETS.ddveephoto.height}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="card-header">
                  <h3>Doginal Dogs</h3>
                  <span className="badge">Primary Org</span>
                </div>
                <p>
                  Vee serves as Chief Roar Officer at Doginal Dogs, leading community voice broadcasts, brand momentum, and direct engagement.
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
                Chief Roar Officer at Doginal Dogs {"→"}
              </a>
            </div>

            <div className="card">
              <div>
                <div style={{ position: "relative", width: "100%", height: "200px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "16px" }}>
                  <Image
                    src={MEDIA_ASSETS.ddnyc1.cardPath}
                    alt={MEDIA_ASSETS.ddnyc1.alt}
                    width={MEDIA_ASSETS.ddnyc1.width}
                    height={MEDIA_ASSETS.ddnyc1.height}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="card-header">
                  <h3>Crypto Spaces Network</h3>
                  <span className="badge badge-cyan">Live Media</span>
                </div>
                <p>
                  Regular host on CSN, conducting live audio broadcasts on X focused on Web3 communities, Bitcoin, and direct voice interaction.
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
                <div style={{ position: "relative", width: "100%", height: "200px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "16px" }}>
                  <Image
                    src={MEDIA_ASSETS.headshot1.cardPath}
                    alt={MEDIA_ASSETS.headshot1.alt}
                    width={MEDIA_ASSETS.headshot1.width}
                    height={MEDIA_ASSETS.headshot1.height}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="card-header">
                  <h3>Work with Vee</h3>
                  <span className="badge">Direct Collaboration</span>
                </div>
                <p>
                  Inquire about speaking, event moderation, community strategy advisory, or collaborative voice broadcasts.
                </p>
              </div>
              <Link
                href="/work-with-me"
                className="descriptive-link"
                style={{ marginTop: "16px" }}
              >
                Work with Vee {"→"}
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
            <div className="grid-3">
              {latestArticles.map((article) => (
                <article key={article.slug} className="card">
                  <div>
                    <Link href={`/articles/${article.slug}`} style={{ display: "block", marginBottom: "16px" }}>
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
                    <div className="card-header">
                      <span className="badge">{article.category}</span>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                        {article.readTime}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "1.15rem", margin: "12px 0 8px" }}>
                      <Link
                        href={`/articles/${article.slug}`}
                        style={{ color: "var(--text-primary)", textDecoration: "none" }}
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p style={{ fontSize: "0.95rem" }}>{article.answerLead}</p>
                  </div>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="descriptive-link"
                    style={{ marginTop: "16px", fontSize: "0.9rem" }}
                  >
                    Read essay: {article.title} {"→"}
                  </Link>
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
