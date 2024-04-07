import { createContext } from "react"

//Contexts about form
export const FormContext        = createContext<any>(null)

//Context about Base Page
export const BaseContext        = createContext([[{}]]);
export const BaseContextPage    = createContext([{}]);