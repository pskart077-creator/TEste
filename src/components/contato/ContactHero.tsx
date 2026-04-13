import PageHero from "@/components/page-hero/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      title="Contato"
      description="Fale com o time da Plug Go e descubra as melhores soluções para o seu momento."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contato" },
      ]}
    />
  );
}