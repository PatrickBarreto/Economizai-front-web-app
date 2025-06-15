import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form as FormInterface } from '../../../../config/Interfaces/FormData';
import { FormContext } from '../../../../config/contexts';


const Form:React.FC<FormInterface> = ({ children, className, submitCallback, id = '' , zodObject, defaultValues}) => {

  type zodSchema = z.infer<typeof zodObject>;

//RESOLVER ISSO DE FORMA MELHOR, SEM ATIRBUIR ESSA DEPENDÊNCIA
const validateZodResolverData = (data: any, context: any, options: any) => {
  if(typeof data.categories == "boolean"){
    data.categories = []
  }
  if(typeof data.products == "boolean"){
    data.categories = []
  }
  return zodResolver(zodObject)(data, context, options);
}

  const {register, handleSubmit, formState: { errors }, reset} = useForm<zodSchema>({
    resolver: validateZodResolverData,
  });

  const executeSubmitCallback = (data:zodSchema) =>{
      return submitCallback(data);
  }

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]); 

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      for (const [key, value] of Object.entries(errors)) {
        console.warn(`Erro no campo ${key}:`, value?.message);
      }
    }
  }, [errors]);

  return (
    <form className={className} id={id} onSubmit={handleSubmit(executeSubmitCallback)}>
        <FormContext.Provider value={{register}}>
              {children}
          </FormContext.Provider>
      </form>
  );
}

export default Form;