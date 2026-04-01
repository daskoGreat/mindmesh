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
  whatWeDo: {
    heading: string;
    aiTech: string;
    aiTechBody: string;
    leadership: string;
    leadershipBody: string;
    comms: string;
    commsBody: string;
  };
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
        "MindMesh – riktning, kommunikation och ledarskap när det behöver bli enklare att fatta beslut.",
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
      lead: "Vi hjälper er se vad som faktiskt händer, vad som betyder något och vad ni rimligen bör göra härnäst.",
      cta: "Utforska MindMesh",
    },
    whatWeDo: {
      heading: "Vad vi gör",
      aiTech: "AI och teknik",
      aiTechBody:
        "AI hamnar lätt i fel möte. Vi redar ut var det används, vem som bestämmer och hur det hänger ihop med övriga mål. Poängen är bättre beslut, inte fler piloter som ingen vågar lägga ned.",
      leadership: "Ledarskap och riktning",
      leadershipBody:
        "När mycket känns otydligt behövs sällan fler initiativ. Vi jobbar med ledare och team om riktning som går att förklara och stå för.",
      comms: "Kommunikation och organisation",
      commsBody:
        "Tydligare budskap, tydligare roller och tydligare beslutsvägar. Annars fastnar förändring i slutet av varje möte.",
    },
    howWeThink: {
      heading: "Hur vi tänker",
      p1: "Det mesta hänger ihop, även när det ser ut som separata problem.",
      p2: "Vi tittar på människor, kultur och vilka beslut som faktiskt styr vardagen.",
      p3: "Om man får prata klart brukar det bli uppenbart vad som räknas på riktigt.",
    },
    people: {
      heading: "Personer",
      featuredProjects: "Utvalda projekt",
      openCard: "Öppna utvalda projekt för {name}",
    },
    team: {
      role: "CEO/Founder",
      bio: "Riktning, kommunikation och ledarskap. Gillar när det som är rörigt får ett språk och ett nästa steg.",
      projects: [
        {
          title: "Strategisk förnyelse i tjänsteföretag",
          description:
            "Ett år där ledning och nyckelroller fick synka riktning innan större satsningar skulle igång.",
        },
        {
          title: "Kommunikation vid förändring",
          description:
            "När silos skulle bli gemensamma mål: tydligare berättelse och beslutsunderlag som höll för frågor från golvet.",
        },
        {
          title: "Styrelse och riskperspektiv",
          description:
            "Material till styrelsen om sådant som faktiskt påverkar ert ansvar. Exempel, inte referens.",
        },
      ],
    },
    services: {
      heading: "Tjänster",
      items: [
        {
          title: "Strategi och riktning",
          text: "Prioriteringar och berättelser som går att diskutera i ledning och i linjen utan att alla pratar förbi varandra.",
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
          text: "Uppdrag där riktning, kommunikation och uppföljning inte lever i tre olika dokument.",
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
        body: "Säg högt vad som är viktigast just nu. Då slipper ni prata förbi varandra om resten.",
      },
      {
        title: "Ansvar",
        body: "Om det inte står vem som bestämmer blir det bråk när det brådar.",
      },
      {
        title: "Spårbarhet",
        body: "Tre rader om vad ni beslutat och varför slår ofta tjock pärm som ingen öppnar.",
      },
      {
        title: "Helhet",
        body: "Lyft blicken från enskilda projekt: hur hänger kultur, mål och vardagsbeteenden ihop just nu?",
      },
      {
        title: "Kommunikation",
        body: "Samma budskap får låta olika för olika grupper. Börja från samma underlag så blir svaren mer lika.",
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
        "EU:s AI-förordning ställer krav på öppenhet, risk och dokumentation för en del system. Hur hårt det trycker beror på vad ni gör.",
      intro2:
        "I praktiken: skriv ner var AI finns, vem som svarar och vad ni gör om något går snett. Resten kan ni bygga på sen.",
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
          body: "Ni har redan en del på plats. Fortsätt med tydliga ägare och titta på det igen när något nytt tillkommer.",
        },
        yellow: {
          label: "Delvis beredskap",
          body: "Det finns hål att täppa till innan det börjar synas i vardagen. Börja med vem som svarar för vad och skriv ner det.",
        },
        red: {
          label: "Hög prioritering",
          body: "Här behöver ni sätta tid ganska snart. En enkel kartläggning och några få saker ni faktiskt gör brukar räcka långt.",
        },
      },
    },
  },
  en: {
    meta: {
      description:
        "MindMesh – direction, communication, and leadership when decisions need to feel simpler.",
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
      lead: "We help you see what is actually happening, what actually matters, and what is reasonable to do next.",
      cta: "Explore MindMesh",
    },
    whatWeDo: {
      heading: "What we do",
      aiTech: "AI and technology",
      aiTechBody:
        "AI often ends up in the wrong room. We sort out where it is used, who decides, and how it ties to your other goals. The aim is better decisions, not more pilots no one dares to shut down.",
      leadership: "Leadership and direction",
      leadershipBody:
        "When a lot feels fuzzy you rarely need more initiatives. We work with leaders and teams on direction you can explain and stand behind.",
      comms: "Communication and organisation",
      commsBody:
        "Clearer messages, clearer roles, clearer decision paths. Otherwise change stalls at the end of every meeting.",
    },
    howWeThink: {
      heading: "How we think",
      p1: "Most things connect, even when they look like separate problems.",
      p2: "We look at people, culture, and the decisions that actually steer day-to-day work.",
      p3: "If people get to finish their sentences, it usually becomes obvious what really counts.",
    },
    people: {
      heading: "People",
      featuredProjects: "Selected projects",
      openCard: "Open selected projects for {name}",
    },
    team: {
      role: "CEO/Founder",
      bio: "Direction, communication, and leadership. Likes it when messy situations get words and a next step.",
      projects: [
        {
          title: "Strategic renewal in a services firm",
          description:
            "A year where leadership and key roles got aligned on direction before the bigger bets went live.",
        },
        {
          title: "Communication during change",
          description:
            "Moving from silos to shared goals: clearer narrative and decision material that held up to questions from the floor.",
        },
        {
          title: "Board and risk perspective",
          description:
            "Board material on what actually affects your oversight. Example, not a reference case.",
        },
      ],
    },
    services: {
      heading: "Services",
      items: [
        {
          title: "Strategy and direction",
          text: "Priorities and narratives you can discuss in leadership and in the line without talking past each other.",
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
          text: "Assignments where direction, communication, and follow-up do not live in three different documents.",
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
        body: "Say out loud what matters most right now. The rest of the conversation gets easier.",
      },
      {
        title: "Ownership",
        body: "If it is not clear who decides, people argue when things heat up.",
      },
      {
        title: "Traceability",
        body: "Three lines on what you decided and why often beat a thick binder no one opens.",
      },
      {
        title: "The wider view",
        body: "Step back from single projects: how do culture, goals, and everyday habits line up right now?",
      },
      {
        title: "Communication",
        body: "The same message may land differently for different groups. Start from one brief so answers stay similar.",
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
        "The EU AI Act asks for openness, risk thinking, and documentation for some systems. How hard it bites depends on what you do.",
      intro2:
        "In practice: write down where AI lives, who is accountable, and what you do when something goes wrong. You can build from there.",
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
          body: "You already have a fair bit in place. Keep owners clear and look again when something new lands.",
        },
        yellow: {
          label: "Partial readiness",
          body: "There are holes to close before it shows up in daily work. Start with who answers for what and write it down.",
        },
        red: {
          label: "High priority",
          body: "You will want to spend time on this soon. A simple map and a few things you actually do usually go far.",
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
