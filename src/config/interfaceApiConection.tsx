export interface ApiConectionData {
    method:string;
    uri: string;
    headers: HeadersInit;
    body?: string;
    queryStrings?: string;
}

export interface ApiRetun {
    headers:Headers,
    body:any,
    status:number
}