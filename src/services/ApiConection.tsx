import { ApiRequest, ApiResponse } from '../config/Interfaces/ApiConection';


export async function ApiConection(props:ApiRequest) {

    const queryString:string = (props.queryStrings !== undefined) ? '?'+props.queryStrings : '';

    try{
        const response = await fetch(window.env.VITE_BASE_API+props.uri+queryString, props);
        
        if(!response.ok) {
            validadeHttpErrorStatus(response);
        }

        const result:ApiResponse = {
                headers: response.headers,
                body: await response.json(),
                status: response.status
            };
    
        return result;

    } catch (error) {
        throw new Error("HTTP error! status:"+error);
    }
}

export async function callApi(method:string, uri:string, requestBody:Object = {}):Promise<ApiResponse>{

    const apiData:ApiRequest = {
        method: method,
        uri: uri,
        headers:{
            "Content-Type": "application/json",
            "Access-Token": window.env.VITE_PUBLIC_KEY,
            "Authorization": localStorage.getItem('Authorization') ?? ''
        },
        body: (method != 'GET' && method != 'HEAD') ? JSON.stringify(requestBody) : undefined
    }

    return ApiConection(apiData);
}

function validadeHttpErrorStatus(response:Response){
    switch(response.status){
        case 404: return {status:response.status};
        case 400: return {status:response.status};
    }
    throw new Error("HTTP error! status:"+response.status);
}