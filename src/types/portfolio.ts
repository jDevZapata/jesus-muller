import type { StaticImageData } from 'next/image';

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
  technologies: string[];
  projects?: string[];
  workedTime: {
    from: string;
    to: string;
  };
};
