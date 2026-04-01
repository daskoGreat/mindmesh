"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrainMeshInteractive } from "@/components/sections/BrainMeshInteractive";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NetworkBackdrop } from "@/components/sections/NetworkBackdrop";
import { useMessages } from "@/i18n/I18nProvider";

export function Hero() {
  const m = useMessages();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollFactor, setScrollFactor] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      setScrollFactor(Math.max(0, Math.min(1, 1 - window.scrollY / 380)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: (e.clientX - r.left) / r.width - 0.5,
      y: (e.clientY - r.top) / r.height - 0.5,
    });
  };

  const onMouseLeave = () => setMouse({ x: 0, y: 0 });

  return (
    <header
      className="relative flex min-h-[min(88dvh,44rem)] flex-col justify-end border-b border-mesh-border pb-[max(4rem,env(safe-area-inset-bottom,0px)+2.5rem)] pt-[max(7rem,env(safe-area-inset-top,0px)+5rem)] sm:min-h-[85vh] md:min-h-[90vh] md:pb-24 md:pt-32"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <NetworkBackdrop />
      <BrainMeshInteractive mouse={mouse} scrollFactor={scrollFactor} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pr-[max(4.5rem,1rem)] sm:px-6 sm:pr-8 md:px-8">
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo size="lg" />
        </motion.div>

        <motion.h1
          className="max-w-4xl text-balance text-[clamp(1.75rem,calc(0.9rem+5.5vw),3.75rem)] font-semibold leading-[1.12] tracking-tight text-mesh-text sm:leading-[1.08]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
        >
          {m.hero.title}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-mesh-muted sm:mt-8 sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
        >
          {m.hero.lead}
        </motion.p>

        <motion.div
          className="mt-10 w-full sm:mt-12 sm:w-auto"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
        >
          <Button
            href="#vad-vi-gor"
            className="w-full min-h-12 sm:w-auto sm:min-h-11"
          >
            {m.hero.cta}
          </Button>
        </motion.div>
      </div>
    </header>
  );
}
