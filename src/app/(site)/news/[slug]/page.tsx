import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SlugDetails from "@/components/details/SlugDetails";
import SiteFooter from "@/components/layout/footer/SiteFooter";
import { NEWS_ITEMS, getNewsBySlug } from "@/lib/news";
import { buildDetailMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return NEWS_ITEMS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<"/news/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const item = getNewsBySlug(slug);

  if (!item) {
    return {
      title: "Conteudo nao encontrado",
      description: "O conteudo solicitado nao foi encontrado.",
    };
  }

  return buildDetailMetadata(item, `/news/${item.slug}`);
}

export default async function NewsSlugPage(props: PageProps<"/news/[slug]">) {
  const { slug } = await props.params;
  const item = getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <SlugDetails
        detail={item}
        backHref="/news"
        backLabel="Voltar para news"
        eyebrow="DETALHES DA NEWS"
      />
      <SiteFooter />
    </>
  );
}
