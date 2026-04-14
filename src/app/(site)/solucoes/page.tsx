import type { Metadata } from "next";
import SiteFooter from "@/components/layout/footer/SiteFooter";
import ServicesHero from "@/components/services/ServiceHero";
import Services from "@/components/services/services";
import Contact from "@/components/contato/Contact";
import Solutions from "@/components/solutions/Solutions";
import { STATIC_PAGE_SEO, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(STATIC_PAGE_SEO.solucoes);

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Solutions />
      <Services />
      <Contact />
      <SiteFooter />
    </>
  );
}
