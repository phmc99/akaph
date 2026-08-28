import { getRole } from "@/src/data/RoleDetails/mocks";
import { RoleDetails } from "@/src/data/RoleDetails/models";
import RoleDetailsScreen from "@/src/screens/RoleDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface RoleProps {
  params: Promise<{ role: string, locale: "pt" | "en" }>
}

async function getRoleDetails(role: string): Promise<RoleDetails> {
  const roleDetails = await getRole(role);

  if (!roleDetails) {
    return notFound();
  }

  return roleDetails;
}

export async function generateMetadata({ params }: RoleProps): Promise<Metadata> {
  const { locale, role } = await params;

  const roleDetails = await getRoleDetails(role);

  return {
    title: roleDetails.name[locale],
    description: roleDetails.description[locale],
  };
}

export default async function Role({ params }: RoleProps) {
  const { role, locale } = await params;
  const cleanPathname = role.replace("/", "");

  const roleDetails = await getRoleDetails(role);

  return <RoleDetailsScreen role={cleanPathname} locale={locale} details={roleDetails} />
}