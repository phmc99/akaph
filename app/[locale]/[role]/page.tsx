import { getRole } from "@/src/data/RoleDetails/mocks";
import { RoleDetails as RoleDetailsModel } from "@/src/data/RoleDetails/models";
import RoleDetailsScreen from "@/src/screens/RoleDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface RoleProps {
  params: Promise<{ role: string; locale: "pt" | "en" }>;
}

async function fetchRoleDetails(role: string, locale: "pt" | "en"): Promise<RoleDetailsModel> {
  const roleDetails = await getRole(role, locale);

  if (!roleDetails) {
    return notFound();
  }

  return roleDetails;
}

export async function generateMetadata({ params }: RoleProps): Promise<Metadata> {
  const { locale, role } = await params;
  const roleDetails = await fetchRoleDetails(role, locale);

  return {
    title: `${roleDetails.name[locale]} • Pedro Costa`,
    description: roleDetails.description[locale],
  };
}

export default async function RolePage({ params }: RoleProps) {
  const { role, locale } = await params;
  const cleanPathname = role.replace(/^\/+|\/+$/g, "");

  const roleDetails = await fetchRoleDetails(cleanPathname, locale);

  return <RoleDetailsScreen role={cleanPathname} locale={locale} details={roleDetails} />;
}