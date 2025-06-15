import Form from "../../../components/Resources/Form/Form";
import Input from "../../../components/Resources/Form/Input/Input";
import { Categories, Product } from "../../../../config/Interfaces/SystemEntities";
import { z } from "zod";
import { Select } from "../../../components/Resources/Form/Select/Select";
import { Option } from "../../../components/Resources/Form/Select/Option/Option";
import './ProductForm.css'
import Checkbox from "../../../components/Resources/Form/Input/Checkbox";
import {find as categoriesFind} from "../../../../services/Categories"
import { useEffect, useState } from "react";
import { ApiResponse } from "../../../../config/Interfaces/ApiConection";

interface ProductForm {
  action: Function,
  product?:Product,
  formClassName?:string,
}

const productZodForm = z.object({
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

const handleFind = async (finder:Function) => {
  const returnApi:ApiResponse = await finder();
  if(returnApi.status == 200){
      return returnApi.body;
  }
}

export const ProductsForm:React.FC<ProductForm> = ({ action, product, formClassName="productsForm" }) => {
  const buttonText = product ? "Editar Produto" : "Criar Produto"
  const [categories, setCategories] = useState<Categories[] | []>([])
  const [defaultValues, setDefaultValues] = useState<Product | {}>({})
  
  useEffect(() => {
    const categoriesFinder = async () => {
      setCategories(await handleFind(categoriesFind))
    }
    categoriesFinder()
  },[])
  
  
  useEffect(() => {
    if(product){
      setDefaultValues({
        id: product.id?.toString(),
        name: product.name,
        type: product.type,
        categories: product.categories ? product.categories.map(c => c.id.toString()) : []
      })
    }
  },[product])
  
  return (
    <>
      <Form className={formClassName} submitCallback={action} zodObject={productZodForm} defaultValues={defaultValues}>
        { product && product.id && <Input 
            className={"hiddenElement"}
            name={ "id"}
            type={ "text"}
        />}

        <Input 
            label={{
              className: "labelName",
              value: "Nome do produto"
            }}
            className={"inputNameProduct"}
            name={ "name"}
            type={ "text"}
        />

        <div id="typeDiv">
          <Select 
            label={{
              className: "labelType",
              value: "Tipo"
            }}
            className={"selectProductType"}
            name={"type"}
            >
            {tempItemType.map((u)=>{
              const type:customType = u.name
              return (
                <Option
                value={u.id} 
                disabled= {false}
                selected="u.id"
                >
                  {descriptionItemType[type]}
                </Option>
                )
              })}
          </Select>
        </div>

        <p>Categoria</p>
        <div className={"categoryDiv"}>
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

        <div id="divButton">
          <Input
            id={"editButtonSubmit"}
            name={"buttonSubmit"}
            type={"submit"}
            value={buttonText}
          />
        </div>
      </Form>
    </>
  );
}