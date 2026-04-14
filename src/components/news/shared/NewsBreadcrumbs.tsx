import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type NewsBreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function NewsBreadcrumbs({ items }: NewsBreadcrumbsProps) {
  return (
    <nav className="pluggo-news-breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`}>
            {item.href && !isLast ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
            {!isLast ? <span className="pluggo-news-breadcrumbs__sep">/</span> : null}
          </span>
        );
      })}
    </nav>
  );
}
