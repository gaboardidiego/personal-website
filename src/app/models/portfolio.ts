export interface Portfolio {
  name: string;
  monogram: string;
  role: string;
  currentPosition: string;
  location: string;
  email: string;
  linkedin: string;
  portrait: string;
  backdrop: string;
  cv: string;
  contactPrompt: string;
  introduction: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
  current?: boolean;
  logos?: Affiliation[];
}

export interface Education {
  qualification: string;
  institution: string;
  period: string;
  logo?: Affiliation;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface Affiliation {
  name: string;
  logo: string;
}

export interface Interest {
  title: string;
  description: string;
  image: string;
}
