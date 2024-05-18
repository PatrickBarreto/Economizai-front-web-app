import { ApiRetun } from '../config/Interfaces/ApiConection';
import { Categories } from '../config/Interfaces/SystemEntities';
import { callApi } from './ApiConection';



export async function create(data:any){

    const requestBody:Categories = {
        name:data.name
    }

    const response:ApiRetun = await callApi('POST', '/category', requestBody);

    if(response.status != 200){
        return false
    }

    return response;
}


export async function find() {
    const response:ApiRetun = await callApi('GET', '/categories');
    if(response.status === 404){
        return false;
    }
    
    return response
}


export async function findSpecific(id:number|string):Promise<any>{
    const response:ApiRetun = await callApi('GET', '/category/'+id);
    
    if(response.status === 404){
        return false;
    }

    return [response.body];
}


export async function update(data:any) {

    const requestBody:Categories = {
        name:data.name
    }

    const response:ApiRetun = await callApi('PUT', '/category/'+data.id, requestBody);

    return response;
}



export async function remove(id:any) {
    const response:ApiRetun = await callApi('DELETE', '/category/'+id);
    return response;
}



export async function handleSetSearchResultState(setSearchResult:Function){
    const findedBrands:any = await find();

    if(findedBrands.status != 200){
        return false
    }
    setSearchResult(findedBrands.body);
}
