import React from "react"
import FormComponent from "../../components/Resources/Form/Form"
import InputComponent from "../../components/Resources/Form/Input/Input"
import { z } from "zod";
import { BrandFormInterfaceProp } from "../../../config/Interfaces/Common";

const bandZodForm = z.object({
    id:z.string().optional(),
    name:z.string(),
    type:z.string()
});


export const BrandsForm:React.FC<BrandFormInterfaceProp> = ({ action, brand }) => {
    return (
      <FormComponent className={"createBrand"} submitCallback={action} zodObject={bandZodForm}>

          { brand && <InputComponent 
              className={"hiddenElement"}
              name={ "id"}
              type={ "text"}
              value={brand?.id}
            />
          }

          <InputComponent 
              label={{
                className: "labelFormName",
                value: "Nome da marca"
              }}
              name={ "name"}
              type={ "text"}
              required={true}
              placeholder={brand?.name}
          />

          <InputComponent 
              label={{
                  className: "labelType",
                  value: "Tipo da marca"
              }}
              className={"brandFormType"}
              name={ "type"}
              type={ "text"}
              required={ true}
              placeholder={brand?.type}
          />

          <InputComponent
              id={"buttonSubmit"}
              name={"buttonSubmit"}
              type={"submit"}
              value={"Criar Marca"}
          />
      </FormComponent>
    );
}