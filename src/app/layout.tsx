import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { HtmlLangSync } from "@/components/ui/HtmlLangSync";
import { I18nProvider } from "@/i18n/I18nProvider";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#05070d",
};

export const metadata: Metadata = {
  title: "MindMesh",
  description:
    "MindMesh: riktning, kommunikation och ledarskap för organisationer som söker klarhet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full min-h-[100dvh] flex-col">
        <I18nProvider>
          <HtmlLangSync />
          <LanguageToggle />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
