import type { Metadata } from "next";
import "../globals.css";
import { notFound, redirect } from "next/navigation";

const metadataByLocale = {
  pt: {
    title: "a.k.a. ph",
    description: "Em eterna construção",
  },
  en: {
    title: "a.k.a. ph",
    description: "Always under construction",
  },
};

type ValidLocale = keyof typeof metadataByLocale;

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  if (!(locale in metadataByLocale)) {
    return notFound()
  }

  const metadata = metadataByLocale[locale as ValidLocale];

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}