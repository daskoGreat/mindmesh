import { FadeIn } from "@/components/motion/FadeIn";
import { Section } from "@/components/ui/Section";

export function HowWeThink() {
  return (
    <Section className="bg-mesh-bg-elevated">
      <FadeIn>
        <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-mesh-muted">
          Hur vi tänker
        </h2>
      </FadeIn>

      <FadeIn delay={0.08} className="mt-12 max-w-3xl space-y-6 md:mt-16">
        <p className="text-lg leading-relaxed text-mesh-text md:text-xl">
          De flesta problem är inte isolerade. De hänger ihop.
        </p>
        <p className="text-lg leading-relaxed text-mesh-muted md:text-xl">
          Vi ser helheten. Tekniken, människorna och affären.
        </p>
        <p className="text-lg font-medium leading-relaxed text-mesh-text md:text-xl">
          Det är först när de möts som det blir på riktigt.
        </p>
      </FadeIn>
    </Section>
  );
}
