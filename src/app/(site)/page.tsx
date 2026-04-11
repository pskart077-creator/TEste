import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinancialShowcaseSection } from "@/components/sections/FinancialShowcaseSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main className="site-main site-main-home">
      <HeroSection />
      <FinancialShowcaseSection />
      <AboutSection />
      <SolutionsSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
