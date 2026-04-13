import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { getNewsItems, getRecentNews } from "@/lib/news";

type NewsListProps = {
  limit?: number;
};

export default function NewsList({ limit = 3 }: NewsListProps) {
  const items =
    typeof limit === "number" ? getRecentNews(limit) : getNewsItems();

  return (
    <section className="news-section section-anchor">
      <div className="news-container">
        <div className="news-header">
          <div className="news-heading">
            <h2 className="news-title">
              Uma experiência financeira
              <br />
              mais simples, conectada e
              <br />
              funcional
            </h2>
          </div>

          <Link href="/news" className="news-header-button">
            Ver Todos
          </Link>
        </div>

        <div className="news-grid">
          {items.map((item) => (
            <article key={item.slug} className="news-card">
              <Link href={`/news/${item.slug}`} className="news-card__image-link">
                <div className="news-card__image-wrap">
                  {item.coverImage ? (
                    <img
                      src={item.coverImage}
                      alt={item.coverImageAlt || item.title}
                      className="news-card__image"
                    />
                  ) : (
                    <div className="news-card__image news-card__image--placeholder" />
                  )}
                </div>
              </Link>

              <div className="news-card__content">
                <span className="news-card__badge">{item.category}</span>

                <h3 className="news-card__title">
                  <Link href={`/news/${item.slug}`}>{item.title}</Link>
                </h3>

                <div className="news-card__meta">
                  <span className="news-card__author">
                    por {item.author || "Plug Go"}
                  </span>

                  <span className="news-card__meta-separator" />

                  <span className="news-card__date">
                    <CalendarDays size={15} strokeWidth={2} />
                    {item.publishedAt}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}