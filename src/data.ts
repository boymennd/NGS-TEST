export const menu = [
  {
    id: 1,
    title: 'Home',
    parentId: null,
    url: '/home',
  },
  {
    id: 2,
    title: 'Shop',
    parentId: null,
    url: '/shop',
  },
  {
    id: 3,
    title: 'Settings',
    parentId: null,
    url: '/settings',
  },
  {
    id: 4,
    title: 'Volumn',
    parentId: 3,
    url: '/settings/volumn',
  },
  {
    id: 5,
    title: 'Theme',
    parentId: 3,
    url: '/settings/theme',
  },
  {
    id: 6,
    title: 'Dark',
    parentId: 5,
    url: '/settings/theme/dark',
  },
  {
    id: 7,
    title: 'Light',
    parentId: 5,
    url: '/settings/theme/light',
  },
];
