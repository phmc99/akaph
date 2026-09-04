import { langStringObject } from "../utils";

export interface SpecItem {
  label: langStringObject;
  value: langStringObject;
  icon?: string;
  isStack?: boolean;
  tags?: string[];
}

export interface TimelineItem {
  period: string;
  title: langStringObject;
  subtitle: langStringObject;
  description: langStringObject;
  isCurrent?: boolean;
}

export interface ProjectItem {
  title: string;
  description: langStringObject;
  tags: string[];
  link?: string;
}

export interface SideProjectItem {
  title: string;
  domain: string;
  description: langStringObject;
  link: string;
}

export interface IdeaItem {
  text: langStringObject;
}

export interface RoleDetails {
  id: string;
  role: "developer" | "bjj";
  name: langStringObject;
  description: langStringObject;
  availability: langStringObject;
  title: langStringObject;
  bio: langStringObject;
  avatar: {
    name: string;
    title: langStringObject;
    quote: langStringObject;
    icon: string;
  };
  specs: SpecItem[];
  timeline: TimelineItem[];
  projects: ProjectItem[];
  sideProjects: SideProjectItem[];
  exploringIdeas: IdeaItem[];
  footer: {
    quote: langStringObject;
    copyright: string;
    subtitle: langStringObject;
  };
}

// Legacy interfaces kept for section files compatibility
export interface RoleDetailsSection {
  id: number;
  roleDetailsId: number;
  name: langStringObject;
  htmlDescription: langStringObject | string;
}

export interface company {
  id: `${string}-${string}-${string}-${string}-${string}`;
  name: string;
  role: langStringObject;
  startDate: Date;
  endDate: Date;
  description: langStringObject;
}