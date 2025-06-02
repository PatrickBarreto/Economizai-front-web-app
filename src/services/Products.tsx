import { ApiResponse } from '../config/Interfaces/ApiConection';
import { Product } from '../config/Interfaces/SystemEntities';
import { callApi } from './ApiConection';

export async function createProduct(data:any) {

    const requestBody = {
        name: data.name,
        type: data.type,
        categories: data.categories
    }

    const result:ApiResponse = await callApi('POST', '/product', requestBody);

    return result;
}


export async function findProdutcs() {

    const result:ApiResponse = await callApi('GET', '/products')    

    if(result.status === 404){
        return false;
    }
    
    return result
}


export async function findSpecificProduct(id:number|string):Promise<any>{

    const result:ApiResponse = await callApi('GET', '/product/'+id)    
    
    if(result.status === 404){
        return false;
    }

    return [result.body];
}


export async function updateProduct(data:any) {


    const requestBody:Product = {
        id: data.id,
        name: data.name,
        type: data.type,
        categories: data.categories
    }

    const result:ApiResponse = await callApi('PUT', '/product/'+requestBody.id, requestBody);


    return result;
}



export async function deleteProduct(id:any) {

  const result:ApiResponse = await callApi('DELETE', '/product/'+id)    
  return result;
}



export async function handleSetSearchResultState(setSearchResult:Function){
    const findedProducts:any = await findProdutcs();
    if(findedProducts.status != 200){
        return false
    }
    setSearchResult(findedProducts.body);
}


export async function handleSetSpecificProduct(setSearchResult:Function, id:string) {
  const findedProducts:Product[] = await findSpecificProduct(id);
  setSearchResult(findedProducts[0]);
}




