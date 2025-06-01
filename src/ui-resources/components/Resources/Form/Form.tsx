import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form as FormInterface } from '../../../../config/Interfaces/FormData';
import { FormContext } from '../../../../config/contexts';


const Form:React.FC<FormInterface> = ({ children, className, submitCallback, id = '' , zodObject, defaultValues}) => {

  type zodSchema = z.infer<typeof zodObject>;

  const {register, handleSubmit, formState: { errors }, reset} = useForm<zodSchema>({
      resolver: zodResolver(zodObject),
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