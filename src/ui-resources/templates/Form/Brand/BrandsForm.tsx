import React, { useEffect, useState } from "react"
import { z } from "zod";
import { BrandFormInterfaceProp } from "../../../../config/Interfaces/Common";
import './BrandsForm.css'
import Form from "../../../components/Resources/Form/Form";
import Input from "../../../components/Resources/Form/Input/Input";
import Checkbox from "../../../components/Resources/Form/Input/Checkbox";
import { Select } from "../../../components/Resources/Form/Select/Select";
import { Option } from "../../../components/Resources/Form/Select/Option/Option";
import { Categories } from "../../../../config/Interfaces/SystemEntities";
import { handleSetSearchResultState } from "../../../../services/Categories";

const bandZodForm = z.object({
    id:z.string().optional(),
    name:z.string(),
    type:z.string(),
    categories:z.array(z.string()).default([''])
});

const descriptionItemType  = {
  food: "Alimentação",
  medicine: "Remédio"
}

type customType = keyof typeof descriptionItemType

const tempItemType:{id:number, name:customType}[] = [
  {id: 1, name: 'food'},
  {id: 2, name: 'medicine'},
]


export const BrandsForm:React.FC<BrandFormInterfaceProp> = ({ action, brand }) => {
    const [defaultValues, setDefaultValues] = useState({})
    const [categories, setCategories] = useState<Categories[] | []>([])

    useEffect(()=>{
      const execAsync = async () => {
        await handleSetSearchResultState(setCategories)
      }
      execAsync()
    },[])

   useEffect(()=>{
    if(brand) {
      setDefaultValues({
        id: brand.id?.toString(),
        name: brand.name,
        type: brand.type,
        categories: brand.categories ? brand.categories.map(c => c.id.toString()) : []
      })
    }
   },[brand])
    
    return (
      <Form className={"BrandsForm"} submitCallback={action} zodObject={ bandZodForm } defaultValues={defaultValues}>
          { brand && <Input
              className={"hiddenElement"}
              name={ "id"}
              type={ "text"}
            />
          }

          <Input 
            label={{
                className: "labelName",
                value: "Nome da Marca"
            }}
            className={ "brandName" }
            name={ "name"}
            type={ "text"}
          />

          <div id="typeDiv">
            <Select 
              label={{
                className: "labelType",
                value: "Tipo"
              }}
              className={"selectBrandType"}
              name={"type"}
              >
              {tempItemType.map((u)=>{
                const type:customType = u.name
                return (
                  <Option
                  value={u.id} 
                  disabled= {false}
                  >
                    {descriptionItemType[type]}
                  </Option>
                  )
                })}
            </Select>
          </div>

           <p>Categoria</p>
          <div className={"categoriesDiv"}>
          { categories && categories.map((category, index:any)=>{
            return (
              <div>
                <Checkbox 
                    key={index}
                    label={{
                        className: "labelName",
                        value: category.name
                        }
                    }
                    className= {"categoryCheckbox"}
                    name={"categories"}
                    value={category.id}
                />
              </div>
            )
          })
        } 
        </div> 

        <Input
            id={"buttonSubmit"}
            name={"buttonSubmit"}
            type={"submit"}
            value={"Criar Marca"}
        />
      </Form>
    );
}