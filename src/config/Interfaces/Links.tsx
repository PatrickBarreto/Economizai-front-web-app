import { ReactElement } from "react";

interface Link {
    icon?: ReactElement
    label: string;
    link: string;
    id: string;
};

export type menuLink = Link
export type productLink = Link