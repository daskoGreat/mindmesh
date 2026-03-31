"use client";

import { motion } from "framer-motion";
import { AiActModalTrigger } from "@/components/compliance/AiActModal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const ghost =
  "inline-flex items-center justify-center rounded-md border border-mesh-border bg-transparent px-6 py-3 text-sm font-medium tracking-tight text-mesh-text transition-colors duration-200 hover:border-mesh-muted hover:bg-mesh-surface/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mesh-accent";

export function Cta() {
  return (
    <Section className="border-b-0">
      <motion.div
        className="rounded-lg border border-mesh-border bg-mesh-surface/40 px-8 py-14 md:px-14 md:py-20"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{
          borderColor: "rgba(148, 163, 184, 0.22)",
          transition: { duration: 0.35 },
        }}
      >
        <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-mesh-text md:text-3xl">
          Redo att skapa klarhet
        </h2>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button href="#kontakt">Kartlägg er situation</Button>
          <AiActModalTrigger
            className={ghost}
            label="AI Act Compliance Check"
          />
        </div>
      </motion.div>
    </Section>
  );
}
