import type { NewsContentDocument } from "@/lib/news/types";

type NewsRichContentProps = {
  content: NewsContentDocument;
};

export default function NewsRichContent({ content }: NewsRichContentProps) {
  return (
    <div className="pluggo-news-rich">
      {content.blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "heading":
            if (block.level === 2) return <h2 key={key}>{block.text}</h2>;
            if (block.level === 3) return <h3 key={key}>{block.text}</h3>;
            return <h4 key={key}>{block.text}</h4>;

          case "paragraph":
            return <p key={key}>{block.text}</p>;

          case "list":
            return block.ordered ? (
              <ol key={key}>
                {block.items.map((item, itemIndex) => (
                  <li key={`${key}-item-${itemIndex}`}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul key={key}>
                {block.items.map((item, itemIndex) => (
                  <li key={`${key}-item-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            );

          case "quote":
            return (
              <blockquote key={key}>
                <p>{block.text}</p>
                {block.cite ? <cite>{block.cite}</cite> : null}
              </blockquote>
            );

          case "image":
            return (
              <figure key={key}>
                <img src={block.url} alt={block.alt} loading="lazy" />
                {block.caption ? <figcaption>{block.caption}</figcaption> : null}
              </figure>
            );

          case "callout":
            return (
              <div key={key} className={`pluggo-news-rich__callout is-${block.variant}`}>
                {block.title ? <strong>{block.title}</strong> : null}
                <p>{block.text}</p>
              </div>
            );

          case "faq":
            return (
              <div key={key} className="pluggo-news-rich__faq">
                {block.items.map((item, itemIndex) => (
                  <div key={`${key}-faq-${itemIndex}`} className="pluggo-news-rich__faq-item">
                    <strong>{item.question}</strong>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            );

          case "cta":
            return (
              <div key={key} className="pluggo-news-rich__callout is-success">
                <strong>{block.title}</strong>
                <p>{block.text}</p>
                <a href={block.buttonUrl} target="_blank" rel="noreferrer noopener">
                  {block.buttonLabel}
                </a>
              </div>
            );

          case "table":
            return (
              <div key={key} className="pluggo-news-rich__table-wrap">
                <table>
                  <thead>
                    <tr>
                      {block.headers.map((header, headerIndex) => (
                        <th key={`${key}-header-${headerIndex}`}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={`${key}-row-${rowIndex}`}>
                        {row.map((cell, cellIndex) => (
                          <td key={`${key}-cell-${rowIndex}-${cellIndex}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "embed":
            return (
              <div key={key}>
                <iframe
                  src={block.url}
                  title={`embed-${index}`}
                  loading="lazy"
                  width="100%"
                  height="420"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ border: 0, borderRadius: 12 }}
                />
              </div>
            );

          case "divider":
            return <hr key={key} />;

          default:
            return null;
        }
      })}
    </div>
  );
}
