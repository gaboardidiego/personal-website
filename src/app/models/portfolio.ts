export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface Education {
  qualification: string;
  institution: string;
  period: string;
}

export interface Highlight {
  value: string;
  label: string;
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
