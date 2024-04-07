import { ReactNode } from 'react';

export interface List {
    children:ReactNode
    className?:string,
    id?:string,
}

export interface ItemList {
    children:ReactNode
    key?:string
    className?:string,
    id?:string,
    href?:string
}