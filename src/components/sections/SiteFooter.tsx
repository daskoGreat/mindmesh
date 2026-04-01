"use client";

import Link from "next/link";
import { AiActModalTrigger } from "@/components/compliance/AiActModal";
import { Logo } from "@/components/ui/Logo";
import { useMessages } from "@/i18n/I18nProvider";

export function SiteFooter() {
  const m = useMessages();

  return (
    <footer
      id="kontakt"
      className="border-t border-mesh-border px-4 py-10 sm:px-6 md:px-8 md:py-16"
      style={{
        paddingBottom:
          "max(2.5rem, calc(env(safe-area-inset-bottom, 0px) + 2.5rem))",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <Logo size="sm" />
          <p className="max-w-sm text-sm leading-relaxed text-mesh-muted">
            {m.footer.tagline}
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <Link
            href="mailto:hej@mindmesh.se"
            className="inline-flex min-h-11 items-center text-sm font-medium text-mesh-accent transition-colors hover:text-mesh-accent-hover"
          >
            hej@mindmesh.se
          </Link>
          <AiActModalTrigger
            className="touch-manipulation bg-transparent py-2 text-left text-sm font-medium text-mesh-muted underline decoration-mesh-border underline-offset-4 transition-colors hover:text-mesh-accent hover:decoration-mesh-accent/45"
            label={m.footer.aiAct}
          />
        </div>
      </div>
    </footer>
  );
}
