import ProfileDetails from "@/src/screens/ProfileDetails"

interface ProfileProps {
  params: Promise<{ profile: string }>
}

export default async function Profile({ params }: ProfileProps) {
  const { profile } = await params;
  const cleanPathname = profile.replace("/", "");

  return <ProfileDetails profile={cleanPathname} />
}