import { langStringObject } from "../utils";

export interface SocialQuickLink {
  label: string;
  icon: string;
  href: string;
}

export interface LinkCardItem {
  id: string;
  title: langStringObject;
  subtitle: langStringObject;
  icon: string;
  href: string;
  isExternal?: boolean;
  isHighlighted?: boolean;
  isFullWidth?: boolean;
}

export interface LinkSection {
  title: langStringObject;
  links: LinkCardItem[];
}

export interface ContactOption {
  label: string;
  icon: string;
  href: string;
  colorClass?: string;
}

export interface LinksData {
  status: langStringObject;
  hero: {
    name: string;
    verifiedText: langStringObject;
    bio: langStringObject;
    email: string;
    socials: SocialQuickLink[];
  };
  sections: LinkSection[];
  directContact: {
    title: langStringObject;
    options: ContactOption[];
    email: string;
  };
  footer: {
    locationText: langStringObject;
    versionText: string;
  };
}
