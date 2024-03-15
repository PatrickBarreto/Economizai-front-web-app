import { render } from 'react-dom';
import { ApiConectionData } from '../config/interfaceApiConection';
import { ApiConection } from '../hooks/ApiConection';



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

    let result:any = await ApiConection(apiData)
    
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
    let result:any = await ApiConection(apiData);

    return [result];

        
}

