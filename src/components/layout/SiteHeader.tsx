"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

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
      if (window.innerWidth > 920) {
        setIsMenuOpen(false);
      }
    };

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

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (isMenuOpen) {
        setIsHeaderVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY <= 10) {
        setIsHeaderVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY + 4) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY - 4) {
        setIsHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`site-header-wrap site-header-home ${isHeaderVisible ? "is-visible" : "is-hidden"} ${isScrolled ? "is-scrolled" : ""}`}
    >
      <div className="site-header">
        <a
          href="#inicio"
          className="site-logo"
          aria-label="PlugGo Início"
          onClick={closeMenu}
        >
          <img
            src="/assets/img/logo/logo.svg"
            alt="PlugGo"
            className="site-logo-image"
          />
        </a>

        <button
          type="button"
          className={`site-menu-toggle ${isMenuOpen ? "is-open" : ""}`}
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
          className={`site-nav ${isMenuOpen ? "is-open" : ""}`}
          aria-label="Navegação principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="site-nav-link"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          <a
            className="site-contact-btn site-contact-btn-mobile"
            href="#contato"
            onClick={closeMenu}
          >
            Fale Conosco
          </a>
        </nav>

        <a className="site-contact-btn site-contact-btn-desktop" href="#contato">
          Fale Conosco
        </a>
      </div>

      <button
        type="button"
        className={`site-menu-backdrop ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Fechar menu"
        onClick={closeMenu}
      />
    </header>
  );
}
