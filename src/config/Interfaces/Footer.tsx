import { ReactNode } from "react";

export default interface Footer {
    children? : ReactNode,
    image?: {
        path:string;
        alt:string;
    }
}