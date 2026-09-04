import { langStringObject } from "../utils";

export interface PortalHero {
  tag: langStringObject;
  title: langStringObject;
  description: langStringObject;
  email: string;
  socialLinks: Array<{
    label: string;
    icon: string;
    href: string;
  }>;
}

export interface PathCard {
  badge: langStringObject;
  title: langStringObject;
  description: langStringObject;
  tags: string[];
  metaText: langStringObject;
  linkText: langStringObject;
  href: string;
}

export interface CrossApproachCard {
  badge: langStringObject;
  subtitle: langStringObject;
  title: langStringObject;
  description: langStringObject;
  actionText: langStringObject;
}

export interface DailyLifeCard {
  title: langStringObject;
  image: string;
  alt: string;
}

export interface SummaryItem {
  label: langStringObject;
  value: langStringObject;
}

export interface PortalData {
  status: langStringObject;
  hero: PortalHero;
  pathSelection: {
    title: langStringObject;
    subtitle: langStringObject;
    devCard: PathCard;
    bjjCard: PathCard;
    crossCard: CrossApproachCard;
  };
  dailyLife: {
    title: langStringObject;
    location: langStringObject;
    cards: DailyLifeCard[];
  };
  editorialSummary: {
    title: langStringObject;
    tag: langStringObject;
    items: SummaryItem[];
    footerText: langStringObject;
    buttonText: langStringObject;
  };
}
