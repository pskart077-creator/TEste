import type { Metadata } from "next";
import SiteFooter from "@/components/layout/footer/SiteFooter";
import Service from "@/components/para-voce/ServiceSplitPf";
import ServiceCard from "@/components/para-voce/ServiceCard";
import ServicesHero from "@/components/para-voce/ServicesHero";
import Contact from "@/components/contato/Contact";
import { STATIC_PAGE_SEO, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(STATIC_PAGE_SEO.pj);

export default function PjPage() {
  return (
    <>
      <ServicesHero />
      <Service />
      <ServiceCard />
      <Contact />
      <SiteFooter />
    </>
  );
}