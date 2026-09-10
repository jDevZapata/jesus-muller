import type { StaticImageData } from 'next/image';

export type ExperienceLink = {
  id: number;
  label: string;
  link: string;
};

export type ExperienceEntry = {
  subtitle: string;
  description: string;
  highlights?: string[];
};

export type CompanyExperience = {
  id: number;
  name: string;
  img: StaticImageData;
  summary: string;
  myExperience: ExperienceEntry[];
  experienceLinks: ExperienceLink[];
  technologies: string[];
  projects?: string[];
  workedTime: {
    from: string;
    to: string;
  };
};
