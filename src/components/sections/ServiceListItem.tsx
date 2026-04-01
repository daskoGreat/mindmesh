"use client";

import { motion } from "framer-motion";

const ICONS = [
  (props: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M8 10h8M8 14h4m-6 8h12a2 2 0 002-2V6a2 2 0 00-2-2H7l-3 3v13a2 2 0 002 2z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  (props: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M12 4v6M8 12l4 4 4-4M6 20h12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  (props: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M4 7h16M4 12h10M4 17h16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="17" cy="12" r="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  (props: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M8 18V6l10 6-10 6z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
  (props: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M12 4a3 3 0 100 6 3 3 0 000-6zM5 20a7 7 0 0114 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  (props: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M5 7h14v10H5V7zM3 9h4M17 9h4M9 12h6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  (props: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M4 19h16M6 4h12l-1 11H7L6 4zM9 8h6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
];

type ServiceListItemProps = {
  title: string;
  text: string;
  index: number;
  delay: number;
};

export function ServiceListItem({
  title,
  text,
  index,
  delay,
}: ServiceListItemProps) {
  const Icon = ICONS[index % ICONS.length];

  return (
    <motion.li
      className="group min-w-0 border-l-2 border-mesh-accent/40 pl-4 sm:pl-5"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      whileHover={{ x: 4 }}
    >
      <div className="flex gap-3">
        <motion.div
          className="mt-0.5 text-mesh-accent/70"
          whileHover={{ scale: 1.08, rotate: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          <Icon className="h-5 w-5 shrink-0" />
        </motion.div>
          <div className="min-w-0">
            <h3 className="text-pretty font-semibold text-mesh-text">{title}</h3>
            <p className="mt-2 break-words text-sm leading-relaxed text-mesh-muted">
              {text}
            </p>
          </div>
      </div>
    </motion.li>
  );
}
