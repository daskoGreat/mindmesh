"use client";

import Link from "next/link";
import { AiActModalTrigger } from "@/components/compliance/AiActModal";
import { Logo } from "@/components/ui/Logo";

export function SiteFooter() {
  return (
    <footer
      id="kontakt"
      className="border-t border-mesh-border px-5 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <Logo size="sm" />
          <p className="max-w-sm text-sm leading-relaxed text-mesh-muted">
            Intersection of human, business and technology
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <Link
            href="mailto:hej@mindmesh.se"
            className="text-sm font-medium text-mesh-accent transition-colors hover:text-mesh-accent-hover"
          >
            hej@mindmesh.se
          </Link>
          <AiActModalTrigger
            className="bg-transparent text-left text-sm font-medium text-mesh-muted underline decoration-mesh-border underline-offset-4 transition-colors hover:text-mesh-accent hover:decoration-mesh-accent/45"
            label="AI Act Compliance Check"
          />
        </div>
      </div>
    </footer>
  );
}
