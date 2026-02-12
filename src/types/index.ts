export interface TimelineItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  alignment: "left" | "right";
  dotOpacity: "full" | "medium" | "low";
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  videoUrl: string;
  videoUrlAlt: string;
  techStack: string[];
  role: string;
  outcome: string;
  reversed?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  isPrimary?: boolean;
}

export interface SocialLink {
  platform: string;
  handle: string;
  href: string;
}
