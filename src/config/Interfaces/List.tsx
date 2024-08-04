export interface ListInterface {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export interface ItemList {
    children: React.ReactNode;
    className?: string;
    id?: string;
    actionOnClick?: () => void;
}