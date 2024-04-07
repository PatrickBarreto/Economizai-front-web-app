import { createContext } from "react"

//Contexts about form
export const FormContext    = createContext<any>(null)

//Context about Structure Componentes
export const HeaderContext  = createContext([[{}]]);
export const MainContext    = createContext([{}]);
export const FooterContext  = createContext([[{}]]);