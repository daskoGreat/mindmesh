"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { ServiceListItem } from "@/components/sections/ServiceListItem";
import { Section } from "@/components/ui/Section";
import { useMessages } from "@/i18n/I18nProvider";

export function Services() {
  const m = useMessages();

  return (
    <Section id="tjanster" className="bg-mesh-bg-elevated">
      <FadeIn>
        <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-mesh-muted">
          {m.services.heading}
        </h2>
      </FadeIn>

      <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
        {m.services.items.map((item, i) => (
          <ServiceListItem
            key={`svc-${i}`}
            title={item.title}
            text={item.text}
            index={i}
            delay={0.04 + i * 0.03}
          />
        ))}
      </ul>
    </Section>
  );
}
