import { productLink } from "../../../config/Interfaces/Links"
import { IoAddOutline } from "react-icons/io5";


const menu:productLink[] = [
  {
    icon: <IoAddOutline/>,
    label:"Categorias",
    link:"/categories",
    id:"categories"
  },
  {
    icon: <IoAddOutline/>,
    label:"Produtos",
    link:"/products",
    id:"products"
  },
  {
    icon: <IoAddOutline/>,
    label:"Marcas",
    link:"/brands",
    id:"brands"
  },
  {
    icon: <IoAddOutline/>,
    label:"Listas de Compra",
    link:"/shopping-list",
    id:"shopping-list"
  }
]

export default menu;