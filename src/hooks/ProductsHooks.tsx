import { render } from 'react-dom';
import { ApiConectionData } from '../config/interfaceApiConection';
import { ApiConection } from '../hooks/ApiConection';




export async function createProduct(data:any) {

    const bodyData = {
        name: data.name,
        type: data.type,
        volume: data.volume,
        unit_mensure: data.unitMensure
    }

    const apiData:ApiConectionData = {
        method:'POST',
        uri:'/product',
        headers:{
            "Content-Type":"application/json",
            "Access-Token":import.meta.env.VITE_ACCESS_TOKEN,
            "Authorization":localStorage.getItem('Authorization') ?? ''
        },
        body: JSON.stringify(bodyData)
    }

    const result:any = await ApiConection(apiData);

    return result;
}



export async function findProdutcs() {
    const apiData:ApiConectionData = {
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


export async function findSpecificProduct(searchValue:string) {
    const apiData:ApiConectionData = {
        method:'GET',
        uri:'/product/'+searchValue,
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


    const bodyData = {
        id: data.id,
        name: data.name,
        type: data.type,
        volume: data.volume,
        unit_mensure: data.unitMensure
    }

    const apiData:ApiConectionData = {
        method:'PUT',
        uri:'/product/'+bodyData.id,
        headers:{
            "Content-Type":"application/json",
            "Access-Token":import.meta.env.VITE_ACCESS_TOKEN,
            "Authorization":localStorage.getItem('Authorization') ?? ''
        },
        body:JSON.stringify(bodyData)
    }

    const result:any = await ApiConection(apiData);

    return result;
}




export async function deleteProduct(id:any) {
    const apiData:ApiConectionData = {
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


