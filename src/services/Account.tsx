import { ApiResponse } from "../config/Interfaces/ApiConection";
import { UserAccount } from "../config/Interfaces/SystemEntities";
import { callApi } from "./ApiConection";

export async function createAccount(data:UserAccount):Promise<boolean> {

    const requestBody:UserAccount = {
        name:data.name,
        phone:data.phone,
        email:data.email,
        password:data.password
    }
   
    const result:ApiResponse = await callApi("POST", "/accounts", requestBody);

    if(result.status === 400){
        return false;
    }

    return true;
}