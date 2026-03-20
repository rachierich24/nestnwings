"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { FinalCTA } from "@/components/home/FinalCTA";

// Dynamic Imports for Performance with Skeleton Loaders
const PathFlow = dynamic(() => import("@/components/home/PathFlow").then(m => m.PathFlow), { 
    ssr: false,
    loading: () => <div className="h-96 md:h-[600px] w-full bg-[#020617]/20 animate-pulse rounded-[2rem] mx-auto max-w-6xl" />
});

const FeaturesSection = dynamic(() => import("@/components/home/FeaturesSection").then(m => m.FeaturesSection), { 
    ssr: false,
    loading: () => <div className="h-[500px] w-full bg-[#020617]/20 animate-pulse" />
});

const ProductShowcase = dynamic(() => import("@/components/home/ProductShowcase").then(m => m.ProductShowcase), { 
    ssr: false,
    loading: () => <div className="h-[800px] w-full bg-[#020617]/20 animate-pulse" />
});

const RoomAllocatorSim = dynamic(() => import("@/components/home/RoomAllocatorSim").then(m => m.RoomAllocatorSim), { 
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-[#020617]/20 animate-pulse rounded-3xl" />
});

const PersonaCards = dynamic(() => import("@/components/home/PersonaCards").then(m => m.PersonaCards), { 
    ssr: false,
    loading: () => <div className="h-[500px] w-full bg-[#020617]/20 animate-pulse" />
});

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

