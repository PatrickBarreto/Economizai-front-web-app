import { ReactNode } from "react";

export default interface Header {
    children? : ReactNode,
    contexHeaderData? : Array<any>
}