interface menuItem {
    label: string;
    link: string;
  }

const menuLinksLoged:menuItem[] = [
    {label: "home", link: "/home"},
    {label: "servicos", link: "/servicos"}
];

const menuLinks:menuItem[] = [
  {label: "Login", link: "/login"},
  {label: "Criar conta", link: "/create-account"}
];

export {menuLinks, menuLinksLoged};