"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { PersonModal } from "@/components/sections/PersonModal";
import { Section } from "@/components/ui/Section";
import { TEAM, type TeamMember } from "@/data/team";

export function People() {
  const [active, setActive] = useState<TeamMember | null>(null);

  return (
    <Section id="personer">
      <FadeIn>
        <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-mesh-muted">
          Personer
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-14 md:mt-16 md:grid-cols-2 md:gap-16">
        {TEAM.map((member, i) => (
          <FadeIn key={member.id} delay={0.06 + i * 0.04}>
            <motion.button
              type="button"
              onClick={() => setActive(member)}
              className="group w-full rounded-lg text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mesh-accent"
              aria-label={`${member.name}, ${member.role}. Öppna utvalda projekt.`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <article className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                <div className="relative mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-full ring-2 ring-mesh-border transition-[box-shadow] duration-300 group-hover:ring-mesh-accent/35 sm:mx-0">
                  <Image
                    src={member.imageSrc}
                    alt={member.imageAlt}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-mesh-text">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.14em] text-mesh-accent">
                      {member.role}
                    </p>
                  </div>
                  <p className="max-w-md text-base leading-relaxed text-mesh-muted">
                    {member.bio}
                  </p>
                  <p className="text-xs font-medium text-mesh-accent/90 transition-colors group-hover:text-mesh-accent">
                    Utvalda projekt
                    <span className="text-mesh-muted group-hover:text-mesh-accent">
                      {" "}
                      →
                    </span>
                  </p>
                </div>
              </article>
            </motion.button>
          </FadeIn>
        ))}
      </div>

      <PersonModal member={active} onClose={() => setActive(null)} />
    </Section>
  );
}
