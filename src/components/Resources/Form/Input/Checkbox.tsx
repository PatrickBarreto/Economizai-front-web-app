import React, { useContext, useState } from "react";
import { FormContext } from "../../../../config/contexts";

const validateInputData:any = (input:any) => {
  
    const inputsAtributes:any = {};

    inputsAtributes.id          = (input.id != undefined || input.id != null || input.id != '') ? input.id : null;
    inputsAtributes.className   = (input.className != undefined || input.className != null || input.className != '') ? input.className : null;
    inputsAtributes.value       = (input.value != undefined || input.value != null || input.value != '') ? input.value : null;
    inputsAtributes.required    = (input.required === true) ? "true" : null;
    inputsAtributes.disabled    = (input.disbled === true) ? "true" : null;
    inputsAtributes.key         = (input.key != undefined || input.key != null || input.key != '') ? input.key : null;


    return inputsAtributes;
}


const Checkbox: React.FC<any> = (input) => {
    
    const [checked, setChecked] = useState(input.checked);
  
    const handleChange = () => {
        setChecked(!checked);
    }

    const inputsAtributes = validateInputData(input);

    const register = useContext(FormContext)
    
    return (
        <>
            <div className="divCheckbox">
                <label className={input.label?.className} htmlFor={input.id}>{input.label?.value}</label>
                <input
                    key={inputsAtributes.key}
                    {...register(input.name)}
                    {...inputsAtributes}
                    id={input.id}
                    type={"checkbox"}
                    checked={checked}
                    onClick={handleChange}
                />
            </div>
        </>
    )

}

export default Checkbox;


