import PageHero from "@/components/page-hero/PageHero";

export default function NewsHero() {
  return (
    <PageHero
      title="News"
      description="Acompanhe as novidades da Plug Go, com conteudos sobre tecnologia, mercado, inovacao e solucoes para pessoas e empresas."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "News" },
      ]}
    />
  );
}