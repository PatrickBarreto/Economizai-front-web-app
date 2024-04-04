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
    id?: string,
    className?: string,
    value?: any,
    placeholder?: string,
    readonly?: boolean,
    required?: boolean,
    contentTag?: any
    hidden?: boolean
};

export interface Select {
        className: string, 
        id?: string,
    }

export interface SelectOption {
        value: string, 
        label: string, 
        disabled: boolean
}[]