"use client";

import { useEffect } from "react";
import { useI18n } from "@/i18n/I18nProvider";

export function HtmlLangSync() {
  const { locale, messages } = useI18n();

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "sv";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", messages.meta.description);
  }, [locale, messages.meta.description]);

  return null;
}
