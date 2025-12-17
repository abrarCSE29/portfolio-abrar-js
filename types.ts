
export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  association: string;
  tags: string[];
  bullets: string[];
  githubUrl?: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  cgpa: string;
  period: string;
  thesis?: string;
}

export interface Award {
  title: string;
  description: string;
}

export interface Publication {
  title: string;
  date: string;
  venue: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}
