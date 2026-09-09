import type { StaticImageData } from 'next/image';
import html5 from '@/assets/icons/techs/html5.png';
import javascript from '@/assets/icons/techs/javascript.png';
import css from '@/assets/icons/techs/css.png';
import react from '@/assets/icons/techs/react.png';
import typescript from '@/assets/icons/techs/typescript.png';
import redux from '@/assets/icons/techs/redux.png';
import git from '@/assets/icons/techs/git.png';
import api from '@/assets/icons/techs/api.png';
import json from '@/assets/icons/techs/json.png';
import unitTesting from '@/assets/icons/techs/unit-testing.png';
import github from '@/assets/icons/techs/github.png';
import materialUi from '@/assets/icons/techs/material-ui.png';
import cloud from '@/assets/icons/techs/cloud.png';
import scrum from '@/assets/icons/techs/scrum.png';
import jira from '@/assets/icons/techs/jira.png';
import vsc from '@/assets/icons/techs/vsc.png';
import next from '@/assets/icons/techs/next.png';
import vite from '@/assets/icons/techs/vite.png';
import jest from '@/assets/icons/techs/jest.png';
import opencode from '@/assets/icons/techs/opencode.png';
import copilot from '@/assets/icons/techs/copilot.png';
import agentic from '@/assets/icons/techs/agentic.png';

export type Technology = {
  id: number;
  name: string;
  icon: StaticImageData;
};

const technologies: Technology[] = [
  { id: 1000, name: 'HTML5', icon: html5 },
  { id: 1001, name: 'CSS3', icon: css },
  { id: 1002, name: 'JavaScript', icon: javascript },
  { id: 1003, name: 'TypeScript', icon: typescript },
  { id: 1004, name: 'React', icon: react },
  { id: 1005, name: 'Next.js', icon: next },
  { id: 1006, name: 'Vite', icon: vite },
  { id: 1007, name: 'Redux', icon: redux },
  { id: 1008, name: 'Material UI', icon: materialUi },
  { id: 1009, name: 'REST API', icon: api },
  { id: 1010, name: 'JSON', icon: json },
  { id: 1011, name: 'Jest', icon: jest },
  { id: 1012, name: 'Unit Testing', icon: unitTesting },
  { id: 1013, name: 'Git', icon: git },
  { id: 1014, name: 'GitHub', icon: github },
  { id: 1015, name: 'Cloud', icon: cloud },
  { id: 1016, name: 'AI Agents', icon: agentic },
  { id: 1017, name: 'Opencode', icon: opencode },
  { id: 1018, name: 'GH Copilot', icon: copilot },
  { id: 1019, name: 'VS Code', icon: vsc },
  { id: 1020, name: 'Scrum', icon: scrum },
  { id: 1021, name: 'Jira', icon: jira },
];

export default technologies;
