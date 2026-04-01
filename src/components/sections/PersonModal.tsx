"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
} from "react";
import type { TeamMember } from "@/data/team";
import { useMessages } from "@/i18n/I18nProvider";

type PersonModalProps = {
  member: TeamMember | null;
  onClose: () => void;
};

export function PersonModal({ member, onClose }: PersonModalProps) {
  const m = useMessages();
  const open = member !== null;
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    const t = window.requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>("button")?.focus();
    });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.cancelAnimationFrame(t);
    };
  }, [open, handleClose]);

  return (
    <AnimatePresence>
      {open && member ? (
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
            aria-label={m.a11y.close}
            className="absolute inset-0 bg-mesh-bg/80 backdrop-blur-[2px]"
            onClick={handleClose}
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 max-h-[100dvh] w-full max-w-lg overflow-y-auto overscroll-y-contain rounded-t-2xl border border-mesh-border border-b-0 bg-mesh-bg-elevated shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:max-h-[min(92dvh,780px)] sm:rounded-xl sm:border-b"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sticky top-0 flex items-start justify-between gap-3 border-b border-mesh-border bg-mesh-bg-elevated/95 px-4 py-3 backdrop-blur-sm sm:px-5 sm:py-4">
              <div className="min-w-0 flex flex-1 items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-mesh-border sm:h-[4.5rem] sm:w-[4.5rem]">
                  <Image
                    src={member.imageSrc}
                    alt={member.imageAlt}
                    fill
                    sizes="72px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h2
                    id={titleId}
                    className="text-base font-semibold tracking-tight text-mesh-text sm:text-lg"
                  >
                    {member.name}
                  </h2>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.14em] text-mesh-accent">
                    {member.role}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="touch-manipulation -mr-1 shrink-0 rounded-md p-3 text-mesh-muted transition-colors hover:bg-mesh-surface hover:text-mesh-text sm:p-1.5"
                aria-label={m.a11y.closeDialog}
              >
                <CloseIcon />
              </button>
            </div>

            <div className="space-y-6 px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:px-5 sm:pb-5">
              <p className="text-sm leading-relaxed text-mesh-muted sm:text-base">
                {member.bio}
              </p>

              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-mesh-muted">
                  {m.personModal.projects}
                </h3>
                <p className="mt-1 text-[11px] leading-relaxed text-mesh-muted/80">
                  {m.personModal.note}
                </p>
                <ul className="mt-4 space-y-4">
                  {member.projects.map((p) => (
                    <li
                      key={p.title}
                      className="flex gap-4 rounded-lg border border-mesh-border/80 bg-mesh-surface/20 p-3"
                    >
                      <div
                        className={`h-14 w-14 shrink-0 rounded-full ${p.thumbClass}`}
                        aria-hidden
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-mesh-text">
                          {p.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-mesh-muted">
                          {p.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
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
