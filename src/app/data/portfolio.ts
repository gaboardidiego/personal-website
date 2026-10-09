import type { Education, Experience, Project, ProjectFilter } from '../models/portfolio';

export const portfolio = {
  name: 'Your name',
  monogram: 'YN',
  role: 'Frontend developer',
  location: 'Based in your city',
  email: 'hello@example.com',
  introduction:
    'I care about making digital experiences feel clear, considered, and genuinely useful. I enjoy the details as much as the bigger picture.',
};

export const skills = ['AngularJS'];

export const experience: Experience[] = [
  {
    role: 'Your role',
    organization: 'Company or client',
    period: '20XX — Present',
    description: 'Add a concise note about your responsibilities, contribution, and results.',
  },
];

export const education: Education[] = [
  {
    qualification: 'Your qualification',
    institution: 'School or institution',
    period: '20XX — 20XX',
  },
];

export const projectFilters: ProjectFilter[] = ['All', 'Interface', 'Open source', 'Experiment'];

export const projects: Project[] = [
  {
    title: 'Personal portfolio',
    category: 'Interface',
    year: '2026',
    description:
      'A responsive home for selected work and experience, built with modern Angular and designed to grow over time.',
    technologies: ['Angular', 'TypeScript', 'CSS'],
  },
  {
    title: 'Project title',
    category: 'Open source',
    year: '20XX',
    description: 'Describe the problem, your contribution, and the outcome in a sentence or two.',
    technologies: ['Add your tools'],
  },
  {
    title: 'Experiment title',
    category: 'Experiment',
    year: '20XX',
    description: 'A small exploration in an idea, interaction, or tool worth sharing.',
    technologies: ['Add your tools'],
  },
];
