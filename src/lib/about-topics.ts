import type { SlugPageDetail } from "@/types";

export const ABOUT_TOPICS: SlugPageDetail[] = [
  {
    slug: "hub-financeiro",
    title: "Hub financeiro completo",
    seoDescription:
      "Entenda como a Plug Go conecta solucoes financeiras para pessoas e empresas em uma experiencia unificada.",
    seoKeywords: [
      "hub financeiro completo",
      "sobre plug go",
      "plataforma financeira integrada",
    ],
    description:
      "A Plug Go conecta solucoes financeiras para pessoas e empresas em uma experiencia mais simples, segura e funcional.",
    highlights: [
      "Gestao inteligente da rotina financeira",
      "Mais clareza para movimentar e receber",
      "Experiencia simples e segura",
    ],
  },
  {
    slug: "missao",
    title: "Nossa missao",
    seoDescription:
      "Conheca a missao da Plug Go para simplificar a rotina financeira com uma plataforma moderna e eficiente.",
    seoKeywords: [
      "missao plug go",
      "simplificar rotina financeira",
      "plataforma financeira moderna",
    ],
    description:
      "Nossa missao e simplificar a rotina financeira com uma plataforma moderna, organizada e eficiente para pessoas e empresas.",
    highlights: [
      "Mais praticidade no dia a dia",
      "Operacao centralizada",
      "Solucoes para PF e PJ",
    ],
  },
  {
    slug: "visao",
    title: "Nossa visao",
    seoDescription:
      "Veja a visao da Plug Go sobre o futuro das solucoes financeiras para pessoas e empresas.",
    seoKeywords: [
      "visao plug go",
      "futuro financeiro",
      "inovacao em solucoes financeiras",
    ],
    description:
      "Queremos transformar a relacao com solucoes financeiras, entregando mais clareza, confianca e eficiencia em cada etapa.",
    highlights: [
      "Mais confianca nas operacoes",
      "Visao mais clara da rotina financeira",
      "Tecnologia com praticidade",
    ],
  },
];

export function getAboutTopicBySlug(slug: string) {
  return ABOUT_TOPICS.find((topic) => topic.slug === slug);
}
