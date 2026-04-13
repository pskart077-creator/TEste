import PageHero from "@/components/page-hero/PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      title="Para você"
      description="Conheça as soluções da Plug Go para pessoa física e descubra como a tecnologia pode trazer mais praticidade, segurança e agilidade para o seu dia a dia."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Para você" },
      ]}
    />
  );
}