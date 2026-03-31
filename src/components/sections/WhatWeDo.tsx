"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section } from "@/components/ui/Section";

export function WhatWeDo() {
  return (
    <Section id="vad-vi-gor">
      <FadeIn>
        <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-mesh-muted">
          Vad vi gör
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-16 lg:gap-24">
        <FadeIn delay={0.06}>
          <motion.div
            className="space-y-4"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl font-semibold tracking-tight text-mesh-text md:text-2xl">
              AI och teknik
            </h3>
            <p className="max-w-md text-base leading-relaxed text-mesh-muted md:text-lg">
              Vi bygger strukturer som håller över tid. Från AI-strategi till
              implementation. Mindre snack, mer som faktiskt fungerar.
            </p>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <motion.div
            className="space-y-4"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl font-semibold tracking-tight text-mesh-text md:text-2xl">
              Ledarskap och riktning
            </h3>
            <p className="max-w-md text-base leading-relaxed text-mesh-muted md:text-lg">
              Vi stöttar ledare och team i att navigera osäkerhet. Det handlar
              inte om fler initiativ utan om rätt riktning.
            </p>
          </motion.div>
        </FadeIn>
      </div>
    </Section>
  );
}
