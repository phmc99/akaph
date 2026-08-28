interface RoleDetailsProps {
  locale?: "pt" | "en"
  role: string
}

export default function RoleDetails({ locale = "pt", role }: RoleDetailsProps) {
  return (
    <>
      <h1>Details {locale} - {role}</h1>
    </>
  );
}
