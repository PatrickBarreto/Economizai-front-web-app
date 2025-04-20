import { ApiResponse } from '../config/Interfaces/ApiConection';
import { Categories } from '../config/Interfaces/SystemEntities';
import { callApi } from './ApiConection';



export async function create(data:any){

    const requestBody:Categories = {
        name:data.name,
        products:data.products,
        brands:data.brands
    }

    const response:ApiResponse = await callApi('POST', '/category', requestBody);

    if(response.status != 200){
        return false
    }

    return response;
}


export async function find() {
    const response:ApiResponse = await callApi('GET', '/categories');
    if(response.status === 404){
        return false;
    }
    
    return response
}


export async function findSpecific(id:number|string):Promise<any>{
    const response:ApiResponse = await callApi('GET', '/category/'+id);
    
    if(response.status === 404){
        return false;
    }

    return [response.body];
}

export async function update(data:any) {
    const requestBody:Categories = {
        name:data.name,
        products:data.products,
        brands:data.brands
    }

    const response:ApiResponse = await callApi('PUT', '/category/'+data.id, requestBody);

    return response;
}



export async function remove(id:any) {
    const response:ApiResponse = await callApi('DELETE', '/category/'+id);
    return response;
}



export async function handleSetSearchResultState(setSearchResult:Function){
    const findedBrands:any = await find();

    if(findedBrands.status != 200){
        return false
    }
    setSearchResult(findedBrands.body);
}
