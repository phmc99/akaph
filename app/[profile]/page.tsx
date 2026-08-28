'use client'

import ProfileDetails from "@/src/screens/ProfileDetails"
import { usePathname } from "next/navigation"

export default function Profile() {
  const pathname = usePathname()
  const cleanPathname = pathname.replace("/", "")

  return <ProfileDetails profile={cleanPathname} />
}