import { ReactNode } from "react";

export interface Header {
    children? : ReactNode,
    contexHeaderData? : Array<any>
}

export interface Footer {
    children? : ReactNode,
    contexHeaderData? : Array<any>
}

export interface Main {
  children: ReactNode
  contexMainData?: Array<any>
}
