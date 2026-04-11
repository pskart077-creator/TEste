import type { ReactNode } from "react";
import { BackToTopButton } from "@/components/layout/BackToTopButton";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="site-shell">
      <SiteHeader />
      {children}
      <BackToTopButton />
      <SiteFooter />
    </div>
  );
}
