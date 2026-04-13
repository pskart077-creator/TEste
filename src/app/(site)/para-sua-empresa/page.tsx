import type { Metadata } from "next";
import Contact from "@/components/contato/Contact";
import SiteFooter from "@/components/layout/footer/SiteFooter";
import ServiceCard from "@/components/para-sua-empresa/ServiceCard";
import PjHero from "@/components/para-sua-empresa/PjHero";
import ServiceSplitPj from "@/components/para-sua-empresa/ServiceSplitPj";
import { STATIC_PAGE_SEO, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(STATIC_PAGE_SEO.pj);

export default function PjPage() {
  return (
    <>
      <PjHero />
      <ServiceSplitPj />
      <ServiceCard />
      <Contact />
      <SiteFooter />
    </>
  );
}
