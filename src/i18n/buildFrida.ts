import { dictionaries } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/types";
import type { TeamMember } from "@/data/team";
import {
  FRIDA_IMAGE,
  FRIDA_NAME,
  FRIDA_THUMB_CLASSES,
} from "@/data/team";

export function buildFridaMember(locale: Locale): TeamMember {
  const t = dictionaries[locale].team;
  return {
    id: "frida",
    name: FRIDA_NAME,
    role: t.role,
    bio: t.bio,
    imageSrc: FRIDA_IMAGE.imageSrc,
    imageAlt: FRIDA_IMAGE.imageAlt,
    projects: t.projects.map((p, i) => ({
      title: p.title,
      description: p.description,
      thumbClass: FRIDA_THUMB_CLASSES[i] ?? FRIDA_THUMB_CLASSES[0],
    })),
  };
}
