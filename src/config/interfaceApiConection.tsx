export interface ApiConectionData {
    method:string;
    uri: string;
    headers: HeadersInit;
    body?: string;
    queryStrings?: string;
}