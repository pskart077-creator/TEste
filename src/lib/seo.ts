import type { Metadata } from "next";
import type { Service, SlugPageDetail } from "@/types";

export const SITE_NAME = "Plug Go";
export const SITE_URL = "https://pluggocapital.com";

const COMMON_KEYWORDS = [
  "plug go",
  "hub financeiro",
  "soluções financeiras",
  "pessoas e empresas",
];

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

export type StaticPageSlug =
  | "sobre"
  | "contato"
  | "servicos"
  | "seguranca"
  | "pf"
  | "pj";

export const HOME_SEO: PageSeo = {
  title: "Hub financeiro para pessoas e empresas",
  description:
    "A Plug Go conecta soluções financeiras para pessoas e empresas em uma experiência mais simples, segura e funcional.",
  path: "/",
  keywords: [
    ...COMMON_KEYWORDS,
    "conta digital",
    "cobranças",
    "segurança financeira",
    "cripto",
  ],
};

export const STATIC_PAGE_SEO: Record<StaticPageSlug, PageSeo> = {
  sobre: {
    title: "Sobre a Plug Go",
    description:
      "Conheça a proposta da Plug Go e como conectamos soluções financeiras para simplificar a rotina de pessoas e empresas.",
    path: "/sobre",
    keywords: [...COMMON_KEYWORDS, "sobre a Plug Go", "empresa financeira"],
  },
  contato: {
    title: "Contato",
    description:
      "Fale com o time da Plug Go para entender quais soluções financeiras se encaixam no seu momento.",
    path: "/contato",
    keywords: [
      ...COMMON_KEYWORDS,
      "contato Plug Go",
      "atendimento financeiro",
    ],
  },
  servicos: {
    title: "Serviços",
    description:
      "Explore os serviços da Plug Go e veja como nossas soluções atendem pessoas e empresas com mais praticidade, segurança e eficiência.",
    path: "/servicos",
    keywords: [
      ...COMMON_KEYWORDS,
      "serviços financeiros",
      "plataforma financeira",
      "catálogo de serviços",
    ],
  },
  seguranca: {
    title: "Segurança",
    description:
      "Conheça como a Plug Go estrutura processos para oferecer mais segurança, confiança e previsibilidade operacional.",
    path: "/seguranca",
    keywords: [
      ...COMMON_KEYWORDS,
      "segurança financeira",
      "confiabilidade",
      "gestão de risco",
    ],
  },
  pf: {
    title: "Para você",
    description:
      "Conheça as soluções da Plug Go para pessoa física e descubra mais praticidade, segurança e agilidade para o seu dia a dia.",
    path: "/pf",
    keywords: [
      ...COMMON_KEYWORDS,
      "para você",
      "pessoa física",
      "soluções financeiras para pessoa física",
      "serviços para pessoa física",
    ],
  },
  pj: {
    title: "Para sua empresa",
    description:
      "Explore as soluções da Plug Go para empresas e veja como sua operação pode ganhar mais eficiência, segurança e escalabilidade.",
    path: "/pj",
    keywords: [
      ...COMMON_KEYWORDS,
      "para sua empresa",
      "pessoa jurídica",
      "soluções financeiras para empresas",
      "serviços para empresas",
    ],
  },
};

export function buildPageMetadata(pageSeo: PageSeo): Metadata {
  const absoluteUrl = new URL(pageSeo.path, SITE_URL).toString();

  return {
    title: pageSeo.title,
    description: pageSeo.description,
    keywords: pageSeo.keywords,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title: pageSeo.title,
      description: pageSeo.description,
      url: absoluteUrl,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageSeo.title,
      description: pageSeo.description,
    },
  };
}

export function buildServiceMetadata(service: Service): Metadata {
  return buildDetailMetadata(service, `/servicos/${service.slug}`);
}

export function buildDetailMetadata(
  detail: SlugPageDetail,
  path: string,
): Metadata {
  const absoluteUrl = new URL(path, SITE_URL).toString();

  return {
    title: detail.title,
    description: detail.seoDescription,
    keywords: [...COMMON_KEYWORDS, ...detail.seoKeywords],
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title: `${detail.title} | ${SITE_NAME}`,
      description: detail.seoDescription,
      url: absoluteUrl,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${detail.title} | ${SITE_NAME}`,
      description: detail.seoDescription,
    },
  };
}
