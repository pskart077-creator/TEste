import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/layout/footer/SiteFooter";
import ServiceDetails from "@/components/pj/ServiceDetails";
import { buildServiceMetadata } from "@/lib/seo";
import { getServiceBySlug, SERVICES } from "@/lib/services";

export async function generateMetadata(
  props: PageProps<"/servicos/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Serviço não encontrado",
      description: "O conteúdo solicitado não foi encontrado.",
    };
  }

  return buildServiceMetadata(service);
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailsPage(
  props: PageProps<"/servicos/[slug]">,
) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetails service={service} />
      <SiteFooter />
    </>
  );
}
