import { FadeIn } from "@/components/motion/FadeIn";
import { ServiceListItem } from "@/components/sections/ServiceListItem";
import { Section } from "@/components/ui/Section";

const services: { title: string; text: string }[] = [
  {
    title: "AI strategi",
    text: "Vi sätter riktlinjer som går att leva med i vardagen, inte bara på papperet.",
  },
  {
    title: "Automatisering",
    text: "Processer som frigör tid utan att skapa nya problem längre fram.",
  },
  {
    title: "Systemstöd",
    text: "Ordning i verktyg och data så teamen kan arbeta utan friktion.",
  },
  {
    title: "Föreläsningar",
    text: "Tydliga genomgångar som landar hos både teknik och ledning.",
  },
  {
    title: "Coachning",
    text: "Stöd i svåra frågor, i den takt som krävs.",
  },
  {
    title: "Styrelsearbete",
    text: "Underlag och samtal som gör komplexitet begripligare.",
  },
  {
    title: "Projektledning",
    text: "Leveranser som håller ihop från start till mål.",
  },
];

export function Services() {
  return (
    <Section id="tjanster" className="bg-mesh-bg-elevated">
      <FadeIn>
        <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-mesh-muted">
          Tjänster
        </h2>
      </FadeIn>

      <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
        {services.map((item, i) => (
          <ServiceListItem
            key={item.title}
            title={item.title}
            text={item.text}
            index={i}
            delay={0.04 + i * 0.03}
          />
        ))}
      </ul>
    </Section>
  );
}
