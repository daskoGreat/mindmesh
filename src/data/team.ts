export type TeamProject = {
  title: string;
  description: string;
  /** Tailwind gradient classes for round project thumbnail */
  thumbClass: string;
};

export type TeamMember = {
  id: "frida" | "david";
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  imageAlt: string;
  projects: TeamProject[];
};

export const TEAM: TeamMember[] = [
  {
    id: "frida",
    name: "Frida Stjernholm",
    role: "CEO/Founder",
    bio: "Arbetar med riktning, kommunikation och ledarskap. Hjälper organisationer att förstå sig själva och fatta bättre beslut.",
    imageSrc: "/people/frida.png",
    imageAlt: "Frida Stjernholm",
    projects: [
      {
        title: "Strategisk förnyelse i tjänsteföretag",
        description:
          "Faciliterade ett år långt program där ledning och nyckelroller synkade riktning innan större teknikinvesteringar.",
        thumbClass:
          "bg-gradient-to-br from-slate-600/50 to-mesh-accent/25 ring-1 ring-mesh-border",
      },
      {
        title: "Kommunikation vid förändring",
        description:
          "Tydliggjorde berättelse och beslutsunderlag när en organisation gick från silos till gemensamma mål.",
        thumbClass:
          "bg-gradient-to-br from-mesh-accent/30 to-slate-800/60 ring-1 ring-mesh-border",
      },
      {
        title: "Styrelse och riskperspektiv",
        description:
          "Mock: återkommande insiktsmaterial till styrelse kring AI och ansvar, med frågor som faktiskt spelar roll.",
        thumbClass:
          "bg-gradient-to-br from-slate-700/70 to-slate-900/80 ring-1 ring-mesh-border",
      },
    ],
  },
  {
    id: "david",
    name: "David Skoglund",
    role: "CTO/Founder",
    bio: "Arbetar nära teknik och affär. Van att ta idéer hela vägen till fungerande lösningar. Trivs där det är otydligt och behöver struktureras.",
    imageSrc: "/people/david.png",
    imageAlt: "David Skoglund",
    projects: [
      {
        title: "AI-assisterat beslutsstöd",
        description:
          "Mock: arkitektur och integritet från pilot till drift, med tydliga gränser för vad modellen får och inte får göra.",
        thumbClass:
          "bg-gradient-to-br from-emerald-900/40 to-mesh-accent/20 ring-1 ring-mesh-border",
      },
      {
        title: "Automatisering utan teknikskuld",
        description:
          "Kartlade manuella kedjor och ersatte stegvis med automation som kunde ägas av verksamheten själv.",
        thumbClass:
          "bg-gradient-to-br from-slate-600/55 to-emerald-900/35 ring-1 ring-mesh-border",
      },
      {
        title: "Plattformsstöd för team",
        description:
          "Mock: en gemensam verktygsstack med enhetlig data och enklare handover mellan produkt och drift.",
        thumbClass:
          "bg-gradient-to-br from-mesh-accent/25 to-slate-800/65 ring-1 ring-mesh-border",
      },
    ],
  },
];
