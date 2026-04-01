"use client";

import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};

export function Section({
  id,
  children,
  className = "",
  innerClassName = "",
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`border-t border-mesh-border px-4 py-[var(--spacing-section)] sm:px-6 md:px-8 ${className}`}
      initial={{ opacity: 1 }}
      whileInView={{
        boxShadow: "inset 0 1px 0 0 rgba(196, 240, 49, 0.07)",
      }}
      viewport={{ once: true, amount: 0.12, margin: "-32px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`mx-auto w-full max-w-6xl ${innerClassName}`}>
        {children}
      </div>
    </motion.section>
  );
}
