export type ProjectCategory = 'Interface' | 'Open source' | 'Experiment';

export type ProjectFilter = 'All' | ProjectCategory;

export interface Project {
  title: string;
  category: ProjectCategory;
  year: string;
  description: string;
  technologies: string[];
  url?: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface Education {
  qualification: string;
  institution: string;
  period: string;
}
