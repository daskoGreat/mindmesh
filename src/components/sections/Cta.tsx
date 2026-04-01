"use client";

import { motion } from "framer-motion";
import { AiActModalTrigger } from "@/components/compliance/AiActModal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useMessages } from "@/i18n/I18nProvider";

const ghost =
  "inline-flex items-center justify-center rounded-md border border-mesh-border bg-transparent px-6 py-3 text-sm font-medium tracking-tight text-mesh-text transition-colors duration-200 hover:border-mesh-muted hover:bg-mesh-surface/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mesh-accent";

export function Cta() {
  const m = useMessages();

  return (
    <Section className="border-b-0">
      <motion.div
        className="rounded-lg border border-mesh-border bg-mesh-surface/40 px-5 py-10 sm:px-8 sm:py-14 md:px-14 md:py-20"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{
          borderColor: "rgba(148, 163, 184, 0.22)",
          transition: { duration: 0.35 },
        }}
      >
        <h2 className="max-w-xl text-pretty text-xl font-semibold tracking-tight text-mesh-text sm:text-2xl md:text-3xl">
          {m.cta.heading}
        </h2>
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
          <Button
            href="#kontakt"
            className="w-full min-h-12 sm:w-auto sm:min-h-11"
          >
            {m.cta.primary}
          </Button>
          <AiActModalTrigger
            className={`${ghost} w-full min-h-12 touch-manipulation sm:w-auto sm:min-h-11`}
            label={m.cta.aiAct}
          />
        </div>
      </motion.div>
    </Section>
  );
}
