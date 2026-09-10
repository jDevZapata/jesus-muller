import Thomson from '@/assets/companies/thomson.png';
import Softtek from '@/assets/companies/softtek.png';
import Globant from '@/assets/companies/globant.png';
import Baufest from '@/assets/companies/baufest.png';
import type { CompanyExperience } from '@/types/portfolio';

const details: CompanyExperience[] = [
  {
    id: 2024,
    name: 'Softtek',
    img: Softtek,
    summary: 'Desarrollo de aplicaciones empresariales con React y servicios cloud en Azure para el sector industrial.',
    myExperience: [
      {
        subtitle: 'PREMO V2 — Plataforma de Techint',
        description: 'Consultor para Techint, una empresa de importación de materiales industriales, donde formé parte del equipo de PREMO para mejorar la experiencia de usuario del sitio web, optimizar su rendimiento e implementar nuevas funcionalidades y requerimientos solicitados por el cliente.',
      },
      {
        subtitle: 'Plugin de Outlook para Techint',
        description: 'Desarrollo de un plugin integrado con el ecosistema de la aplicación web para agilizar la generación de invitaciones a cotizar para los proveedores y actualizar su estado sin necesidad de salir de Outlook.',
        highlights: ['Integración en tiempo real con la web app', 'Reducción de pasos manuales para proveedores'],
      },
    ],
    technologies: [
      'HTML5', 'CSS3', 'React', 'JavaScript', 'TypeScript', 'Vite', 'Axios', 'MUI', 'Azure', 'yo-office', 'Recoil', 'Git', 'Github', 'Github Copilot', 'Frida', 'Scrum', 'Kanban', 'Jira',
    ],
    projects: ['Premo V2'],
    workedTime: { from: '2024', to: '2026' },
  },
  {
    id: 2019,
    name: 'Baufest',
    img: Baufest,
    summary: 'Desarrollo de aplicaciones bancarias y certificados digitales con Angular y React en equipos multiculturales.',
    myExperience: [
      {
        subtitle: 'Warner — Apps de gestión publicitaria',
        description: 'Desarrollo de aplicaciones web internas para la gestión de contratos publicitarios dentro de programas de televisión pertenecientes a la cadena, como ESPN, Cartoon Network, Nickelodeon, entre otros.',
        highlights: ['Gestión de contratos de publicidad', 'Especificaciones de visualización publicitaria'],
      },
      {
        subtitle: 'ICBC — Banca digital',
        description: 'Contribución al desarrollo de varias aplicaciones, incluyendo el Legajo Digital para los socios del banco y una aplicación móvil híbrida llamada Préstamos Prendarios para concesionarios asociados al banco.',
        highlights: ['Legajo Digital para socios', 'App móvil híbrida para concesionarios'],
      },
      {
        subtitle: 'Bit Certs — Certificados blockchain',
        description: 'Certificados digitales verificables en la blockchain de Ethereum, desarrollados con React siguiendo las mejores prácticas de desarrollo.',
        highlights: ['Blockchain Ethereum', 'Verificación de certificados'],
      },
    ],
    technologies: [
      'HTML5', 'CSS3', 'Angular', 'React', 'JavaScript', 'TypeScript', 'MUI', 'Material Design', 'ICBC CL', 'Redux', 'Formik', 'Jest', 'React Testing Library', 'Karma', 'Jasmine', 'CRA', 'RxJS', 'i18n', 'Axios', 'Git', 'Github', 'Azure', 'Scrum', 'Jira', 'Miro'
    ],
    projects: ['Warner', 'ICBC Legajo Digital', 'ICBC Prendarios', 'Nera', 'Bit certs'],
    workedTime: { from: '2019', to: '2024' },
  },
  {
    id: 2018,
    name: 'Globant',
    img: Globant,
    summary: 'Desarrollo de aplicaciones bancarias internas con React, Redux y TDD para JP Morgan.',
    myExperience: [
      {
        subtitle: 'JP Morgan — Proyectos internos',
        description: 'Construcción de web app interna de tracking de relacionamiento de bancos asociados asociados a la firma. Implementación de las mejores prácticas en desarrollo, como TDD, Coverage mayor al 80%, Redux, Pair programming, Peer review, CI/CD y despliegues automáticos en la nube.',
        highlights: ['TDD y testing coverage', 'CI/CD automatizado', 'Trabajo en equipos multiculturales (India, Francia, Suiza)'],
      },
    ],
    technologies: [
      'HTML5', 'CSS3', 'Styled Components', 'React', 'JavaScript', 'TypeScript', 'JP Morgan CL', 'Redux', 'Jest', 'Enzyme', 'Webpack', 'TDD', 'Testing coverage', 'Git', 'Bitbucket', 'Scrum', 'Jira'
    ],
    workedTime: { from: '2018', to: '2019' },
  },
  {
    id: 2016,
    name: 'Softtek',
    img: Softtek,
    summary: 'Modernización de plataforma web y desarrollo de dashboards analíticos para el sector salud.',
    myExperience: [
      {
        subtitle: 'OSDE — Modernización web',
        description: 'Consultor para OSDE, una empresa de servicios de salud, donde formé parte de equipos para proyectos de modernización del sitio web y la implementación de Google Analytics en toda la plataforma.',
      },
      {
        subtitle: 'Dashboard de analíticas',
        description: 'Desarrollo de una aplicación web interna para visualizar estadísticas de las interacciones de los usuarios con las secciones de la web, proporcionando análisis en forma de gráficos que facilitaron la toma de decisiones por parte del equipo directivo.',
        highlights: ['Diseño de servicios web SOAP', 'Visualización de datos con gráficos interactivos'],
      },
    ],
    technologies: [
      'HTML5', 'CSS3', 'Angular', 'JavaScript', 'TypeScript', 'jQuery', 'Java', 'Hibernate', 'SQL', 'Tortoise SVN', 'Git', 'Postman', 'WinSCP', 'Scrum', 'Trello',
    ],
    projects: ['OSDE'],
    workedTime: { from: '2016', to: '2018' },
  },
  {
    id: 2013,
    name: 'Thomson Reuters',
    img: Thomson,
    summary: 'Desarrollo de aplicaciones legales digitales y primer rol profesional en el mundo del desarrollo.',
    myExperience: [
      {
        subtitle: 'La Ley — Plataforma legal',
        description: 'Desarrollo de aplicaciones web para búsqueda rápida de jurisprudencia; esta fue una aplicación específicamente dirigida a abogados. Aquí, aprendí rápidamente la importancia del trabajo en equipo en la industria del desarrollo.',
        highlights: ['Ascenso a Semi Senior en 6 meses'],
      },
      {
        subtitle: 'Westlaw India — Liderazgo de proyecto',
        description: 'Primera experiencia liderando un proyecto pequeño, donde adquirí una valiosa experiencia al interactuar directamente con el cliente y contribuir en la elaboración y refinamiento de los requisitos.',
        highlights: ['Interacción directa con cliente internacional', 'Elaboración de requisitos'],
      },
    ],
    technologies: [
      'HTML4', 'XHTML', 'CSS', 'JavaScript', 'jQuery', 'Apache Velocity', 'XML', 'XSLT', 'Novus', 'Ajax', 'TFS', 'Scrum', 'Jira', 'Jenkins',
    ],
    projects: ['La Ley (Argentina, Brasil, Uruguay, Chile, Perú)', 'Westlaw UK', 'Westlaw India'],
    workedTime: { from: '2013', to: '2016' },
  },
];

export default details;
