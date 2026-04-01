"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section } from "@/components/ui/Section";
import { useMessages } from "@/i18n/I18nProvider";

export function WhatWeDo() {
  const m = useMessages();

  return (
    <Section id="vad-vi-gor">
      <FadeIn>
        <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-mesh-muted">
          {m.whatWeDo.heading}
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-16 lg:gap-24">
        <FadeIn delay={0.06}>
          <motion.div
            className="space-y-4"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-lg font-semibold tracking-tight text-mesh-text sm:text-xl md:text-2xl">
              {m.whatWeDo.leadership}
            </h3>
            <p className="max-w-md text-[0.9375rem] leading-relaxed text-mesh-muted sm:text-base md:text-lg">
              {m.whatWeDo.leadershipBody}
            </p>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <motion.div
            className="space-y-4"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-lg font-semibold tracking-tight text-mesh-text sm:text-xl md:text-2xl">
              {m.whatWeDo.comms}
            </h3>
            <p className="max-w-md text-[0.9375rem] leading-relaxed text-mesh-muted sm:text-base md:text-lg">
              {m.whatWeDo.commsBody}
            </p>
          </motion.div>
        </FadeIn>
      </div>
    </Section>
  );
}
