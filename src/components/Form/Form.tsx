import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form as FormInterface } from '../../config/interfaces/FormData';
import './Form.css';
import { FormContext } from '../../config/contexts';


const Form:React.FC<FormInterface> = ({ children, className, submitCallback, id = '' }) => {
    const {register, handleSubmit} = useForm();

    const executeSubmitCallback = (data:any) =>{
        return submitCallback(data);
    }
    
    return (
        <div>
            <form className={className} id={id} onSubmit={handleSubmit(executeSubmitCallback)}>
                <FormContext.Provider value={register}>
                    {children}
                </FormContext.Provider>
            </form>
        </div>
    );
}

export default Form;