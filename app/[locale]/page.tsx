import ProfileSelect from "@/src/screens/ProfileSelect";

interface HomeProps {
  params: Promise<{ locale: "pt" | "en" }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  return <ProfileSelect locale={locale} />;
}
