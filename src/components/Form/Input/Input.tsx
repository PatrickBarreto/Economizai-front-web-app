import React, { useContext } from "react";
import { Inputs } from "../../../config/Interfaces/FormData";
import { FormContext } from "../../../config/Contexts/FormContext";


const validateInputData = (input:Inputs):Inputs => {

    const inputsOption:any = {};

    if(input.id != undefined || input.id != null || input.id != ''){
        inputsOption.id = input.id
    }

    if(input.className != undefined || input.className != null || input.className != ''){
        inputsOption.className = input.className
    }

    if(input.type != undefined || input.type != null || input.type != ''){
        inputsOption.type = input.type
    }
  
    if(input.placeholder != undefined || input.placeholder != null || input.placeholder != ''){
        inputsOption.placeholder = input.placeholder;
    }

    if(input.value != undefined || input.value != null || input.value != ''){
        inputsOption.value = input.value;
    }
 
    if(input.readonly === true){
        inputsOption.readonly = true;
    }

    if(input.required === true){
        inputsOption.required = true;
    }

    return inputsOption;
}

const Input: React.FC<Inputs> = (input:Inputs) => {

    const inputsOption = validateInputData(input);

    const register = useContext(FormContext)
    
    return (
        <>
            <div className="divInputs">
                <label className={input.label?.className} htmlFor={input.name}>{input.label?.value}</label>
                <input 
                    {...inputsOption}
                    {...register(input.name)}
                />
            </div>
        </>
    )

}

export default Input;