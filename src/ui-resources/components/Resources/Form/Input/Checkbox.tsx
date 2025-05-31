import React, { useContext } from "react";
import { FormContext } from "../../../../../config/contexts";

const validateInputData:any = (input:any) => {
  
    const inputsAtributes:any = {};

    inputsAtributes.id          = (input.id != undefined || input.id != null || input.id != '') ? input.id : undefined;
    inputsAtributes.className   = (input.className != undefined || input.className != null || input.className != '') ? input.className : undefined;
    inputsAtributes.value       = (input.value != undefined || input.value != null || input.value != '') ? input.value : undefined;
    inputsAtributes.required    = (input.required === true) ? true : undefined;
    inputsAtributes.disabled    = (input.disbled === true) ? true : undefined;
    // inputsAtributes.key         = (input.key !== undefined || input.key !== null || input.key !== '') ? input.key : null;


    return inputsAtributes;
}


const Checkbox: React.FC<any> = (input) => {
    
    // const [checked, setChecked] = useState(!!input.checked);
  
    // const handleChange = () => {
    //     setChecked(!checked);
    // }

    const inputsAtributes = validateInputData(input);

    const {register} = useContext(FormContext)
    
    return (
        <>
            <div className="divCheckbox">
                <label className={input.label?.className} htmlFor={input.id}>
                  {input.label?.value}
                </label>
                <input
                    {...inputsAtributes}
                    id={input.id}
                    type={"checkbox"}
                    {...register(input.name)}
                />
            </div>
        </>
    )

}

export default Checkbox;


