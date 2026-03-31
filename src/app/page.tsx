import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { HowWeThink } from "@/components/sections/HowWeThink";
import { People } from "@/components/sections/People";
import { Services } from "@/components/sections/Services";
import { Cta } from "@/components/sections/Cta";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { AiInsightsPanel } from "@/components/insights/AiInsightsPanel";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-mesh-bg">
      <Hero />
      <main className="flex-1">
        <WhatWeDo />
        <HowWeThink />
        <People />
        <Services />
        <Cta />
      </main>
      <SiteFooter />
      <AiInsightsPanel />
    </div>
  );
}
