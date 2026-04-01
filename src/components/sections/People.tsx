"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { PersonModal } from "@/components/sections/PersonModal";
import { Section } from "@/components/ui/Section";
import { buildFridaMember } from "@/i18n/buildFrida";
import { useI18n, useMessages } from "@/i18n/I18nProvider";

export function People() {
  const { locale } = useI18n();
  const m = useMessages();
  const frida = useMemo(() => buildFridaMember(locale), [locale]);
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <Section id="personer">
      <FadeIn>
        <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-mesh-muted">
          {m.people.heading}
        </h2>
      </FadeIn>

      <div className="mx-auto mt-12 max-w-xl md:mt-16">
        <FadeIn delay={0.06}>
          <motion.button
            type="button"
            onClick={() => setDetailOpen(true)}
            className="group w-full touch-manipulation rounded-lg py-1 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mesh-accent"
            aria-label={m.people.openCard.replace("{name}", frida.name)}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <article className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
              <div className="relative mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-full ring-2 ring-mesh-border transition-[box-shadow] duration-300 group-hover:ring-mesh-accent/35 sm:mx-0">
                <Image
                  src={frida.imageSrc}
                  alt={frida.imageAlt}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-mesh-text">
                    {frida.name}
                  </h3>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.14em] text-mesh-accent">
                    {frida.role}
                  </p>
                </div>
                <p className="text-base leading-relaxed text-mesh-muted">
                  {frida.bio}
                </p>
                <p className="text-xs font-medium text-mesh-accent/90 transition-colors group-hover:text-mesh-accent">
                  {m.people.featuredProjects}
                  <span className="text-mesh-muted group-hover:text-mesh-accent">
                    {" "}
                    →
                  </span>
                </p>
              </div>
            </article>
          </motion.button>
        </FadeIn>
      </div>

      <PersonModal
        member={detailOpen ? frida : null}
        onClose={() => setDetailOpen(false)}
      />
    </Section>
  );
}
