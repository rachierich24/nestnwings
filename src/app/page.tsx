import { Hero } from "@/components/home/Hero";
import { PathFlow } from "@/components/home/PathFlow";
import { ProblemSection } from "@/components/home/ProblemSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { RoomAllocatorSim } from "@/components/home/RoomAllocatorSim";
import { PersonaCards } from "@/components/home/PersonaCards";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <PathFlow />
      <FeaturesSection />
      <ProductShowcase />
      <RoomAllocatorSim />
      <PersonaCards />
      <FinalCTA />
    </>
  );
}

