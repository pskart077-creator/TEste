import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/layout/footer/SiteFooter";
import { buildDetailMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";
import { getServiceBySlug, SERVICES } from "@/lib/services";

export async function generateMetadata(
  props: PageProps<"/para-voce/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Serviço não encontrado",
      description: "O conteúdo solicitado não foi encontrado.",
    };
  }

  const description =
    service.seoDescription ||
    `Conheça a solução ${service.title} da Plug Go para pessoa física e descubra mais praticidade, segurança e eficiência no seu dia a dia.`;

  const metadata = buildDetailMetadata(service, `/pf/${service.slug}`);

  return {
    ...metadata,
    title: `Para você | ${service.title} | ${SITE_NAME}`,
    description,
    keywords: [
      "para você",
      "pessoa física",
      "soluções para pessoa física",
      "serviços para pessoa física",
      ...(service.seoKeywords ?? []),
    ],
    openGraph: {
      ...metadata.openGraph,
      title: `Para você | ${service.title} | ${SITE_NAME}`,
      description,
      url: new URL(`/pf/${service.slug}`, SITE_URL).toString(),
    },
    twitter: {
      ...metadata.twitter,
      title: `Para você | ${service.title} | ${SITE_NAME}`,
      description,
    },
  };
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function PfDetailsPage(
  props: PageProps<"/para-voce/[slug]">,
) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SiteFooter />
    </>
  );
}