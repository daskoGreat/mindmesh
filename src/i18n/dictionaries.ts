import type { Locale } from "@/i18n/types";

export type ServiceItem = { title: string; text: string };
export type InsightTip = { title: string; body: string };
export type TeamProjectMsg = { title: string; description: string };

export type Messages = {
  meta: { description: string };
  a11y: {
    languageNav: string;
    svLabel: string;
    enLabel: string;
    close: string;
    closeDialog: string;
    openProjects: string;
    insightDot: string;
  };
  hero: { title: string; lead: string; cta: string };
  whatWeDo: { heading: string; leadership: string; leadershipBody: string; comms: string; commsBody: string };
  howWeThink: { heading: string; p1: string; p2: string; p3: string };
  people: { heading: string; featuredProjects: string; openCard: string };
  team: {
    role: string;
    bio: string;
    projects: TeamProjectMsg[];
  };
  services: { heading: string; items: ServiceItem[] };
  cta: { heading: string; primary: string; aiAct: string };
  footer: { tagline: string; aiAct: string };
  insights: {
    heading: string;
    minimize: string;
    show: string;
    openPanel: string;
    dotLabel: string;
  };
  tips: InsightTip[];
  personModal: { projects: string; note: string };
  aiAct: {
    title: string;
    subtitle: string;
    intro1: string;
    intro2: string;
    opt0: string;
    opt1: string;
    opt2: string;
    submit: string;
    score: string;
    footerNote: string;
    questions: string[];
    levels: {
      green: { label: string; body: string };
      yellow: { label: string; body: string };
      red: { label: string; body: string };
    };
  };
};

export const dictionaries: Record<Locale, Messages> = {
  sv: {
    meta: {
      description:
        "MindMesh: riktning, kommunikation och ledarskap för organisationer som söker klarhet.",
    },
    a11y: {
      languageNav: "Språk",
      svLabel: "Byt till svenska",
      enLabel: "Switch to English",
      close: "Stäng",
      closeDialog: "Stäng dialog",
      openProjects: "Öppna utvalda projekt",
      insightDot: "Visa insikt",
    },
    hero: {
      title: "Skapa klarhet där det finns komplexitet",
      lead: "Vi hjälper organisationer att förstå vad som händer, vad som spelar roll och vad nästa steg bör vara.",
      cta: "Utforska MindMesh",
    },
    whatWeDo: {
      heading: "Vad vi gör",
      leadership: "Ledarskap och riktning",
      leadershipBody:
        "Vi stöttar ledare och team i att navigera osäkerhet. Det handlar inte om fler initiativ utan om rätt riktning.",
      comms: "Kommunikation och organisation",
      commsBody:
        "Vi hjälper er att förtydliga budskap, roller och beslutsvägar så att förändring faktiskt får fäste i vardagen.",
    },
    howWeThink: {
      heading: "Hur vi tänker",
      p1: "De flesta problem är inte isolerade. De hänger ihop.",
      p2: "Vi ser helheten. Människorna, kulturen och besluten som styr vardagen.",
      p3: "När det får ta tid blir det tydligt vad som faktiskt spelar roll.",
    },
    people: {
      heading: "Personer",
      featuredProjects: "Utvalda projekt",
      openCard: "Öppna utvalda projekt för {name}",
    },
    team: {
      role: "CEO/Founder",
      bio: "Arbetar med riktning, kommunikation och ledarskap. Hjälper organisationer att förstå sig själva och fatta bättre beslut.",
      projects: [
        {
          title: "Strategisk förnyelse i tjänsteföretag",
          description:
            "Faciliterade ett år långt program där ledning och nyckelroller synkade riktning innan större förändringar skulle sättas i verk.",
        },
        {
          title: "Kommunikation vid förändring",
          description:
            "Tydliggjorde berättelse och beslutsunderlag när en organisation gick från silos till gemensamma mål.",
        },
        {
          title: "Styrelse och riskperspektiv",
          description:
            "Återkommande material till styrelsen med frågor som faktiskt spelar roll i ert ansvar. Illustrativt exempel.",
        },
      ],
    },
    services: {
      heading: "Tjänster",
      items: [
        {
          title: "Strategi och riktning",
          text: "Tydliggjorda prioriteringar och berättelser som ledning och organisation kan enas kring.",
        },
        {
          title: "Förändringsledning",
          text: "Stöd när nya arbetssätt ska landa utan att vardagen drunknar i initiativ.",
        },
        {
          title: "Facilitering",
          text: "Workshopar och samtal som skapar gemensamt språk och konkreta nästa steg.",
        },
        {
          title: "Föreläsningar",
          text: "Genomgångar som möter både ledning och medarbetare där ni befinner er.",
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
          title: "Program och uppdrag",
          text: "Uppdrag som håller ihop riktning, kommunikation och uppföljning över tid.",
        },
      ],
    },
    cta: {
      heading: "Redo att skapa klarhet",
      primary: "Kartlägg er situation",
      aiAct: "AI Act Compliance Check",
    },
    footer: {
      tagline: "Riktning, kommunikation och ledarskap",
      aiAct: "AI Act Compliance Check",
    },
    insights: {
      heading: "Insikter",
      minimize: "Minimera",
      show: "Visa",
      openPanel: "Öppna insikter",
      dotLabel: "Insikt {n}",
    },
    tips: [
      {
        title: "Riktning",
        body: "Börja med att namnge vad som är viktigast nu. Då blir både budskap och prioriteringar enklare att hålla ihop.",
      },
      {
        title: "Ansvar",
        body: "Tydliga roller kring beslut minskar friktion när tempet skruvas upp eller förändringen känns otydlig.",
      },
      {
        title: "Spårbarhet",
        body: "Korta loggar över vad ni beslutat, och varför, räcker ofta längre än dokumentation som ändå inte läses.",
      },
      {
        title: "Helhet",
        body: "Lyft blicken från enskilda projekt: hur hänger kultur, mål och vardag beteenden ihop just nu?",
      },
      {
        title: "Kommunikation",
        body: "Samma sak får ofta förklaras på olika sätt för olika grupper. Ett gemensamt underlag gör svaren mer lika.",
      },
    ],
    personModal: {
      projects: "Utvalda projekt",
      note: "Exempel för visning. Ersätter inte referenssamtal.",
    },
    aiAct: {
      title: "AI Act Compliance Check",
      subtitle: "Förenklad självbedömning för demonstration. Ersätter inte juridisk rådgivning.",
      intro1:
        "EU:s AI-förordning (AI Act) ställer krav på transparens, riskhantering och dokumentation för vissa system. Tillämpningen beror på er kontext.",
      intro2:
        "Praktiskt brukar en enkel inventering, tydliga ägare och en löpande plan räcka långt när regelverket skärps.",
      opt0: "Nej / oklart",
      opt1: "Delvis",
      opt2: "Ja",
      submit: "Visa bedömning",
      score: "Poäng: {current} av {max}",
      footerNote:
        "Ett exempel på hur en snabb intern avstämning kan se ut. Anpassa frågorna efter er sektor och era system.",
      questions: [
        "Har ni överblick över var AI används eller planeras i verksamheten?",
        "Finns utsedda roller eller ansvar för risk, test och uppföljning?",
        "Dokumenteras beslut, datakällor och begränsningar kring modellerna?",
        "Har ni rutiner för mänsklig övervakning där det behövs?",
        "Utvärderar ni löpande om lösningarna gör vad ni utgår från att de gör?",
      ],
      levels: {
        green: {
          label: "Bra utgångsläge",
          body: "Flera byggstenar verkar finnas. Behåll tydliga ägarskap och fortsätt följa upp när nya lösningar tillkommer.",
        },
        yellow: {
          label: "Delvis beredskap",
          body: "Det finns luckor som är värda att täppa till innan kraven syns i vardagen. Börja med dokumentation och roller.",
        },
        red: {
          label: "Hög prioritering",
          body: "Flera signaler tyder på att strukturen behöver stärkas. En fokuserad kartläggning och en handfull prioriterade åtgärder brukar vara rätt nästa steg.",
        },
      },
    },
  },
  en: {
    meta: {
      description:
        "MindMesh: direction, communication, and leadership for organisations that want clarity.",
    },
    a11y: {
      languageNav: "Language",
      svLabel: "Switch to Swedish",
      enLabel: "Switch to English",
      close: "Close",
      closeDialog: "Close dialog",
      openProjects: "Open selected projects",
      insightDot: "Show insight",
    },
    hero: {
      title: "Create clarity where things are complex",
      lead: "We help organisations see what is going on, what actually matters, and what the next step should be.",
      cta: "Explore MindMesh",
    },
    whatWeDo: {
      heading: "What we do",
      leadership: "Leadership and direction",
      leadershipBody:
        "We support leaders and teams in uncertain phases. The point is rarely more initiatives, but the right direction.",
      comms: "Communication and organisation",
      commsBody:
        "We help you sharpen messages, roles, and decision paths so change sticks in day-to-day work.",
    },
    howWeThink: {
      heading: "How we think",
      p1: "Most issues are not isolated. They connect.",
      p2: "We look at the whole: people, culture, and the decisions that shape how work really runs.",
      p3: "When there is room to reflect, it becomes obvious what deserves attention.",
    },
    people: {
      heading: "People",
      featuredProjects: "Selected projects",
      openCard: "Open selected projects for {name}",
    },
    team: {
      role: "CEO/Founder",
      bio: "Frida works with direction, communication, and leadership. She helps organisations understand themselves and make better calls.",
      projects: [
        {
          title: "Strategic renewal in a services firm",
          description:
            "A year-long programme where leadership and key roles aligned on direction before larger changes were rolled out.",
        },
        {
          title: "Communication during change",
          description:
            "Clarified narrative and decision material as one organisation moved from silos to shared goals.",
        },
        {
          title: "Board and risk perspective",
          description:
            "Recurring board material with questions that matter for your oversight. Illustrative example.",
        },
      ],
    },
    services: {
      heading: "Services",
      items: [
        {
          title: "Strategy and direction",
          text: "Priorities and narratives that leadership and the wider organisation can actually rally around.",
        },
        {
          title: "Change leadership",
          text: "Support when new ways of working need to land without drowning the organisation in initiatives.",
        },
        {
          title: "Facilitation",
          text: "Workshops and conversations that build a shared language and concrete next steps.",
        },
        {
          title: "Talks",
          text: "Sessions that meet leadership and staff where you are today.",
        },
        {
          title: "Coaching",
          text: "Support on difficult questions, at a pace that fits.",
        },
        {
          title: "Board work",
          text: "Material and dialogue that make complexity easier to grasp.",
        },
        {
          title: "Programmes and assignments",
          text: "Work that keeps direction, communication, and follow-up connected over time.",
        },
      ],
    },
    cta: {
      heading: "Ready to create clarity",
      primary: "Map your situation",
      aiAct: "AI Act Compliance Check",
    },
    footer: {
      tagline: "Direction, communication, and leadership",
      aiAct: "AI Act Compliance Check",
    },
    insights: {
      heading: "Notes",
      minimize: "Hide",
      show: "Show",
      openPanel: "Open notes",
      dotLabel: "Insight {n}",
    },
    tips: [
      {
        title: "Direction",
        body: "Name what matters most right now. Messaging and trade-offs get easier once that is explicit.",
      },
      {
        title: "Ownership",
        body: "Clear decision roles reduce friction when pace picks up or change feels fuzzy.",
      },
      {
        title: "Traceability",
        body: "Short logs of what you decided, and why, often beat polished documents no one opens.",
      },
      {
        title: "The wider view",
        body: "Step back from single projects: how do culture, goals, and everyday habits line up?",
      },
      {
        title: "Communication",
        body: "The same point may need different wording for different groups. One shared brief keeps answers consistent.",
      },
    ],
    personModal: {
      projects: "Selected projects",
      note: "Examples for illustration. Not a substitute for references.",
    },
    aiAct: {
      title: "AI Act Compliance Check",
      subtitle: "A light self-assessment for demonstration. Not legal advice.",
      intro1:
        "The EU AI Act sets expectations on transparency, risk management, and documentation for certain systems. How it lands depends on your context.",
      intro2:
        "In practice, a simple inventory, clear owners, and a plan for follow-up go a long way as rules tighten.",
      opt0: "No / unclear",
      opt1: "Partly",
      opt2: "Yes",
      submit: "Show assessment",
      score: "Score: {current} of {max}",
      footerNote:
        "An example of a quick internal check-in. Tune the questions to your sector and systems.",
      questions: [
        "Do you have an overview of where AI is used or planned in the organisation?",
        "Are roles and responsibilities clear for risk, testing, and follow-up?",
        "Are decisions, data sources, and model limits documented?",
        "Do you have routines for human oversight where it matters?",
        "Do you check, over time, whether solutions behave as you assume?",
      ],
      levels: {
        green: {
          label: "Solid starting point",
          body: "Several foundations seem in place. Keep ownership clear and continue to review as new tools arrive.",
        },
        yellow: {
          label: "Partial readiness",
          body: "There are gaps worth closing before requirements show up in daily work. Start with documentation and roles.",
        },
        red: {
          label: "High priority",
          body: "Signals suggest the structure needs attention soon. A focused mapping and a handful of concrete actions is usually the right next move.",
        },
      },
    },
  },
};

export function getAiActResult(
  locale: Locale,
  score: number,
): { level: "green" | "yellow" | "red"; label: string; body: string } {
  const { levels } = dictionaries[locale].aiAct;
  if (score >= 9) return { level: "green", ...levels.green };
  if (score >= 5) return { level: "yellow", ...levels.yellow };
  return { level: "red", ...levels.red };
}
