import RoleDetails from "@/src/screens/RoleDetails";

interface RoleProps {
  params: Promise<{ role: string }>
}

export default async function Role({ params }: RoleProps) {
  const { role } = await params;
  const cleanPathname = role.replace("/", "");

  return <RoleDetails role={cleanPathname} />
}