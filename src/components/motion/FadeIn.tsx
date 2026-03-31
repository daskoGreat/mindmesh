"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
} & Omit<HTMLMotionProps<"div">, "children">;

export function FadeIn({
  children,
  className,
  delay = 0,
  viewport = { once: true, margin: "-60px" },
  ...rest
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
