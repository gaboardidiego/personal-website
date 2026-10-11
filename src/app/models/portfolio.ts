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
  logos?: Logo[];
  period: string;
  description: string;
  current?: boolean;
  skills?: string[];
}

export interface Logo {
  name: string;
  logo: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface Education {
  qualification: string;
  institution: string;
  logo?: Logo;
  period: string;
}

export interface Interest {
  title: string;
  description: string;
  image: string;
}
