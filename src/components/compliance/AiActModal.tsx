"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

const QUESTIONS: { id: string; prompt: string }[] = [
  {
    id: "q1",
    prompt: "Har ni en överblick över var AI används eller planeras i verksamheten?",
  },
  {
    id: "q2",
    prompt: "Finns utsedda roller eller ansvar för risk, test och uppföljning?",
  },
  {
    id: "q3",
    prompt: "Dokumenteras beslut, datakällor och begränsningar kring modellerna?",
  },
  {
    id: "q4",
    prompt: "Har ni rutiner för mänsklig övervakning där det behövs?",
  },
  {
    id: "q5",
    prompt: "Utvärderar ni löpande om lösningarna gör vad ni tror att de gör?",
  },
];

type Level = "green" | "yellow" | "red" | null;

function scoreToLevel(score: number): { level: Level; label: string; body: string } {
  if (score >= 9) {
    return {
      level: "green",
      label: "Bra utgångsläge",
      body: "Ni verkar ha flera grundpelare på plats. Fortsätt med tydliga ägarskap och löpande genomlysning när nya lösningar tillkommer.",
    };
  }
  if (score >= 5) {
    return {
      level: "yellow",
      label: "Delvis beredskap",
      body: "Det finns luckor som är rimliga att åtgärda innan skärpta krav börjar märkas i vardagen. Prioritera dokumentation och roller.",
    };
  }
  return {
    level: "red",
    label: "Hög prioritering",
    body: "Flera signaler pekar på att strukturen behöver förstärkas snarast. En fokuserad kartläggning och en enkel handlingsplan brukar vara bästa nästa steg.",
  };
}

const LEVEL_STYLES: Record<
  NonNullable<Level>,
  { border: string; bg: string; dot: string }
> = {
  green: {
    border: "border-emerald-500/35",
    bg: "bg-emerald-500/10",
    dot: "bg-emerald-400",
  },
  yellow: {
    border: "border-amber-400/35",
    bg: "bg-amber-400/10",
    dot: "bg-amber-400",
  },
  red: {
    border: "border-red-500/35",
    bg: "bg-red-500/10",
    dot: "bg-red-400",
  },
};

export function AiActModalTrigger({
  className = "",
  label = "AI Act: snabbkoll",
}: {
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        whileHover={{ y: -1.5 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.button>
      <AiActModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function AiActModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const setAnswer = useCallback((id: string, value: number) => {
    setAnswers((a) => ({ ...a, [id]: value }));
    setSubmitted(false);
  }, []);

  const total = QUESTIONS.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
  const max = QUESTIONS.length * 2;
  const filled = QUESTIONS.every((q) => answers[q.id] !== undefined);

  const result =
    submitted && filled ? scoreToLevel(total) : { level: null as Level, label: "", body: "" };

  const handleClose = useCallback(() => {
    setSubmitted(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    const t = window.requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>("button, [href], input")?.focus();
    });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.cancelAnimationFrame(t);
    };
  }, [open, handleClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center md:p-6"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Stäng"
            className="absolute inset-0 bg-mesh-bg/75 backdrop-blur-[2px]"
            onClick={handleClose}
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 max-h-[min(90vh,720px)] w-full max-w-lg overflow-y-auto rounded-xl border border-mesh-border bg-mesh-bg-elevated shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-mesh-border bg-mesh-bg-elevated/95 px-5 py-4 backdrop-blur-sm">
              <div>
                <h2
                  id={titleId}
                  className="text-base font-semibold tracking-tight text-mesh-text"
                >
                  AI Act Compliance Check
                </h2>
                <p className="mt-1 text-xs text-mesh-muted">
                  Förenklad självbedömning för demonstration. Ersätter inte juridisk rådgivning.
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="rounded-md p-1.5 text-mesh-muted transition-colors hover:bg-mesh-surface hover:text-mesh-text"
                aria-label="Stäng dialog"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="space-y-5 px-5 py-5">
              <div className="rounded-lg border border-mesh-border bg-mesh-surface/30 p-4 text-xs leading-relaxed text-mesh-muted">
                <p>
                  EU:s AI-förordning (AI Act) ställer krav på transparens, riskhantering och
                  dokumentation för vissa system. Exakt tillämpning beror på er kontext.
                </p>
                <p className="mt-2">
                  Rekommendation: kombinera en enkel inventering med tydliga ägare och en plan
                  för uppföljning när regelverket trappas upp.
                </p>
              </div>

              <ol className="space-y-4">
                {QUESTIONS.map((q, i) => (
                  <li key={q.id} className="rounded-lg border border-mesh-border/80 p-3.5">
                    <p className="text-sm font-medium text-mesh-text">
                      {i + 1}. {q.prompt}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {[
                        { v: 0, t: "Nej / oklart" },
                        { v: 1, t: "Delvis" },
                        { v: 2, t: "Ja" },
                      ].map((opt) => (
                        <button
                          key={opt.v}
                          type="button"
                          onClick={() => setAnswer(q.id, opt.v)}
                          className={`rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors ${
                            answers[q.id] === opt.v
                              ? "border-mesh-accent/60 bg-mesh-accent/15 text-mesh-text"
                              : "border-mesh-border text-mesh-muted hover:border-mesh-muted hover:text-mesh-text"
                          }`}
                        >
                          {opt.t}
                        </button>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  disabled={!filled}
                  onClick={() => setSubmitted(true)}
                  className="rounded-md bg-mesh-accent px-4 py-2 text-sm font-medium text-mesh-bg transition-colors hover:bg-mesh-accent-hover disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Visa bedömning
                </button>
                {filled ? (
                  <span className="text-xs text-mesh-muted">
                    Poäng: {total} av {max}
                  </span>
                ) : null}
              </div>

              <AnimatePresence mode="wait">
                {submitted && filled && result.level ? (
                  <motion.div
                    key={result.level}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`rounded-lg border p-4 ${LEVEL_STYLES[result.level].border} ${LEVEL_STYLES[result.level].bg}`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${LEVEL_STYLES[result.level].dot}`}
                        aria-hidden
                      />
                      <p className="text-sm font-semibold text-mesh-text">
                        {result.label}
                      </p>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-mesh-muted">
                      {result.body}
                    </p>
                    <p className="mt-3 text-[11px] text-mesh-muted/85">
                      Detta är ett exempel på hur en snabb intern avstämning kan se ut.
                      Anpassa frågorna efter er sektor och era system.
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M4 4l10 10M14 4L4 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
