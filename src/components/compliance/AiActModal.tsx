"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { getAiActResult } from "@/i18n/dictionaries";
import { useI18n, useMessages } from "@/i18n/I18nProvider";

type Level = "green" | "yellow" | "red" | null;

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
  label,
}: {
  className?: string;
  label: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        className={`touch-manipulation ${className}`}
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
  const { locale } = useI18n();
  const msg = useMessages().aiAct;
  const a11y = useMessages().a11y;
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = msg.questions.map((prompt, i) => ({
    id: `q${i + 1}`,
    prompt,
  }));

  const setAnswer = useCallback((id: string, value: number) => {
    setAnswers((a) => ({ ...a, [id]: value }));
    setSubmitted(false);
  }, []);

  const total = questions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
  const max = questions.length * 2;
  const filled = questions.every((q) => answers[q.id] !== undefined);

  const result =
    submitted && filled
      ? getAiActResult(locale, total)
      : { level: null as Level, label: "", body: "" };

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

  const opts = [
    { v: 0, t: msg.opt0 },
    { v: 1, t: msg.opt1 },
    { v: 2, t: msg.opt2 },
  ] as const;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:p-4 sm:items-center md:p-6"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label={a11y.close}
            className="absolute inset-0 bg-mesh-bg/75 backdrop-blur-[2px]"
            onClick={handleClose}
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 max-h-[100dvh] w-full max-w-lg overflow-y-auto overscroll-y-contain rounded-t-2xl border border-mesh-border border-b-0 bg-mesh-bg-elevated shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:max-h-[min(90dvh,720px)] sm:rounded-xl sm:border-b"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sticky top-0 flex items-start justify-between gap-3 border-b border-mesh-border bg-mesh-bg-elevated/95 px-4 py-3 backdrop-blur-sm sm:gap-4 sm:px-5 sm:py-4">
              <div className="min-w-0 pr-2">
                <h2
                  id={titleId}
                  className="text-pretty text-base font-semibold tracking-tight text-mesh-text"
                >
                  {msg.title}
                </h2>
                <p className="mt-1 text-xs leading-snug text-mesh-muted">
                  {msg.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="touch-manipulation -mr-1 shrink-0 rounded-md p-3 text-mesh-muted transition-colors hover:bg-mesh-surface hover:text-mesh-text sm:p-1.5"
                aria-label={a11y.closeDialog}
              >
                <CloseIcon />
              </button>
            </div>

            <div className="space-y-5 px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:px-5 sm:pb-5">
              <div className="rounded-lg border border-mesh-border bg-mesh-surface/30 p-4 text-xs leading-relaxed text-mesh-muted">
                <p>{msg.intro1}</p>
                <p className="mt-2">{msg.intro2}</p>
              </div>

              <ol className="space-y-4">
                {questions.map((q, i) => (
                  <li key={q.id} className="rounded-lg border border-mesh-border/80 p-3.5">
                    <p className="text-pretty text-sm font-medium text-mesh-text">
                      {i + 1}. {q.prompt}
                    </p>
                    <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {opts.map((opt) => (
                        <button
                          key={opt.v}
                          type="button"
                          onClick={() => setAnswer(q.id, opt.v)}
                          className={`touch-manipulation min-h-12 rounded-md border px-3 py-2.5 text-center text-xs font-medium transition-colors sm:min-h-10 sm:px-2.5 sm:py-2 sm:text-left ${
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

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <button
                  type="button"
                  disabled={!filled}
                  onClick={() => setSubmitted(true)}
                  className="touch-manipulation min-h-12 w-full rounded-md bg-mesh-accent px-4 py-3 text-sm font-medium text-mesh-bg transition-colors hover:bg-mesh-accent-hover disabled:cursor-not-allowed disabled:opacity-45 sm:min-h-0 sm:w-auto sm:py-2"
                >
                  {msg.submit}
                </button>
                {filled ? (
                  <span className="text-xs text-mesh-muted">
                    {msg.score
                      .replace("{current}", String(total))
                      .replace("{max}", String(max))}
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
                      {msg.footerNote}
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
