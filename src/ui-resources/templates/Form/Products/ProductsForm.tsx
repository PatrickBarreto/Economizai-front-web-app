import Form from "../../../components/Resources/Form/Form";
import Input from "../../../components/Resources/Form/Input/Input";
import { Product } from "../../../../config/Interfaces/SystemEntities";
import { z } from "zod";
import { Select } from "../../../components/Resources/Form/Select/Select";
import { Option } from "../../../components/Resources/Form/Select/Option/Option";
import './ProductForm.css'

interface ProductForm {
  action: Function,
  product?:Product,
  formClassName?:string,
}
const productZodForm = z.object({
  id:z.string().optional(),
  name:z.string(),
  type:z.string(),
  volume:z.string(),
  unitMensure:z.string(),
});

const tempEnumUnitMensure = [
  {id: 1,name: 'mcg'},
  {id: 2,name: 'mg'},
  {id: 3,name: 'g'},
  {id: 4,name: 'kg'},
  {id: 5,name: 'mm'},
  {id: 6,name: 'cm'},
  {id: 7,name: 'm'},
  {id: 8,name: 'mm2'},
  {id: 9,name: 'cm2'},
  {id: 10,name: 'm2'},
  {id: 11,name: 'ml'},
  {id: 12,name: 'l'},
  {id: 13,name: 'c3'},
  {id: 14,name: 'm3'}
]

const descriptionItemType  = {
  food: "Alimentação",
  medicine: "Remédio"
}

type customType = keyof typeof descriptionItemType

const tempItemType:{id:number, name:customType}[] = [
  {id: 1, name: 'food'},
  {id: 2, name: 'medicine'},
]


export const ProductsForm:React.FC<ProductForm> = ({ action, product, formClassName="productsForm" }) => {
  const buttonText = product ? "Editar Produto" : "Criar Produto"

  return (
    <>
      <Form className={formClassName} submitCallback={action} zodObject={productZodForm}>
        { product && product.id && <Input 
            className={"hiddenElement"}
            name={ "id"}
            type={ "text"}
            value={product.id}
        />}

        <Input 
            label={{
              className: "labelName",
              value: "Nome do produto"
            }}
            className={"inputNameProduct"}
            name={ "name"}
            type={ "text"}
            placeholder={product?.name}
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
                >
                  {descriptionItemType[type]}
                </Option>
                )
              })}
          </Select>
        </div>

        <p>Volume</p>
        <div id="volumeDiv">
          <Input 
            className={"selectProductVolume"}
            name={"volume"}
            placeholder={product?.volume}
          />

          <Select 
            className={"selectProductUnitMensure"}
            name={"unitMensure"}
            required={true}
          >
          {tempEnumUnitMensure.map((u)=>{
            return (
              <Option
              value={u.id} 
              disabled= {false}
              >
                {u.name}
              </Option>
              )
            })}
          </Select>
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