import { ApiResponse } from '../config/Interfaces/ApiConection';
import { ShoppingList } from '../config/Interfaces/SystemEntities';
import { callApi } from './ApiConection';



export async function create(data:any){

    const requestBody:ShoppingList = {
        name:data.name,
        type:data.type,
        executions:[]
    }

    const response:ApiResponse = await callApi('POST', '/shopping-list/create', requestBody);

    if(response.status != 200){
        return false
    }

    return response;
}


export async function find() {
    const response:ApiResponse = await callApi('GET', '/shopping-list');
    if(response.status === 404){
        return false;
    }
    
    return response
}


export async function findSpecific(id:number|string):Promise<any>{
    const response:ApiResponse = await callApi('GET', '/shopping-list/'+id);
    
    if(response.status === 404){
        return false;
    }

    return [response.body];
}


export async function update(data:any) {

    const requestBody:ShoppingList = {
        id:data.id,
        name:data.name,
        type:data.type,
        executions:data.executions
    }

    const response:ApiResponse = await callApi('PUT', '/shopping-list/'+data.id, requestBody);

    return response;
}



export async function remove(id:any) {
    const response:ApiResponse = await callApi('DELETE', '/shopping-list/'+id);
    return response;
}



export async function handleSetSearchResultState(setSearchResult:Function){
    const findedBrands:any = await find();

    if(findedBrands.status != 200){
        return false
    }
    setSearchResult(findedBrands.body);
}


export async function handleSetSpecificShoppingList(setSearchResult:Function, id:string) {
  const findedShoppingList:ShoppingList[] = await findSpecific(id);
  setSearchResult(findedShoppingList[0]);
}

