export interface ApiRequest {
    method:string;
    uri: string;
    headers: HeadersInit;
    body?: string;
    queryStrings?: string;
}

export interface ApiResponse {
    headers:Headers,
    body:any,
    status:number
}