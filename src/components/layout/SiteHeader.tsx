"use client";

import { useEffect, useState } from "react";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header-wrap site-header-home">
      <div className="site-header">
        <a href="#home" className="site-logo" aria-label="PlugGo Home" onClick={closeMenu}>
          <span>Plug</span>Go
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
          aria-label="Navegacao principal"
        >
          <a href="#home" className="site-nav-link is-active" onClick={closeMenu}>
            Home
          </a>
          <a href="#sobre" className="site-nav-link" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#solucoes" className="site-nav-link" onClick={closeMenu}>
            Solucoes
          </a>
          <a href="#processo" className="site-nav-link" onClick={closeMenu}>
            Processo
          </a>
          <a href="#depoimentos" className="site-nav-link" onClick={closeMenu}>
            Depoimentos
          </a>
          <a href="#faq" className="site-nav-link" onClick={closeMenu}>
            FAQ
          </a>
          <a href="#contato" className="site-nav-link" onClick={closeMenu}>
            Contato
          </a>

          <a className="site-contact-btn site-contact-btn-mobile" href="#contato" onClick={closeMenu}>
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
