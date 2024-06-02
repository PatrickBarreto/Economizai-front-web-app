import { ReactNode } from "react"

export interface Form {
    className: string, 
    submitCallback: Function
    id?: string,
    children: ReactNode
}

export interface Inputs { 
    label?: {
        className?:string,
        value?:string
    }
    name: string,
    type?: string,
    checked?: boolean,
    id?: string,
    className?: string,
    value?: any,
    placeholder?: string,
    readonly?: boolean,
    required?: boolean,
    contentTag?: any
    autocomplete?:boolean,
    hidden?: boolean
};

export interface Select {
    label?: {
        className?:string,
        value?:string
    }
    className: string, 
    id?: string,
    name: string,
    required?: boolean,
    multiple?: boolean,
    children: ReactNode
}

export interface SelectOption {
    label?: {
        className?:string,
        value?:string
    }
    value?: number, 
    disabled?: boolean
    children: string
}[]