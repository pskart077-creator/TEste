export type NavItem = {
  href: string;
  label: string;
};

export type SlugPageDetail = {
  slug: string;
  title: string;
  seoDescription: string;
  seoKeywords: string[];
  description: string;
  highlights: string[];
};

export type Service = SlugPageDetail & {
  shortDescription: string;
};

export type StickyHeaderState = {
  isHeaderVisible: boolean;
  isScrolled: boolean;
};

export type BackToTopController = {
  isVisible: boolean;
  isNearFooter: boolean;
  scrollToTop: () => void;
};
