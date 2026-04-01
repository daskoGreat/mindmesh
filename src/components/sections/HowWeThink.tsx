"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { Section } from "@/components/ui/Section";
import { useMessages } from "@/i18n/I18nProvider";

export function HowWeThink() {
  const m = useMessages();

  return (
    <Section className="bg-mesh-bg-elevated">
      <FadeIn>
        <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-mesh-muted">
          {m.howWeThink.heading}
        </h2>
      </FadeIn>

      <FadeIn delay={0.08} className="mt-12 max-w-3xl space-y-5 md:mt-16 md:space-y-6">
        <p className="text-[1.0625rem] leading-relaxed text-mesh-text sm:text-lg md:text-xl">
          {m.howWeThink.p1}
        </p>
        <p className="text-[1.0625rem] leading-relaxed text-mesh-muted sm:text-lg md:text-xl">
          {m.howWeThink.p2}
        </p>
        <p className="text-[1.0625rem] font-medium leading-relaxed text-mesh-text sm:text-lg md:text-xl">
          {m.howWeThink.p3}
        </p>
      </FadeIn>
    </Section>
  );
}
