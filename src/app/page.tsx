import { Hero } from "@/components/home/Hero";
import { PathFlow } from "@/components/home/PathFlow";
import { ProblemSection } from "@/components/home/ProblemSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { PersonaCards } from "@/components/home/PersonaCards";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <PathFlow />
      {/* Solution Section (The 3D Dashboard) is now merged as the top half of FeaturesSection */}
      <FeaturesSection />
      <ProductShowcase />
      <PersonaCards />
      <FinalCTA />
    </>
  );
}
