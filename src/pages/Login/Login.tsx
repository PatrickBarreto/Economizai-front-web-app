import React, { useEffect, useState } from 'react';
import './Login.css'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ApiConection } from '../../hooks/ApiConection';
import { useNavigate } from 'react-router-dom';
import { specificPageProps } from '../../config/interfacePageProps';
import { ApiConectionData } from '../../config/interfaceApiConection';


const Login:React.FC<specificPageProps> = (props) => {  
  
  const navigate = useNavigate();
  const {register, handleSubmit } = useForm();
  const [formData, setFormData] = useState('');

  
  useEffect(()=>{
    async function tryLogin() {
      const apiData:ApiConectionData = {
        method:'POST',
        uri:'/login',
        headers:{
          "Content-Type":"application/json",
          "Access-Token":import.meta.env.VITE_ACCESS_TOKEN
        },
        body:formData
      }

      try {
        const responseApi = await ApiConection(apiData);
        if(responseApi[1].success == true){
          localStorage.setItem('Authorization',responseApi[0].get('Authorization'));
          navigate('/home');
        }else{
          console.error('login refused');
        }

      } catch( error ) {
        console.error('Error calling ApiConnection:', error);
      }

    }
    if (formData.trim() !== '') {
      tryLogin();
    }
  },[formData])
  

  const catchData = (data:any) => {
    setFormData(JSON.stringify(data, null, 2));
  }

  return (  
  <div className="loginPage">
    <div className="divTitle">
      <h1>{props.propsPage[0].value}</h1>
    </div>
    <form id="formLogin" onSubmit={handleSubmit(catchData)}>
      {/* <div>
        <label htmlFor='phone'> Phone </label>
        <input 
          id="phone" 
          type="number"
          value=""
          {...register('phone')}
        />
      </div> */}
      <div className="divInput">
        <label htmlFor='email'> Email </label>
        <input 
          id="email" 
          type="email"
          //value="3co2@gmail.com"
          {...register('email')}
        />
      </div>
      <div className="divInput">
        <label htmlFor='password'> Senha </label>
        <input 
          id="password" 
          type="password"
          //value="123"
          {...register('password')}
        />
      </div>
      <div className="divSuportLinks">
        <p>Lembre-me</p>
        <p>Esqueci minha senha</p>
      </div>
      <div className="divButton">
        <button>Entrar</button>
      </div>
    </form>
  </div>
  
  );
};

export default Login;
