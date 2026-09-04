import { Metadata } from "next";
import { getLinksData } from "@/src/data/Links/mocks";
import LinksScreen from "@/src/screens/LinksScreen";

interface LinksPageProps {
  params: Promise<{ locale: "pt" | "en" }>;
}

export async function generateMetadata({ params }: LinksPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "pt" ? "Links Rápidos • Pedro Costa" : "Quick Links • Pedro Costa",
    description: locale === "pt" ? "Hub de links e contato direto" : "Link hub and direct contact",
  };
}

export default async function LinksPage({ params }: LinksPageProps) {
  const { locale } = await params;
  const data = await getLinksData(locale);

  return <LinksScreen data={data} locale={locale} />;
}
