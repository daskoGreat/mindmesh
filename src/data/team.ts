export type TeamProject = {
  title: string;
  description: string;
  thumbClass: string;
};

export type TeamMember = {
  id: "frida";
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  imageAlt: string;
  projects: TeamProject[];
};

export const FRIDA_NAME = "Frida Stjernholm";

export const FRIDA_IMAGE = {
  imageSrc: "/people/frida.png",
  imageAlt: "Frida Stjernholm",
};

export const FRIDA_THUMB_CLASSES = [
  "bg-gradient-to-br from-slate-600/50 to-mesh-accent/25 ring-1 ring-mesh-border",
  "bg-gradient-to-br from-mesh-accent/30 to-slate-800/60 ring-1 ring-mesh-border",
  "bg-gradient-to-br from-slate-700/70 to-slate-900/80 ring-1 ring-mesh-border",
] as const;
