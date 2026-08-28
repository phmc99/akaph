import RoleSelect from "@/src/screens/RoleSelect";

interface HomeProps {
  params: Promise<{ locale: "pt" | "en" }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  return <RoleSelect locale={locale} />;
}
