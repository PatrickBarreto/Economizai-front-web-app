import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form as FormInterface } from '../../../config/Interfaces/FormData';
import './Form.css';
import { FormContext } from '../../../config/contexts';


const Form:React.FC<FormInterface> = ({ children, className, submitCallback, id = '' , zodObject}) => {

    type zodSchema = z.infer<typeof zodObject>;

    const {register, handleSubmit} = useForm<zodSchema>({
        resolver: zodResolver(zodObject)
    });

    const executeSubmitCallback = (data:zodSchema) =>{
        debugger;
        return submitCallback(data);
    }
    
    return (
        <form className={className} id={id} onSubmit={handleSubmit(executeSubmitCallback)}>
            <FormContext.Provider value={register}>
                {children}
            </FormContext.Provider>
        </form>
    );
}

export default Form;