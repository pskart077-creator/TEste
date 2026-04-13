import type { Metadata } from "next";
import Contact from "@/components/contato/Contact";
import SiteFooter from "@/components/layout/footer/SiteFooter";
import NewsHero from "@/components/news/NewsHero";
import NewsList from "@/components/news/NewsList";
import { STATIC_PAGE_SEO, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(STATIC_PAGE_SEO.news);

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <NewsList />
      <Contact />
      <SiteFooter />
    </>
  );
}
