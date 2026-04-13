import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    slug: "conta-digital",
    title: "Conta Digital",
    shortDescription:
      "Movimente e acompanhe a rotina financeira com uma operacao mais simples.",
    seoDescription:
      "Conheca a Conta Digital da Plug Go para pessoas e empresas, com movimentacoes e acompanhamento em um fluxo simples.",
    seoKeywords: [
      "conta digital",
      "conta digital empresa",
      "rotina financeira",
      "plug go conta digital",
    ],
    description:
      "A conta digital da Plug Go foi pensada para pessoas e empresas que precisam de agilidade nas movimentacoes, com visibilidade das entradas e saidas em um unico fluxo.",
    highlights: [
      "Abertura e uso em uma jornada objetiva",
      "Acompanhamento de movimentacoes em tempo real",
      "Operacao integrada com outras solucoes da plataforma",
    ],
  },
  {
    slug: "cobrancas-integradas",
    title: "Cobrancas Integradas",
    shortDescription:
      "Receba de forma organizada com fluxos de cobranca conectados ao seu negocio.",
    seoDescription:
      "Entenda como as Cobrancas Integradas da Plug Go organizam recebimentos e tornam a operacao financeira mais fluida.",
    seoKeywords: [
      "cobrancas integradas",
      "gestao de cobrancas",
      "recebimentos",
      "plug go cobrancas",
    ],
    description:
      "As cobrancas integradas centralizam o processo de recebimento em uma experiencia mais direta, reduzindo friccao operacional e melhorando a rotina financeira.",
    highlights: [
      "Gestao centralizada de cobrancas",
      "Mais clareza sobre valores a receber",
      "Fluxo padronizado para pessoa fisica e juridica",
    ],
  },
  {
    slug: "seguranca-financeira",
    title: "Seguranca Financeira",
    shortDescription:
      "Tenha mais confianca para operar com estrutura e processos consistentes.",
    seoDescription:
      "Veja como a Seguranca Financeira da Plug Go melhora previsibilidade, controle e confiabilidade no dia a dia.",
    seoKeywords: [
      "seguranca financeira",
      "controle financeiro",
      "gestao de risco",
      "plug go seguranca",
    ],
    description:
      "A Plug Go estrutura a experiencia financeira com foco em protecao e confiabilidade, apoiando decisoes com mais controle e previsibilidade operacional.",
    highlights: [
      "Processos desenhados para reduzir riscos",
      "Mais previsibilidade no dia a dia financeiro",
      "Ambiente preparado para crescimento sustentavel",
    ],
  },
  {
    slug: "cripto",
    title: "Cripto",
    shortDescription:
      "Acesse possibilidades digitais com uma experiencia integrada ao seu ecossistema.",
    seoDescription:
      "Conheca a frente de Cripto da Plug Go para acessar operacoes digitais com praticidade e experiencia integrada.",
    seoKeywords: [
      "cripto",
      "ativos digitais",
      "servicos financeiros digitais",
      "plug go cripto",
    ],
    description:
      "A solucao de cripto amplia as alternativas de operacao dentro da plataforma, mantendo uma jornada consistente para quem busca inovacao com praticidade.",
    highlights: [
      "Acesso simplificado a operacoes digitais",
      "Experiencia conectada com os demais servicos",
      "Estrutura moderna para acompanhar o mercado",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
