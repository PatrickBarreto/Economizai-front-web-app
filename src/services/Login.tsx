import { callApi } from './ApiConection';

export async function tryLogin(formData:any) {

    const requestBody: = {
      email: formData.email,
      password: formData.password
    }

    const responseApi = await callApi('POST', '/login', requestBody);

    if(responseApi.body.success == true){
      localStorage.setItem('Authorization',responseApi.headers.get('Authorization') ?? '');
      return true;
    }else{
      alert('login refused')
    }

}