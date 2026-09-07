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
};

const companies: CompanySummary[] = [
  {
    id: 2013,
    img: Thomson,
    name: 'thomson',
    alt: 'Thomson',
    role: 'Desarrollador Web Junior',
    period: '2013 - 2016',
  },
  {
    id: 2016,
    img: Softtek,
    name: 'softtek',
    alt: 'Softtek',
    role: 'Consultor Frontend',
    period: '2016 - 2018',
  },
  {
    id: 2018,
    img: Globant,
    name: 'globant',
    alt: 'Globant',
    role: 'Desarrollador Frontend Semi Sr',
    period: '2018 - 2019',
  },
  {
    id: 2019,
    img: Baufest,
    name: 'baufest',
    alt: 'Baufest',
    role: 'Frontend Senior / Referente técnico',
    period: '2019 - 2024',
  },
  {
    id: 2024,
    img: Softtek,
    name: 'softtek',
    alt: 'Softtek',
    role: 'Frontend Senior',
    period: '2024 - 2026',
  },
];

export { companies };
