export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
  highlights: string[];
  visual: "travel" | "hospitality" | "payments" | "autonomous";
  imageSrc: string;
  imageAlt: string;
  imageFit: "contain" | "cover";
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
  tone: "primary" | "secondary" | "tertiary";
};

export type ContactLink = {
  label: string;
  href: string;
};

export type Education = {
  title: string;
  institution: string;
  period: string;
  location: string;
  details: string[];
};
