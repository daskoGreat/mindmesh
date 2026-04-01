"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMessages } from "@/i18n/I18nProvider";

export function AiInsightsPanel() {
  const m = useMessages();
  const tips = m.tips;
  const [open, setOpen] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!open) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % tips.length);
    }, 9000);
    return () => window.clearInterval(id);
  }, [open, tips.length]);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-center px-3 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:left-auto sm:justify-end sm:px-0"
      style={{
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <motion.div
        className="pointer-events-auto w-full max-w-[min(100%,24rem)] sm:max-w-[20rem]"
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
      >
        <div className="overflow-hidden rounded-lg border border-mesh-border bg-mesh-surface/90 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:bg-mesh-surface/85">
          <div className="flex min-h-11 items-center justify-between gap-2 border-b border-mesh-border px-3 py-2">
            <div className="flex min-w-0 items-center gap-2">
              <span
                className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-mesh-accent"
                aria-hidden
              />
              <span className="truncate text-[10px] font-medium uppercase tracking-[0.18em] text-mesh-muted">
                {m.insights.heading}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="touch-manipulation rounded-md px-3 py-2 text-xs font-medium text-mesh-muted transition-colors hover:bg-mesh-bg/80 hover:text-mesh-text sm:py-1.5 sm:text-[11px]"
              aria-expanded={open}
            >
              {open ? m.insights.minimize : m.insights.show}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key={index}
                role="status"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="max-h-[min(42vh,16rem)] overflow-y-auto overscroll-y-contain px-4 py-3.5 sm:max-h-none sm:overflow-visible"
              >
                <p className="text-xs font-semibold text-mesh-text sm:text-xs">
                  {tips[index].title}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-mesh-muted">
                  {tips[index].body}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  {tips.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={m.insights.dotLabel.replace(
                        "{n}",
                        String(i + 1),
                      )}
                      aria-current={i === index ? "true" : undefined}
                      onClick={() => setIndex(i)}
                      className={`touch-manipulation flex min-h-10 min-w-10 items-center justify-center rounded-md sm:min-h-0 sm:min-w-0 sm:p-0 ${
                        i === index
                          ? "bg-mesh-accent/15 sm:bg-transparent"
                          : "active:bg-mesh-bg/40 sm:active:bg-transparent"
                      }`}
                    >
                      <span
                        className={`block rounded-full transition-all ${
                          i === index
                            ? "h-1 w-6 bg-mesh-accent"
                            : "h-1 w-1 bg-mesh-border sm:hover:bg-mesh-muted/50"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.button
                key="collapsed"
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(true)}
                className="touch-manipulation flex w-full min-h-12 items-center gap-2 px-3 py-3 text-left text-xs text-mesh-muted transition-colors hover:bg-mesh-bg/60 hover:text-mesh-text sm:min-h-0 sm:py-2.5"
              >
                <span
                  className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-mesh-accent/80"
                  aria-hidden
                />
                {m.insights.openPanel}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
