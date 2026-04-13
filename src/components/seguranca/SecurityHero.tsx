import PageHero from "@/components/page-hero/PageHero";

export default function SecurityHero() {
  return (
    <PageHero
      title="Seguranca"
      description="Veja como a Plug Go estrutura processos para manter operacoes financeiras com mais confianca e previsibilidade."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Seguranca" },
      ]}
    />
  );
}
