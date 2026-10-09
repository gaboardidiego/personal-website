import type { Education, Experience, FocusArea, Interest } from '../models/portfolio';

export const portfolio = {
  name: 'Diego Gaboardi',
  monogram: 'DG',
  role: 'Software Developer',
  currentPosition: 'Senior Software Developer at PTC',
  location: 'Based in Vienna, Austria · Working for PTC',
  email: 'gaboardidiego@gmail.com',
  linkedin: 'https://www.linkedin.com/in/diego-gaboardi',
  portrait: 'images/profile.jpg',
  backdrop: 'images/background.jpg',
  cv: 'cv/diego-gaboardi-cv.pdf',
  contactPrompt: 'Open to conversations about AI products and engineering.',
  introduction:
    'I build AI-powered products. My AI journey began in computer vision and augmented reality, and more recently has focused on large language models (LLMs). I bring my experience across frontend and backend development, cloud services, and test frameworks to LLM-powered applications.',
};

export const experience: Experience[] = [
  {
    role: 'Senior Software Developer',
    organization: 'PTC · Windchill',
    logos: [{ name: 'PTC', logo: 'logos/ptc.svg' }],
    period: '2025 — Present',
    current: true,
    description:
      "I contributed significantly to Windchill AI Assistant, PTC's LLM-powered assistant that helps users find and understand product information through natural-language interactions. I worked on the product from its initial prototypes through release, on both the frontend and the backend.",
  },
  {
    role: 'Senior Software Developer',
    organization: 'PTC · Vuforia',
    logos: [{ name: 'Vuforia', logo: 'logos/vuforia.webp' }],
    period: '2023 — 2025',
    description:
      'I developed the AWS-hosted WebAPIs that our customers rely on to create Augmented Reality applications. Alongside the benchmarking framework, I contributed to several areas of our CI/CD pipeline.',
  },
  {
    role: 'Software Developer',
    organization: 'PTC · Vuforia',
    logos: [{ name: 'Vuforia', logo: 'logos/vuforia.webp' }],
    period: '2019 — 2023',
    description:
      'My primary responsibility was to expand a benchmarking test framework, which detects regressions and supports the fine-tuning of the computer vision algorithms developed by our team. The role required extensive Python knowledge and solid software engineering practices to keep the code readable and extensible.',
  },
  {
    role: 'CV-based collision avoidance system for motorbikes',
    organization: 'Politecnico di Milano and Piaggio',
    logos: [
      { name: 'Politecnico di Milano', logo: 'logos/polimi.svg' },
      { name: 'Piaggio', logo: 'logos/piaggio.svg' },
    ],
    period: '2018',
    description:
      'Design and implementation of a CV-based collision avoidance system for motorbikes. The most innovative contribution was the adaptation of the car-oriented algorithms on motorbikes and a novel approach to identifying stop-light regions and determining their status.',
  },
  {
    role: 'Mobility services project',
    organization: 'Technical University of Munich and BMW',
    logos: [
      { name: 'Technical University of Munich', logo: 'logos/tum.svg' },
      { name: 'BMW', logo: 'logos/bmw.svg' },
    ],
    period: '2017',
    description:
      'Design and implementation of FleetMe, a tool that optimizes management of corporate fleets by using car data.',
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: 'LLM applications',
    description:
      'Contributing to Windchill AI Assistant at PTC, from first prototypes to release. It lets users find and understand product information in natural language. I worked on both the frontend and the backend.',
  },
  {
    title: 'Computer vision and AR',
    description:
      "For 5 years I worked on PTC's Vuforia augmented reality SDK. I contributed to the SDK and made a strong contribution to its benchmarking framework, which detects regressions and supports the fine-tuning of the computer vision algorithms.",
  },
  {
    title: 'Cloud services',
    description:
      'Designing, implementing, and maintaining WebAPI services on AWS that customers use to build AR applications. I also have experience with Azure AI features.',
  },
];

export const education: Education[] = [
  {
    qualification: "Master's Degree in Software Engineering, with honors",
    institution: 'Politecnico di Milano',
    logo: { name: 'Politecnico di Milano', logo: 'logos/polimi.svg' },
    period: '2016 — 2018',
  },
  {
    qualification: 'Semester abroad',
    institution: 'Technical University of Munich',
    logo: { name: 'Technical University of Munich', logo: 'logos/tum.svg' },
    period: '2017 — 2018',
  },
  {
    qualification: "Bachelor's Degree in Software Engineering",
    institution: 'Politecnico di Milano',
    logo: { name: 'Politecnico di Milano', logo: 'logos/polimi.svg' },
    period: '2013 — 2016',
  },
  {
    qualification: 'Liceo Scientifico (High School)',
    institution: 'Istituto di Istruzione Superiore D. M. Turoldo, Zogno',
    period: '2008 — 2013',
  },
];

export const interests: Interest[] = [
  {
    title: 'Running',
    description:
      'Six marathons completed, with a personal best of 2h\u00a051. I started with trail races and moved on to road races.',
    image: 'images/running.jpg',
  },
  {
    title: 'Clarinet musician',
    description: 'I play the clarinet in the band of San Martino Oltre la Goggia.',
    image: 'images/clarinet.jpg',
  },
  {
    title: 'Mountains',
    description: 'Hiking, easy climbing, and skiing. This photo was taken on Monte Rosa.',
    image: 'images/mountains.jpg',
  },
];
