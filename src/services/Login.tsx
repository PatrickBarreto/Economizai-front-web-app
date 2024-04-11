import { ApiConection } from './ApiConection';
import { ApiConectionData } from '../config/Interfaces/ApiConection';

export async function tryLogin(formData:any) {

    const requestBody = {
      email: formData.email,
      password: formData.password
    }

    const apiData:ApiConectionData = {
      method:'POST',
      uri:'/login',
      headers:{
        "Content-Type":"application/json",
        "Access-Token":import.meta.env.VITE_ACCESS_TOKEN
      },
      body:JSON.stringify(requestBody)
    }

    try {
      const responseApi = await ApiConection(apiData);

      if(responseApi.body.success == true){
        localStorage.setItem('Authorization',responseApi.headers.get('Authorization') ?? '');
        return true;
      }else{
        console.error('login refused');
      }

    } catch( error ) {
      console.error('Error calling ApiConnection:', error);
    }

}