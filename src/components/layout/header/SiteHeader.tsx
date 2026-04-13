"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { MOBILE_MENU_BREAKPOINT, SITE_NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function isActiveRoute(currentPath: string, route: string) {
  if (route === "/") {
    return currentPath === "/";
  }

  return currentPath === route || currentPath.startsWith(`${route}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isHeaderVisible, isScrolled } = useStickyHeader(isMenuOpen);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_MENU_BREAKPOINT) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "site-header-wrap site-header-home",
        isHeaderVisible ? "is-visible" : "is-hidden",
        isScrolled && "is-scrolled",
      )}
    >
      <div className="site-header">
        <Link
          href="/"
          className="site-logo"
          aria-label="PlugGo Inicio"
          onClick={closeMenu}
        >
          <Image
            src="/assets/img/logo/logo.svg"
            alt="PlugGo"
            className="site-logo-image"
            width={90}
            height={33}
            priority
          />
        </Link>

        <button
          type="button"
          className={cn("site-menu-toggle", isMenuOpen && "is-open")}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="site-nav"
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          <span className="site-menu-toggle-line" />
          <span className="site-menu-toggle-line" />
          <span className="site-menu-toggle-line" />
        </button>

        <nav
          id="site-nav"
          className={cn("site-nav", isMenuOpen && "is-open")}
          aria-label="Navegacao principal"
        >
          {SITE_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "site-nav-link",
                isActiveRoute(pathname, item.href) && "is-active",
              )}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}

          <Link
            className="site-contact-btn site-contact-btn-mobile"
            href="/contato"
            onClick={closeMenu}
          >
            Fale Conosco
          </Link>
        </nav>

        <Link className="site-contact-btn site-contact-btn-desktop" href="/contato">
          Fale Conosco
        </Link>
      </div>

      <button
        type="button"
        className={cn("site-menu-backdrop", isMenuOpen && "is-open")}
        aria-label="Fechar menu"
        onClick={closeMenu}
      />
    </header>
  );
}
