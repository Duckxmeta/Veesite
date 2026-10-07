import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SEED_ARTICLES, SITE_CONFIG } from "@/data/siteConfig";
import JsonLd from "@/components/JsonLd";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SEED_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: ArticlePageProps) {
  const article = SEED_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | Vee (@veemeta)`,
    description: article.answerLead,
    alternates: {
      canonical: `https://veesite.vercel.app/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.answerLead,
      type: "article",
      publishedTime: article.date,
      authors: [SITE_CONFIG.displayName],
      images: [
        {
          url: article.image,
          width: article.width,
          height: article.height,
          alt: article.imageAlt,
        },
      ],
    },
  };
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = SEED_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.date,
    dateModified: article.date,
    description: article.answerLead,
    image: `https://veesite.vercel.app${article.image}`,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.displayName,
      alternateName: SITE_CONFIG.handle,
      url: "https://veesite.vercel.app",
      sameAs: SITE_CONFIG.xUrl,
    },
    publisher: {
      "@type": "Person",
      name: SITE_CONFIG.displayName,
      url: "https://veesite.vercel.app",
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <div className="container" style={{ maxWidth: "800px" }}>
        <article style={{ padding: "20px 0 60px" }}>
          <div className="article-header">
            <div style={{ marginBottom: "12px" }}>
              <span className="badge">{article.category}</span>
            </div>
            <h1>{article.title}</h1>
            <div className="article-meta">
              <span>By {SITE_CONFIG.displayName} ({SITE_CONFIG.handle})</span>
              <span>•</span>
              <span>Published: {article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>

          {article.image && (
            <div style={{ margin: "24px 0 32px", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-color)" }}>
              <Image
                src={article.image}
                alt={article.imageAlt}
                width={article.width}
                height={article.height}
                priority
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <p style={{ padding: "8px 16px", background: "var(--bg-surface)", margin: 0, fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                {article.imageAlt}
              </p>
            </div>
          )}

          <div className="answer-lead">
            <p>
              <strong>Direct Answer:</strong> {article.answerLead}
            </p>
          </div>

          <div className="article-body">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div
            style={{
              marginTop: "48px",
              paddingTop: "24px",
              borderTop: "1px solid var(--border-color)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link href="/articles" className="descriptive-link">
              {"←"} Back to all articles
            </Link>
            <a
              href={SITE_CONFIG.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="descriptive-link"
            >
              Discuss on X (@veemeta) {"→"}
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
