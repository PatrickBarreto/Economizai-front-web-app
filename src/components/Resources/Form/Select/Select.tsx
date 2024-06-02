import React, { useContext } from "react";
import { FormContext } from "../../../../config/contexts";
import { Select as SelectInterface } from "../../../../config/Interfaces/FormData";


const validateSelectData = (select:SelectInterface) => {

    const selectAtributes:any = {};

    if(select.id != undefined || select.id != null || select.id != ''){
        selectAtributes.id = select.id
    }

    if(select.name != undefined || select.name != null || select.name != ''){
        selectAtributes.name = select.name
    }

    if(select.className != undefined || select.className != null || select.className != ''){
        selectAtributes.className = select.className
    }

    if(select.multiple != undefined || select.multiple != null || select.multiple != ''){
        selectAtributes.multiple = select.multiple
    }

    if(select.required === true){
        selectAtributes.required = true;
    }


    return selectAtributes;
}

export const Select: React.FC<SelectInterface> = (select:SelectInterface) => {

    const selectAtributes = validateSelectData(select)
    const register = useContext(FormContext)
    
    return (
        <>
            <div className="divSelect">
                <label className={select.label?.className} htmlFor={select.name}>{select.label?.value}</label>
                <select 
                    {...selectAtributes}
                    {...register(selectAtributes.name)}
                >
                    {select.children}
                </select>
            </div>
        </>
    )
}