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

export interface Skill {
  name: string;
  icon: string; // emoji atau URL icon
  category: "Language" | "Framework" | "Tool";
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
