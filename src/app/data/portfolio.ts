import type { Education, Experience, Interest } from '../models/portfolio';

export const portfolio = {
  name: 'Diego Gaboardi',
  monogram: 'DG',
  role: 'Software Developer',
  currentPosition: 'Senior Software Engineer at Vuforia, PTC',
  email: 'gaboardidiego@gmail.com',
  phone: '+39 327 0490250',
  address: 'Hohlweggase 30/8, 1030, Vienna, Austria',
  linkedin: 'https://www.linkedin.com/in/diego-gaboardi',
  portrait: 'images/profile.jpg',
  backdrop: 'images/background.jpg',
  introduction:
    'I am Diego Gaboardi, Senior Software Engineer at Vuforia, PTC, with a profound passion for Augmented Reality and Computer Vision. Demonstrating extensive expertise in KPI design, test frameworks, and cloud infrastructure, I am committed to delivering exceptional AR experiences on mobile platforms.',
  academicBackground:
    "My academic journey includes a Master's degree with honors in Computer Science and Engineering from Politecnico di Milano, where my research focused on CV applications.",
};

export const expertise = ['KPI design', 'Test frameworks', 'Cloud infrastructure'];

export const experience: Experience[] = [
  {
    role: 'Senior Software Developer',
    organization: 'Vuforia, PTC',
    period: '2023 — Current',
    description:
      'I have been deeply involved in developing WebAPIs hosted on AWS that are integral to the creation of Augmented Reality applications by our customers. At the same time, together with the benchmarking framework I contributed in several areas of our CI/CD pipeline.',
  },
  {
    role: 'Software Developer',
    organization: 'Vuforia, PTC',
    period: '2019 — 2023',
    description:
      'My primary responsibility was to expand a benchmarking test framework. This framework is instrumental in detecting regression and fine-tuning the computer vision algorithms developed by our team. This role required an extensive understanding of Python and robust software engineering skills to ensure the code was both readable and extensible.',
  },
  {
    role: 'CV-based collision avoidance system for motorbikes',
    organization: 'Politecnico di Milano and Piaggio',
    period: '2018',
    description:
      'Design and implementation of a CV-based collision avoidance system for motorbikes. The most innovative contribution was the adaptation of the car-oriented algorithms on motorbikes and a novel approach to identify stop lights regions and determine their status.',
  },
  {
    role: 'Mobility services project',
    organization: 'Technical University of Munich and BMW',
    period: '2017',
    description:
      'Design and implementation of FleetMe, a tool that optimizes management of corporate fleets by using car data.',
  },
];

export const education: Education[] = [
  {
    qualification: 'Master Degree in Software Engineering',
    institution: 'Politecnico di Milano',
    period: '2016 — 2018',
  },
  {
    qualification: 'Semester abroad',
    institution: 'Technical University Munich',
    period: '2017 — 2018',
  },
  {
    qualification: 'Bachelor Degree in Software Engineering',
    institution: 'Politecnico di Milano',
    period: '2013 — 2016',
  },
  {
    qualification: 'Liceo Scientifico - High School',
    institution: 'Istituto di Istruzione Superiore D. M. Turoldo, Zogno',
    period: '2008 — 2013',
  },
];

export const interests: Interest[] = [
  {
    title: 'Running',
    description:
      "Running has been a passion of mine for many years. Over time, I've participated in numerous races, starting with trail races and transitioning to road races. I've successfully completed six marathons, always striving to improve my performance and push my limits.",
    image: 'images/running.jpg',
  },
  {
    title: 'Clarinet musician',
    description:
      'I play the clarinet in a local band, where I enjoy contributing to our musical performances. Playing the clarinet allows me to express my creativity and connect with others through the power of music.',
    image: 'images/clarinet.jpg',
  },
  {
    title: 'Mountains',
    description:
      'I love spending time in the mountains, engaging in activities such as hiking, easy climbing, and skiing. These adventures allow me to connect with nature, challenge myself physically, and enjoy the beauty of the outdoors.',
    image: 'images/mountains.jpg',
  },
];
