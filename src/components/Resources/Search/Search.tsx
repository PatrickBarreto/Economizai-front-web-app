import React from "react";
import { RiSearchLine } from "react-icons/ri";
import Form from "../Form/Form";
import Input from "../Form/Input/Input";
import './Search.css'
import { Search } from "../../../config/Interfaces/Search";
import { z } from "zod";

export const SearchInput:React.FC<Search> = ({submitCallback}) => {

    const zodObjectSchema = z.object({
        searchProducts: z.string()
    });
    

    return (
        <>
            <div className="divSearch">
                <div className="searchIcon">
                    <RiSearchLine/>
                </div>
                <Form className={"seachForm"} submitCallback={ submitCallback } zodObject={ zodObjectSchema }>
                    <Input 
                        name={"searchProducts"}
                        className={"seachFormInput"}
                        type={"search"}
                        placeholder={"Digite sua busca"}
                    />
                </Form>
            </div>
        </>
    )

}


