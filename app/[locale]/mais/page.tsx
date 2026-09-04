import { Metadata } from "next";
import { getMaisData } from "@/src/data/Mais/mocks";
import MaisScreen from "@/src/screens/MaisScreen";

interface MaisPageProps {
  params: Promise<{ locale: "pt" | "en" }>;
}

export async function generateMetadata({ params }: MaisPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "pt" ? "Mais • Pedro Costa" : "More • Pedro Costa",
    description: locale === "pt" ? "Outras coisas que eu desenvolvi" : "Other things I developed",
  };
}

export default async function MaisPage({ params }: MaisPageProps) {
  const { locale } = await params;
  const data = await getMaisData(locale);

  return <MaisScreen data={data} locale={locale} />;
}
