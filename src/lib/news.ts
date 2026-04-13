import type { SlugPageDetail } from "@/types";

export type NewsItem = SlugPageDetail & {
  publishedAt: string;
  category: string;
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    slug: "pluggo-lanca-novo-hub",
    title: "Plug Go lanca novo hub para operacoes financeiras",
    seoDescription:
      "A Plug Go apresenta um novo hub com foco em operacao integrada para pessoas e empresas.",
    seoKeywords: [
      "news plug go",
      "hub financeiro",
      "operacao integrada",
      "novidade plug go",
    ],
    description:
      "A Plug Go lancou uma nova camada de integracao para simplificar fluxos financeiros no dia a dia, com foco em praticidade, previsibilidade e visao unificada da operacao.",
    highlights: [
      "Nova estrutura de operacao em um unico fluxo",
      "Mais visibilidade sobre entradas e saidas",
      "Experiencia preparada para crescimento continuo",
    ],
    publishedAt: "2026-04-10",
    category: "Produto",
  },
  {
    slug: "atualizacao-seguranca-plataforma",
    title: "Atualizacao reforca seguranca da plataforma",
    seoDescription:
      "A Plug Go reforcou protocolos e monitoramento para ampliar a seguranca operacional da plataforma.",
    seoKeywords: [
      "seguranca plug go",
      "atualizacao plataforma",
      "protecao operacional",
      "compliance financeiro",
    ],
    description:
      "A atualizacao amplia os mecanismos de protecao da plataforma com camadas adicionais de monitoramento e controles para reduzir risco e aumentar confiabilidade nas operacoes.",
    highlights: [
      "Camadas adicionais de monitoramento",
      "Processos mais robustos para controle de risco",
      "Evolucao continua com foco em confiabilidade",
    ],
    publishedAt: "2026-03-28",
    category: "Seguranca",
  },
  {
    slug: "pluggo-amplia-solucoes-empresas",
    title: "Plug Go amplia solucoes para empresas em expansao",
    seoDescription:
      "Nova frente da Plug Go acelera operacoes de empresas que buscam escalabilidade com seguranca.",
    seoKeywords: [
      "solucoes para empresas",
      "expansao empresarial",
      "escalabilidade financeira",
      "plug go pj",
    ],
    description:
      "A Plug Go ampliou o portifolio para empresas com novas possibilidades de gestao e automacao de processos, mantendo foco em eficiencia operacional e seguranca.",
    highlights: [
      "Mais recursos para rotina financeira empresarial",
      "Fluxos orientados para ganho de eficiencia",
      "Base tecnologica preparada para escalar",
    ],
    publishedAt: "2026-03-12",
    category: "Mercado",
  },
];

export function getNewsBySlug(slug: string) {
  return NEWS_ITEMS.find((item) => item.slug === slug);
}

export function getNewsItems() {
  return [...NEWS_ITEMS].sort(
    (first, second) =>
      new Date(second.publishedAt).getTime() -
      new Date(first.publishedAt).getTime(),
  );
}

export function getRecentNews(limit = 3) {
  return getNewsItems().slice(0, limit);
}
