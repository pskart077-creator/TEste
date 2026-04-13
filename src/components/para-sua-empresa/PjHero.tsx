import PageHero from "@/components/page-hero/PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      title="Para sua empresa"
      description="Conheça as soluções da Plug Go para pessoa jurídica e descubra como a tecnologia pode trazer mais eficiência, segurança e performance para a rotina do seu negócio."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Para sua empresa" },
      ]}
    />
  );
}