"use client";

import { motion, useReducedMotion } from "framer-motion";

const NODES: { x: number; y: number; depth: number; size: number }[] = [
  { x: 10, y: 22, depth: 1.1, size: 5 },
  { x: 24, y: 14, depth: 0.85, size: 4 },
  { x: 38, y: 28, depth: 1.2, size: 5 },
  { x: 52, y: 12, depth: 0.9, size: 3.5 },
  { x: 64, y: 26, depth: 1.05, size: 4.5 },
  { x: 78, y: 18, depth: 0.95, size: 4 },
  { x: 88, y: 34, depth: 1.15, size: 5 },
  { x: 18, y: 42, depth: 0.8, size: 3.5 },
  { x: 42, y: 48, depth: 1, size: 4.5 },
  { x: 70, y: 44, depth: 0.88, size: 3.5 },
  { x: 56, y: 58, depth: 1.1, size: 4.5 },
  { x: 30, y: 62, depth: 0.75, size: 3.5 },
  { x: 84, y: 56, depth: 1, size: 4 },
];

type BrainMeshInteractiveProps = {
  mouse: { x: number; y: number };
  scrollFactor: number;
};

export function BrainMeshInteractive({
  mouse,
  scrollFactor,
}: BrainMeshInteractiveProps) {
  const reduceMotion = useReducedMotion();
  const fx = reduceMotion ? 0 : mouse.x;
  const fy = reduceMotion ? 0 : mouse.y;
  const sf = reduceMotion ? 0 : Math.max(0, Math.min(1, scrollFactor));

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.28] md:opacity-[0.34]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 100 72"
      >
        <defs>
          <linearGradient id="brain-mesh-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(148 163 184)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="rgb(196 240 49)" stopOpacity="0.14" />
          </linearGradient>
        </defs>
        <g
          fill="none"
          stroke="url(#brain-mesh-stroke)"
          strokeWidth="0.16"
          style={{
            transform: `translate(${fx * 1.2 * sf}%, ${fy * 0.9 * sf}%)`,
            transition: reduceMotion ? undefined : "transform 80ms ease-out",
          }}
        >
          <path d="M10 22 L38 28 L52 12 L78 18 L88 34" />
          <path d="M24 14 L42 48 L56 58 L30 62" />
          <path d="M64 26 L70 44 L84 56" />
          <path d="M18 42 L24 14 L64 26" />
        </g>
      </svg>

      {NODES.map((n, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute rounded-full bg-mesh-accent/35 shadow-[0_0_12px_rgba(196,240,49,0.12)]"
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            width: n.size,
            height: n.size,
            marginLeft: -n.size / 2,
            marginTop: -n.size / 2,
          }}
          animate={{
            x: fx * 18 * n.depth * sf,
            y: fy * 14 * n.depth * sf,
          }}
          transition={{
            type: "spring",
            stiffness: 52,
            damping: 24,
            mass: 0.45,
          }}
        />
      ))}
    </div>
  );
}
