import type { Metadata } from "next";
import SiteFooter from "@/components/layout/footer/SiteFooter";
import ServicesHero from "@/components/services/ServiceHero";
import { STATIC_PAGE_SEO, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(STATIC_PAGE_SEO.servicos);

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <SiteFooter />
    </>
  );
}
