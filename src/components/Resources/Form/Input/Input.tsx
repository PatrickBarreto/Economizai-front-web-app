import React, { useContext } from "react";
import { Inputs } from "../../../../config/Interfaces/FormData";
import { FormContext } from "../../../../config/contexts";

const validateInputData = (input:Inputs):Inputs => {
  
    const inputsAtributes:any = {};

    inputsAtributes.id          = (input.id != undefined || input.id != null || input.id != '') ? input.id : null;
    inputsAtributes.className   = (input.className != undefined || input.className != null || input.className != '') ? input.className : null;
    inputsAtributes.type        = (input.type != undefined || input.type != null || input.type != '') ? input.type : null;
    inputsAtributes.placeholder = (input.placeholder != undefined || input.placeholder != null || input.placeholder != '') ? input.placeholder : null;
    inputsAtributes.value       = (input.value != undefined || input.value != null || input.value != '') ? input.value : null;
    inputsAtributes.readOnly    = (input.readonly === true) ? "true" : null;
    inputsAtributes.required    = (input.required === true) ? "true" : null;
    inputsAtributes.checked     = (input.checked === true) ? "checked" : null;
    inputsAtributes.autoComplete = (input.autocomplete === false) ? 'off' : null


    return inputsAtributes;
}

const Input: React.FC<Inputs> = (input:Inputs) => {

    const inputsAtributes = validateInputData(input);
    const register = useContext(FormContext)
    
    return (
        <>
            <div className="divInputs">
                <label className={input.label?.className} htmlFor={input.name}>{input.label?.value}</label>
                <input 
                    {...inputsAtributes}
                    {...register(input.name)}
                />
            </div>
        </>
    )

}

export default Input;


