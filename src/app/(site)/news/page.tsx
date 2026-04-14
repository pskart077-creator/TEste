import type { Metadata } from "next";
import Contact from "@/components/contato/Contact";
import NewsHero from "@/components/news/NewsHero";
import SiteFooter from "@/components/layout/footer/SiteFooter";
import NewsPublicListing, {
  generateNewsListPageMetadata,
} from "@/components/news/public/NewsPublicListing";
import { listPublicNews } from "@/lib/news/queries";
import { publicNewsQuerySchema } from "@/lib/news/validators";

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function pickString(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const queryRaw = await searchParams;
  const query = publicNewsQuerySchema.parse({
    page: pickString(queryRaw.page),
    pageSize: pickString(queryRaw.pageSize),
    search: pickString(queryRaw.search),
    category: pickString(queryRaw.category),
    tag: pickString(queryRaw.tag),
    featured: pickString(queryRaw.featured),
  });

  return generateNewsListPageMetadata({
    page: query.page,
    pageSize: query.pageSize,
    search: query.search,
    category: query.category,
    tag: query.tag,
    featuredOnly: query.featured,
  });
}

export default async function NewsPage({ searchParams }: Props) {
  const queryRaw = await searchParams;
  const query = publicNewsQuerySchema.parse({
    page: pickString(queryRaw.page),
    pageSize: pickString(queryRaw.pageSize),
    search: pickString(queryRaw.search),
    category: pickString(queryRaw.category),
    tag: pickString(queryRaw.tag),
    featured: pickString(queryRaw.featured),
  });

  const filters = {
    page: query.page,
    pageSize: query.pageSize,
    search: query.search,
    category: query.category,
    tag: query.tag,
    featuredOnly: query.featured,
  };

  const result = await listPublicNews(filters);

  return (
    <>
      <NewsHero />
      <NewsPublicListing filters={filters} result={result} />
      <Contact />
      <SiteFooter />
    </>
  );
}