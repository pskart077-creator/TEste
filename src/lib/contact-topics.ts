import type { SlugPageDetail } from "@/types";

export const CONTACT_TOPICS: SlugPageDetail[] = [
  {
    slug: "atendimento-comercial",
    title: "Atendimento comercial",
    seoDescription:
      "Fale com o time comercial da Plug Go para avaliar solucoes aderentes ao seu momento.",
    seoKeywords: [
      "atendimento comercial",
      "contato comercial plug go",
      "consultoria financeira",
    ],
    description:
      "Converse com nosso time comercial para entender como as solucoes da Plug Go podem se encaixar na sua operacao.",
    highlights: [
      "Mapeamento do seu contexto",
      "Orientacao sobre servicos aderentes",
      "Suporte para inicio da jornada",
    ],
  },
  {
    slug: "suporte",
    title: "Suporte",
    seoDescription:
      "Acesse o suporte da Plug Go para tirar duvidas e manter sua rotina financeira operando com fluidez.",
    seoKeywords: [
      "suporte plug go",
      "atendimento financeiro",
      "ajuda plataforma financeira",
    ],
    description:
      "Nosso suporte ajuda a manter sua operacao estavel e funcional, com respostas objetivas para o dia a dia.",
    highlights: [
      "Apoio em duvidas operacionais",
      "Orientacao sobre fluxos da plataforma",
      "Atendimento para pessoas e empresas",
    ],
  },
  {
    slug: "parcerias",
    title: "Parcerias",
    seoDescription:
      "Entre em contato com a Plug Go para avaliar oportunidades de parceria e colaboracao.",
    seoKeywords: [
      "parcerias plug go",
      "oportunidades de parceria",
      "ecossistema financeiro",
    ],
    description:
      "Construimos parcerias para ampliar o acesso a solucoes financeiras e fortalecer a experiencia de pessoas e empresas.",
    highlights: [
      "Modelos de colaboracao alinhados ao negocio",
      "Integracao com foco em valor para o cliente",
      "Relacao de longo prazo com evolucao continua",
    ],
  },
];

export function getContactTopicBySlug(slug: string) {
  return CONTACT_TOPICS.find((topic) => topic.slug === slug);
}
