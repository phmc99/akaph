import { langStringObject } from "../utils";

export interface FeatureCard {
  id: string;
  title: langStringObject;
  description: langStringObject;
  status: langStringObject;
  icon: string;
  iconBgClass?: string;
  statusClass?: string;
  previewImages?: string[];
}

export interface MaisData {
  roadmapTag: langStringObject;
  title: langStringObject;
  description: langStringObject;
  features: FeatureCard[];
  footer: {
    version: langStringObject;
    subtext: langStringObject;
  };
}
