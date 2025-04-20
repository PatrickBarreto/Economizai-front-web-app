import { ApiRequest } from '../config/Interfaces/ApiConection';
import { Product } from '../config/Interfaces/SystemEntities';
import { ApiConection } from './ApiConection';

export async function createProduct(data:any) {

    const requestBody = {
        name: data.name,
        type: data.type,
        volume: data.volume,
        unit_mensure: data.unitMensure
    }

    const apiData:ApiRequest = {
        method:'POST',
        uri:'/product',
        headers:{
            "Content-Type":"application/json",
            "Access-Token":import.meta.env.VITE_ACCESS_TOKEN,
            "Authorization":localStorage.getItem('Authorization') ?? ''
        },
        body: JSON.stringify(requestBody)
    }

    const result:any = await ApiConection(apiData);

    return result;
}


export async function findProdutcs() {
    const apiData:ApiRequest = {
        method:'GET',
        uri:'/products',
        headers:{
            "Content-Type":"application/json",
            "Access-Token":import.meta.env.VITE_ACCESS_TOKEN,
            "Authorization":localStorage.getItem('Authorization') ?? ''
          }
    }
    
    
    const result:any = await ApiConection(apiData)

    if(result.status === 404){
        return false;
    }
    
    return result
}


export async function findSpecificProduct(id:number|string):Promise<any>{
    const apiData:ApiRequest = {
        method:'GET',
        uri:'/product/'+id,
        headers:{
            "Content-Type":"application/json",
            "Access-Token":import.meta.env.VITE_ACCESS_TOKEN,
            "Authorization":localStorage.getItem('Authorization') ?? ''
          }
    }

    const result:any = await ApiConection(apiData);
    
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
        volume: data.volume,
        unit_mensure: data.unitMensure
    }

    const apiData:ApiRequest = {
        method:'PUT',
        uri:'/product/'+requestBody.id,
        headers:{
            "Content-Type":"application/json",
            "Access-Token":import.meta.env.VITE_ACCESS_TOKEN,
            "Authorization":localStorage.getItem('Authorization') ?? ''
        },
        body:JSON.stringify(requestBody)
    }

    const result:any = await ApiConection(apiData);

    return result;
}



export async function deleteProduct(id:any) {
    const apiData:ApiRequest = {
        method:'DELETE',
        uri:'/product/'+id,
        headers:{
            "Content-Type":"application/json",
            "Access-Token":import.meta.env.VITE_ACCESS_TOKEN,
            "Authorization":localStorage.getItem('Authorization') ?? ''
        }
    }
    
    const result:any = await ApiConection(apiData);

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




