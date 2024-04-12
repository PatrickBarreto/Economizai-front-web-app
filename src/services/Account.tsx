import { ApiConectionData } from "../config/Interfaces/ApiConection";
import { ApiConection } from "./ApiConection";

export async function createAccount(data:Object) {

    const requestBody = {
        name:data.name,
        phone:data.phone,
        email:data.email,
        password:data.password
    }
    
    const ApiConnectionData:ApiConectionData = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Access-Token":import.meta.env.VITE_ACCESS_TOKEN,
        },
        uri:"/accounts",
        body:JSON.stringify(requestBody)
    }
    
    const result:any = await ApiConection(ApiConnectionData);

    if(result.status === 400){
        return false;
    }

    return true;
}