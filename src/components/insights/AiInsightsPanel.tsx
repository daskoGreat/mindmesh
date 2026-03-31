"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const TIPS = [
  {
    title: "Kartläggning",
    body: "Börja med en översikt över var AI faktiskt används idag, även i små arbetsflöden.",
  },
  {
    title: "Ansvar",
    body: "Tydliggör vem som beslutar om modeller, data och uppföljning innan skarpa lösningar.",
  },
  {
    title: "Dokumentation",
    body: "Pilotprojekt behöver också spårbarhet. Kortloggar räcker långt för att undvika visningsluckor.",
  },
  {
    title: "Riskperspektiv",
    body: "Klassificera användningsfall utifrån påverkan på människor och verksamhet, inte bara teknik.",
  },
  {
    title: "EU AI Act",
    body: "Kravsmatrisen växer. En enkel egenkontroll nu gör det lättare att anpassa er senare.",
  },
];

export function AiInsightsPanel() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % TIPS.length);
    }, 9000);
    return () => window.clearInterval(id);
  }, [open]);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[60] flex max-w-[min(100vw-2rem,20rem)] flex-col items-end md:bottom-6 md:right-6">
      <motion.div
        className="pointer-events-auto w-full overflow-hidden rounded-lg border border-mesh-border bg-mesh-surface/85 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
      >
        <div className="flex items-center justify-between gap-2 border-b border-mesh-border px-3 py-2">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex h-1.5 w-1.5 rounded-full bg-mesh-accent"
              aria-hidden
            />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-mesh-muted">
              Insikter
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="rounded px-2 py-1 text-[11px] font-medium text-mesh-muted transition-colors hover:bg-mesh-bg/80 hover:text-mesh-text"
            aria-expanded={open}
          >
            {open ? "Minimera" : "Visa"}
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
              className="px-4 py-3.5"
            >
              <p className="text-xs font-semibold text-mesh-text">
                {TIPS[index].title}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-mesh-muted">
                {TIPS[index].body}
              </p>
              <div className="mt-3 flex gap-1">
                {TIPS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Visa insikt ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-1 rounded-full transition-all ${
                      i === index
                        ? "w-4 bg-mesh-accent"
                        : "w-1 bg-mesh-border hover:bg-mesh-muted/50"
                    }`}
                  />
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
              className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-xs text-mesh-muted transition-colors hover:bg-mesh-bg/60 hover:text-mesh-text"
            >
              <span
                className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-mesh-accent/80"
                aria-hidden
              />
              Öppna insikter
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
