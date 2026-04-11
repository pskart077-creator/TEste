import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main className="site-main site-main-home">
      <HeroSection />
      <ShowcaseSection />
      <AboutSection />
      <SolutionsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
