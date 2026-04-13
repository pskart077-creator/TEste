import type { NavItem } from "@/types";

export const HOME_MAIN_CLASS_NAME = "site-main site-main-home";

export const MOBILE_MENU_BREAKPOINT = 920;

export const HEADER_SCROLL_THRESHOLD = 10;
export const HEADER_SCROLL_DELTA = 4;

export const BACK_TO_TOP_VISIBLE_OFFSET = 420;
export const BACK_TO_TOP_FOOTER_OFFSET = 180;

export const SITE_NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Solucoes", href: "/servicos" },
  { label: "Segmentos", href: "/segmentos" },
  { label: "News", href: "/news" },
  { label: "Sobre a Plug Go", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];
