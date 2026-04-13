import PageHero from "@/components/page-hero/PageHero";

export default function NewsHero() {
  return (
    <PageHero
      title="News"
      description="Acompanhe as ultimas novidades da Plug Go sobre produto, tecnologia, seguranca e mercado."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "News" },
      ]}
    />
  );
}
