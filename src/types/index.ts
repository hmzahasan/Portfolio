export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  /** Leave undefined to keep your phone number off the public site. */
  phone?: string;
  github: string;
  githubUrl: string;
  headline: string;
  availability: string;
  about: string[];
  stats: { value: string; label: string }[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  stack: string[];
};

export type Project = {
  title: string;
  kind: string;
  summary: string;
  points: string[];
  stack: string[];
  featured?: boolean;
  repoUrl?: string;
  liveUrl?: string;
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  grade: string;
  coursework: string[];
};
