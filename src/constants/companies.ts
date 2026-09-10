import type { StaticImageData } from 'next/image';
import Thomson from '@/assets/companies/thomson.png';
import Softtek from '@/assets/companies/softtek.png';
import Globant from '@/assets/companies/globant.png';
import Baufest from '@/assets/companies/baufest.png';

export type CompanySummary = {
  id: number;
  img: StaticImageData;
  name: string;
  alt: string;
  role: string;
  period: string;
  summary: string;
};

const companies: CompanySummary[] = [
  {
    id: 2024,
    img: Softtek,
    name: 'softtek',
    alt: 'Softtek',
    role: 'Frontend Senior',
    period: '2024 - 2026',
    summary: 'Desarrollo de PREMO V2 para Techint con Next.js, React y Azure, optimización de rendimiento y creación de plugin premo para Outlook.',
  },
  {
    id: 2019,
    img: Baufest,
    name: 'baufest',
    alt: 'Baufest',
    role: 'Frontend Senior / Tutor',
    period: '2019 - 2024',
    summary: 'Líder técnico frontend en proyectos para Warner, ICBC y Banco Galicia con React y Angular. Tutor y referente técnico del equipo.',
  },
  {
    id: 2018,
    img: Globant,
    name: 'globant',
    alt: 'Globant',
    role: 'Frontend Semi Sr',
    period: '2018 - 2019',
    summary: 'Consultor para JP Morgan con React, Redux y TDD. Trabajo en equipos multiculturales.',
  },
  {
    id: 2016,
    img: Softtek,
    name: 'softtek',
    alt: 'Softtek',
    role: 'Frontend Semi Sr',
    period: '2016 - 2018',
    summary: 'Modernización del sitio web de OSDE y desarrollo de aplicación interna de estadísticas con Angular y Java.',
  },
  {
    id: 2013,
    img: Thomson,
    name: 'thomson',
    alt: 'Thomson',
    role: 'Desarrollador Web Junior',
    period: '2013 - 2016',
    summary: 'Desarrollo de aplicaciones web para La Ley Argentina y Westlaw UK. Lider de proyecto Westlaw India.',
  },
];

export { companies };
