import React from "react";
import { RiSearchLine } from "react-icons/ri";
import Form from "../Form/Form";
import Input from "../Form/Input/Input";
import './Search.css'
import { Search } from "../../config/interfaces/Search";

export const SearchInput:React.FC<Search> = ({submitCallback}) => {
    return (
        <>
            <div className="divSearch">
                <div className="searchIcon">
                    <RiSearchLine/>
                </div>
                <Form className={"seachForm"} submitCallback={ submitCallback }>
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


