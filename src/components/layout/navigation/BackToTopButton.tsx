"use client";

import { ChevronUp } from "lucide-react";
import { useBackToTop } from "@/hooks/useBackToTop";
import { cn } from "@/lib/utils";

export default function BackToTopButton() {
  const { isVisible, isNearFooter, scrollToTop } = useBackToTop();

  return (
    <button
      type="button"
      className={cn(
        "back-to-top-btn",
        isVisible && "is-visible",
        isNearFooter && "is-near-footer",
      )}
      aria-label="Voltar ao topo"
      onClick={scrollToTop}
    >
      <ChevronUp size={18} strokeWidth={2.5} />
    </button>
  );
}
