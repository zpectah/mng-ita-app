import config from '../../config';

export const mainMenuItems = [
  {
    name: 'home',
    label: 'Domů',
    path: config.routes.home.path,
  },
  {
    name: 'cognates-ff',
    label: 'Cognates False friends',
    path: config.routes.cognatesFF.path,
  },
  {
    name: 'cognates-1000',
    label: 'Cognates 1000 words',
    path: config.routes.cognates1000.path,
  },
  {
    name: 'similarities',
    label: 'Similarities',
    path: config.routes.similarities.path,
  },
  {
    name: 'memo',
    label: 'Memo',
    path: config.routes.memo.path,
  },
];
