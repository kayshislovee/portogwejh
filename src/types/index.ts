export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

import type { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  icon: LucideIcon | string;
  category: "Language" | "Framework" | "Tool";
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
