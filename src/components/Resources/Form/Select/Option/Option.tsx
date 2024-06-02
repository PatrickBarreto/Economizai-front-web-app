import React from "react";
import { SelectOption } from "../../../../../config/Interfaces/FormData";


const validateAtributes = (atributes:SelectOption) => {
    const validAtributes:any = {};
    validAtributes.value = (atributes.value != undefined || atributes.value != null || atributes.value != '') ? atributes.value : null;
    validAtributes.disabled = (atributes.disabled != undefined || atributes.disabled != null || atributes.disabled != '') ? atributes.disabled : null;
    validAtributes.children = (atributes.children != undefined || atributes.children != null || atributes.children != '') ? atributes.children : null;
    return validAtributes
}


export const Option:React.FC<SelectOption> = (selectOption:SelectOption) => {
    const selectOptionAtributes = validateAtributes(selectOption)

    return (
        <>
            <option  
                {...selectOptionAtributes}
            >
                {selectOptionAtributes.children}
            </option>
        </>
    )
}