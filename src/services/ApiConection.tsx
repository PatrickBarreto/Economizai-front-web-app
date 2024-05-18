import { ApiConectionData, ApiRetun } from '../config/Interfaces/ApiConection';


export async function ApiConection(props:ApiConectionData) {

    const queryString:string = (props.queryStrings !== undefined) ? '?'+props.queryStrings : '';

    try{
        const response = await fetch(import.meta.env.VITE_BASE_API+props.uri+queryString, props);
        
        if(!response.ok) {
            validadeHttpErrorStatus(response);
        }

        const body = await response.json();

        const result:ApiRetun = {
                headers: response.headers,
                body: body,
                status: response.status
            };
    
        return result;

    } catch (error) {
        throw new Error("HTTP error! status:"+error);
    }
}


export async function callApi(method:string, uri:string, requestBody:Object = {}){

    const apiData:ApiConectionData = {
        method: method,
        uri: uri,
        headers:{
            "Content-Type":"application/json",
            "Access-Token":import.meta.env.VITE_ACCESS_TOKEN,
            "Authorization":localStorage.getItem('Authorization') ?? ''
        },
        body: JSON.stringify(requestBody)
    }
        
    if(method == 'GET' || method == 'HEAD'){
        delete apiData.body;
    }

    const result:ApiRetun = await ApiConection(apiData);


    return result;
}



function validadeHttpErrorStatus(response:Response){
    switch(response.status){
        case 404: return {status:response.status};
        case 400: return {status:response.status};
    }
    throw new Error("HTTP error! status:"+response.status);
}