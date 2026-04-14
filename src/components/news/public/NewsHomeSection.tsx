import Link from "next/link";
import type { PublicNewsCardDto } from "@/lib/news/mappings";

type NewsCardProps = {
  item: PublicNewsCardDto;
};

function getShortText(text?: string, maxLength = 120) {
  if (!text) return "";

  const cleanText = text.trim().replace(/\s+/g, " ");

  if (cleanText.length <= maxLength) {
    return cleanText;
  }

  return `${cleanText.slice(0, maxLength).trimEnd()}...`;
}

export default function NewsCard({ item }: NewsCardProps) {
  const shortTitle = getShortText(item.title, 55);
  const shortExcerpt = getShortText(item.excerpt, 110);

  return (
    <article className="pluggo-news-card">
      <Link href={`/news/${item.slug}`} className="pluggo-news-card__image-link">
        {item.coverImageUrl ? (
          <img
            src={item.coverImageUrl}
            alt={item.coverImageAlt || item.title}
            className="pluggo-news-card__image"
          />
        ) : null}
      </Link>

      <div className="pluggo-news-card__content">
        <span className="pluggo-news-chip">{item.category.name}</span>

        <h3 className="pluggo-news-card__title">
          <Link href={`/news/${item.slug}`}>{shortTitle}</Link>
        </h3>

        <p className="pluggo-news-card__excerpt">{shortExcerpt}</p>

        <div className="pluggo-news-card__meta">
          <span>{item.publishedAt ? new Date(item.publishedAt).toLocaleDateString("pt-BR") : "-"}</span>
          <span>{item.readingTime} min de leitura</span>
        </div>
      </div>
    </article>
  );
}