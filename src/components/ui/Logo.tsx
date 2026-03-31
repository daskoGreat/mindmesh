"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type LogoSize = "sm" | "md" | "lg";

const iconPx: Record<LogoSize, number> = {
  sm: 28,
  md: 34,
  lg: 42,
};

const textClass: Record<LogoSize, string> = {
  sm: "text-[0.9375rem]",
  md: "text-base",
  lg: "text-lg",
};

function LogoMark({ size, className = "" }: { size: number; className?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden
      whileHover={{
        rotate: -2.5,
        scale: 1.04,
        transition: { type: "spring", stiffness: 420, damping: 26 },
      }}
    >
      <path
        d="M16 6.5L7.5 24h17L16 6.5z"
        stroke="currentColor"
        strokeWidth={1.15}
        strokeLinejoin="round"
        className="text-mesh-muted/45"
      />
      <circle cx="16" cy="6.5" r="2.35" className="fill-mesh-accent" />
      <circle cx="7.5" cy="24" r="2.1" className="fill-mesh-text" />
      <circle cx="24.5" cy="24" r="2.1" className="fill-mesh-text" />
      <circle cx="16" cy="18" r="1.65" className="fill-mesh-accent/85" />
    </motion.svg>
  );
}

type LogoProps = {
  className?: string;
  size?: LogoSize;
  href?: string | null;
  showWordmark?: boolean;
  label?: string;
};

export function Logo({
  className = "",
  size = "md",
  href = "/",
  showWordmark = true,
  label = "MindMesh",
}: LogoProps) {
  const px = iconPx[size];

  const wordmark = showWordmark ? (
    <motion.span
      className={`font-semibold tracking-[-0.02em] ${textClass[size]} leading-none`}
      whileHover={{ y: -0.5 }}
      transition={{ duration: 0.2 }}
    >
      <span className="text-mesh-text">Mind</span>
      <span className="text-mesh-accent">Mesh</span>
    </motion.span>
  ) : null;

  const inner = (
    <>
      <LogoMark size={px} />
      {wordmark}
    </>
  );

  const rowClass = `inline-flex items-center gap-[0.65em] ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={`${rowClass} transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mesh-accent rounded-sm`}
        aria-label={label}
      >
        {inner}
      </Link>
    );
  }

  return (
    <span className={rowClass} role="img" aria-label={label}>
      {inner}
    </span>
  );
}
