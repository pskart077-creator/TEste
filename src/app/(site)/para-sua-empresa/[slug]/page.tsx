import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/layout/footer/SiteFooter";
import { buildDetailMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";
import { getServiceBySlug, SERVICES } from "@/lib/services";

export async function generateMetadata(
  props: PageProps<"/para-sua-empresa/[slug]">,
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
    `Conheça a solução ${service.title} da Plug Go para pessoa jurídica e descubra mais eficiência, segurança e performance para o seu negócio.`;

  const metadata = buildDetailMetadata(service, `/pj/${service.slug}`);

  return {
    ...metadata,
    title: `Para sua empresa | ${service.title} | ${SITE_NAME}`,
    description,
    keywords: [
      "para sua empresa",
      "pessoa jurídica",
      "soluções para empresas",
      "serviços para pessoa jurídica",
      ...(service.seoKeywords ?? []),
    ],
    openGraph: {
      ...metadata.openGraph,
      title: `Para sua empresa | ${service.title} | ${SITE_NAME}`,
      description,
      url: new URL(`/pj/${service.slug}`, SITE_URL).toString(),
    },
    twitter: {
      ...metadata.twitter,
      title: `Para sua empresa | ${service.title} | ${SITE_NAME}`,
      description,
    },
  };
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function PjDetailsPage(
  props: PageProps<"/para-sua-empresa/[slug]">,
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