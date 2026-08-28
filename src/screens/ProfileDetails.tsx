interface ProfileSelectProps {
  locale?: "pt" | "en"
  profile: string
}

export default function ProfileDetails({ locale = "pt", profile }: ProfileSelectProps) {
  return (
    <>
      <h1>Details {locale} - {profile}</h1>
    </>
  );
}
