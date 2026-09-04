import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist } from "next/font/google";
import AppShell from "@/src/components/AppShell";
import "../globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const metadataByLocale = {
  pt: {
    title: "Pedro Costa • Inicio",
    description: "Desenvolvedor Fullstack & Professor de Jiu-Jitsu",
  },
  en: {
    title: "Pedro Costa • Home",
    description: "Software Engineer & BJJ Coach",
  },
};

type ValidLocale = keyof typeof metadataByLocale;

interface LayoutParams {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!(locale in metadataByLocale)) {
    return notFound();
  }

  const metadata = metadataByLocale[locale as ValidLocale];

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function RootLayout({ children, params }: LayoutParams) {
  const { locale } = await params;

  if (!(locale in metadataByLocale)) {
    return notFound();
  }

  return (
    <html lang={locale} className={geist.variable}>
      <body>
        <AppShell locale={locale as "pt" | "en"}>{children}</AppShell>
      </body>
    </html>
  );
}