"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

const base =
  "inline-flex min-h-11 touch-manipulation items-center justify-center rounded-md px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mesh-accent";

const variants = {
  primary:
    "bg-mesh-accent text-mesh-bg hover:bg-mesh-accent-hover focus-visible:outline-mesh-accent",
  ghost:
    "border border-mesh-border bg-transparent text-mesh-text hover:border-mesh-muted hover:bg-mesh-surface/50",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <motion.span
        className="inline-flex w-full items-center justify-center"
        whileHover={{ y: -1.5 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </Link>
  );
}
