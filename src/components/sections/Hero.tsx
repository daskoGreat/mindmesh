"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrainMeshInteractive } from "@/components/sections/BrainMeshInteractive";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NetworkBackdrop } from "@/components/sections/NetworkBackdrop";

export function Hero() {
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
      className="relative flex min-h-[85vh] flex-col justify-end border-b border-mesh-border pb-16 pt-28 md:min-h-[90vh] md:pb-24 md:pt-32"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <NetworkBackdrop />
      <BrainMeshInteractive mouse={mouse} scrollFactor={scrollFactor} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-8">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo size="lg" />
        </motion.div>

        <motion.h1
          className="max-w-4xl text-[clamp(2rem,6vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-mesh-text"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
        >
          Skapa klarhet där det finns komplexitet
        </motion.h1>

        <motion.p
          className="mt-8 max-w-2xl text-lg leading-relaxed text-mesh-muted md:text-xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
        >
          Vi hjälper organisationer att förstå vad som händer, vad som spelar
          roll och vad nästa steg bör vara.
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
        >
          <Button href="#vad-vi-gor">Utforska MindMesh</Button>
        </motion.div>
      </div>
    </header>
  );
}
