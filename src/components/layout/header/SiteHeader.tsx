"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import {
  MOBILE_MENU_BREAKPOINT,
  SERVICES_ACTIVE_ROUTES,
  SERVICES_SUBMENU_ITEMS,
  SITE_NAV_ITEMS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

function isActiveRoute(currentPath: string, route: string) {
  if (route === "/") {
    return currentPath === "/";
  }

  return currentPath === route || currentPath.startsWith(`${route}/`);
}

function isAnyActiveRoute(currentPath: string, routes: readonly string[]) {
  return routes.some((route) => isActiveRoute(currentPath, route));
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const { isHeaderVisible, isScrolled } = useStickyHeader(isMenuOpen);
  const servicesDropdownRef = useRef<HTMLDivElement | null>(null);
  const servicesCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

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
      const mobileViewport = window.innerWidth <= MOBILE_MENU_BREAKPOINT;
      setIsMobileViewport(mobileViewport);

      if (!mobileViewport) {
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
    if (!isMenuOpen && !isServicesOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen, isServicesOpen]);

  useEffect(() => {
    if (!isServicesOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesOpen]);

  useEffect(() => {
    return () => {
      if (servicesCloseTimeoutRef.current) {
        clearTimeout(servicesCloseTimeoutRef.current);
      }
    };
  }, []);

  const closeMenu = () => {
    if (servicesCloseTimeoutRef.current) {
      clearTimeout(servicesCloseTimeoutRef.current);
      servicesCloseTimeoutRef.current = null;
    }
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const servicesActive = isAnyActiveRoute(pathname, SERVICES_ACTIVE_ROUTES);

  const handleServicesPrimaryClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    if (isMobileViewport) {
      event.preventDefault();
      setIsServicesOpen((previous) => !previous);
      return;
    }

    closeMenu();
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
          <img
            src="/assets/img/logo/logo.svg"
            alt="PlugGo"
            className="site-logo-image"
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
          {SITE_NAV_ITEMS.map((item) => {
            if (item.href !== "/servicos") {
              return (
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
              );
            }

            return (
              <div
                key={item.href}
                ref={servicesDropdownRef}
                className={cn(
                  "site-nav-dropdown",
                  isServicesOpen && "is-open",
                  servicesActive && "is-active",
                )}
                onMouseEnter={() => {
                  if (!isMobileViewport) {
                    if (servicesCloseTimeoutRef.current) {
                      clearTimeout(servicesCloseTimeoutRef.current);
                      servicesCloseTimeoutRef.current = null;
                    }
                    setIsServicesOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (!isMobileViewport) {
                    servicesCloseTimeoutRef.current = setTimeout(() => {
                      setIsServicesOpen(false);
                    }, 140);
                  }
                }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "site-nav-link site-nav-link-dropdown",
                    servicesActive && "is-active",
                  )}
                  aria-haspopup="menu"
                  aria-expanded={isServicesOpen}
                  aria-controls="site-services-submenu"
                  onClick={handleServicesPrimaryClick}
                >
                  <span>{item.label}</span>
                  <ChevronDown className="site-nav-link-dropdown__icon" size={16} />
                </Link>

                <div
                  id="site-services-submenu"
                  className={cn("site-submenu", isServicesOpen && "is-open")}
                >
                  {SERVICES_SUBMENU_ITEMS.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={cn(
                        "site-submenu-link",
                        isActiveRoute(pathname, subItem.href) && "is-active",
                      )}
                      onClick={closeMenu}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

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
