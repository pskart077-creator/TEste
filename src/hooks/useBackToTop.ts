"use client";

import { useEffect, useState } from "react";
import {
  BACK_TO_TOP_FOOTER_OFFSET,
  BACK_TO_TOP_VISIBLE_OFFSET,
} from "@/lib/constants";
import type { BackToTopController } from "@/types";

export function useBackToTop(): BackToTopController {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsVisible(scrollY > BACK_TO_TOP_VISIBLE_OFFSET);
      setIsNearFooter(
        scrollY + windowHeight > documentHeight - BACK_TO_TOP_FOOTER_OFFSET,
      );
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

  return {
    isVisible,
    isNearFooter,
    scrollToTop,
  };
}
