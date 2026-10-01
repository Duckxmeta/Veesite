import Link from "next/link";
import { SEED_ARTICLES } from "@/data/siteConfig";

export const metadata = {
  title: "Essays & Articles by Vee (@veemeta)",
  description:
    "Index of essays by Vee (@veemeta) covering personal brand strategy, Chief Roar Officer leadership at Doginal Dogs, live voice media, and community governance.",
  alternates: {
    canonical: "https://[CLIENT_DOMAIN]/articles",
  },
};

export default function ArticlesIndexPage() {
  return (
    <div className="container">
      <section style={{ padding: "20px 0 40px" }}>
        <h1>Essays & Articles by Vee</h1>
        <div className="answer-lead">
          <p>
            An index of analytical essays on community voice leadership, live audio Spaces strategy, personal brand discipline, and digital asset media.
          </p>
        </div>
      </section>

      <section style={{ margin: "20px 0 60px" }}>
        <div className="grid-2">
          {SEED_ARTICLES.map((article) => (
            <article key={article.slug} className="card">
              <div>
                <div className="card-header">
                  <span className="badge">{article.category}</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    {article.date} • {article.readTime}
                  </span>
                </div>
                <h2 style={{ fontSize: "1.35rem", margin: "16px 0 12px" }}>
                  <Link
                    href={`/articles/${article.slug}`}
                    style={{ color: "var(--text-primary)", textDecoration: "none" }}
                  >
                    {article.title}
                  </Link>
                </h2>
                <p style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>
                  {article.answerLead}
                </p>
              </div>
              <Link
                href={`/articles/${article.slug}`}
                className="descriptive-link"
                style={{ marginTop: "20px" }}
              >
                Read complete essay: {article.title} {"→"}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
