import type { StaticImageData } from 'next/image';

export type ExperienceLink = {
  id: number;
  label: string;
  link: string;
};

export type CompanyExperience = {
  id: number;
  name: string;
  img: StaticImageData;
  description: string;
  myExperience: string[];
  experienceLinks: ExperienceLink[];
  technologies: string[];
  projects?: string[];
  workedTime: {
    from: string;
    to: string;
  };
};
