"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import type { Locale } from "@/i18n/types";

function FlagSweden({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 10"
      className={className}
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <rect fill="#006AA7" width="16" height="10" />
      <rect fill="#FECC00" x="5" width="2.5" height="10" />
      <rect fill="#FECC00" y="3.75" width="16" height="2.5" />
    </svg>
  );
}

function FlagUk({
  clipId,
  className = "",
}: {
  clipId: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 60 30"
      className={className}
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <clipPath id={clipId}>
        <rect width="60" height="30" rx="0" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <path fill="#012169" d="M0 0h60v30H0z" />
        <path
          stroke="#fff"
          strokeWidth="10"
          d="M0 0l60 30M60 0L0 30"
        />
        <path
          stroke="#C8102E"
          strokeWidth="6"
          d="M0 0l60 30M60 0L0 30"
        />
        <path stroke="#fff" strokeWidth="12" d="M30 0v30M0 15h60" />
        <path stroke="#C8102E" strokeWidth="8" d="M30 0v30M0 15h60" />
      </g>
    </svg>
  );
}

export function LanguageToggle() {
  const { locale, setLocale, messages } = useI18n();
  const ukClipId = useId().replace(/:/g, "");

  const pill =
    "relative flex h-10 items-center gap-0.5 rounded-full border border-mesh-border bg-mesh-bg-elevated/92 p-1 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:h-11 sm:gap-1 sm:p-1.5";

  const btn = (active: boolean) =>
    `touch-manipulation relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full outline-none transition-[box-shadow,transform] duration-200 sm:h-9 sm:w-9 ${
      active
        ? "shadow-[0_0_0_2px_var(--mesh-accent)]"
        : "opacity-80 hover:opacity-100 active:scale-95"
    }`;

  const go = (next: Locale) => {
    if (next !== locale) setLocale(next);
  };

  return (
    <nav
      aria-label={messages.a11y.languageNav}
      className="fixed top-[max(0.75rem,env(safe-area-inset-top,0px))] right-[max(0.75rem,env(safe-area-inset-right,0px))] z-50 sm:top-[max(1rem,env(safe-area-inset-top,0px))] sm:right-[max(1rem,env(safe-area-inset-right,0px))]"
    >
      <motion.div
        className={pill}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <button
          type="button"
          className={btn(locale === "sv")}
          onClick={() => go("sv")}
          aria-pressed={locale === "sv"}
          aria-label={messages.a11y.svLabel}
        >
          <FlagSweden className="h-full w-full scale-[1.15]" />
        </button>
        <button
          type="button"
          className={btn(locale === "en")}
          onClick={() => go("en")}
          aria-pressed={locale === "en"}
          aria-label={messages.a11y.enLabel}
        >
          <FlagUk clipId={ukClipId} className="h-full w-full" />
        </button>
      </motion.div>
    </nav>
  );
}
