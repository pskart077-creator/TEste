"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsVisible(scrollY > 420);
      setIsNearFooter(scrollY + windowHeight > documentHeight - 180);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`back-to-top-btn ${isVisible ? "is-visible" : ""} ${isNearFooter ? "is-near-footer" : ""}`}
      aria-label="Voltar ao topo"
      onClick={scrollToTop}
    >
      <ChevronUp size={18} strokeWidth={2.5} />
    </button>
  );
}