import React from "react";
import { RiSearchLine } from "react-icons/ri";
import Form from "../../../ui-resources/components/Resources/Form/Form";
import Input from "../../../ui-resources/components/Resources/Form/Input/Input";
import { Search } from "../../../config/Interfaces/Search";
import { z } from "zod";
import './Search.css'

export const SearchInput:React.FC<Search> = ({submitCallback}) => {

    const zodObjectSchema = z.object({
        searchBrands: z.string()
    });
    

    return (
      <>
        <div className="divSearch">
          <div className="searchIcon">
              <RiSearchLine/>
          </div>
          <Form className={"seachForm"} submitCallback={ submitCallback } zodObject={ zodObjectSchema }>
              <Input 
                  name={"searchBrands"}
                  className={"seachFormInput"}
                  type={"search"}
                  placeholder={"Digite sua busca"}
              />
          </Form>
        </div>
      </>
    )

}
