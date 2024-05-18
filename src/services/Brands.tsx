import { ApiRetun } from '../config/Interfaces/ApiConection';
import { Brand } from '../config/Interfaces/SystemEntities';
import { callApi } from './ApiConection';


export async function createBrand(data:any) {

    const requestBody = {
        name: data.name,
        type: data.type
    }

    const response:ApiRetun = await callApi('POST', '/brands/create', requestBody);

    return response;
}


export async function findBrands() {
    const response:ApiRetun = await callApi('GET', '/brands');
    if(response.status === 404){
        return false;
    }
    
    return response
}


export async function findSpecificBrand(id:number|string):Promise<any>{
    const response:ApiRetun = await callApi('GET', '/brands/'+id);
    
    if(response.status === 404){
        return false;
    }

    return [response.body];
}


export async function updateBrand(data:any) {


    const requestBody:Brand = {
        id: data.id,
        name: data.name,
        type: data.type
    }

    const response:ApiRetun = await callApi('PUT', '/brands/'+data.id, requestBody);

    return response;
}



export async function deleteBrand(id:any) {
    const response:ApiRetun = await callApi('DELETE', '/brands/'+id);
    return response;
}



export async function handleSetSearchResultState(setSearchResult:Function){
    const findedBrands:any = await findBrands();

    if(findedBrands.status != 200){
        return false
    }
    setSearchResult(findedBrands.body);
}



