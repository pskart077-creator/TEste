import type { NavItem } from "@/types";

export const HOME_MAIN_CLASS_NAME = "site-main site-main-home";

export const MOBILE_MENU_BREAKPOINT = 920;

export const HEADER_SCROLL_THRESHOLD = 10;
export const HEADER_SCROLL_DELTA = 4;

export const BACK_TO_TOP_VISIBLE_OFFSET = 420;
export const BACK_TO_TOP_FOOTER_OFFSET = 180;

export const SITE_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Segurança", href: "/seguranca" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export const SERVICES_SUBMENU_ITEMS: NavItem[] = [
  { label: "Para você", href: "/para-voce" },
  { label: "Para sua empresa", href: "/para-sua-empresa" },
];

export const SERVICES_ACTIVE_ROUTES = ["/servicos", "/pf", "/pj"] as const;
