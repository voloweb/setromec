export interface NavigationType {
  name: string;
  href: string;
}

export const navigation: NavigationType[] = [
  { name: 'Sobre', href: '/sobre' },
  { name: 'Áreas de atuação', href: '/areas-atuacao' },
  { name: 'Clientes', href: '/clientes' },
  { name: 'Contato', href: '/contato' },
];
