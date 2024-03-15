export interface basePageProps {
    page: JSX.ElementType;
    propsPage:{key:string, value:string}[];
    typePage:string;
    headerShow?:boolean;
    footerShow?:boolean;
}

export interface specificPageProps {
  propsPage:{key:string, value:string}[];
}
