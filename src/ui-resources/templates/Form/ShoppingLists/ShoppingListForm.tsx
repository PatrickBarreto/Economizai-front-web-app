import Form from "../../../components/Resources/Form/Form";
import Input from "../../../components/Resources/Form/Input/Input";
import { ShoppingList } from "../../../../config/Interfaces/SystemEntities";
import { z } from "zod";
import './ShoppingListForm.css'
import { ShoppingListsListExecutions } from "../../../../pages/ShoppingLists/ShoppingListsListExecutions";
import { Select } from "../../../components/Resources/Form/Select/Select";
import { Option } from "../../../components/Resources/Form/Select/Option/Option";

interface ProductForm {
  action: Function,
  shoppingList?:ShoppingList | undefined,
  formClassName?:string,
}

const editShoppingListExecutionZodObject = z.object({
    id:z.number().optional(),
    name:z.string(),
    type:z.string(),
    executions:z.array(z.string()).optional(),
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


export const ShoppingListForm:React.FC<ProductForm> = ({ action, shoppingList, formClassName="shoppingListForm" }) => {

  const buttonText = shoppingList ? "Editar Lista" : "Criar Lista"

  const executions = shoppingList ? shoppingList.executions : []
 
  return (
    <>
      <Form className={formClassName} submitCallback={action} zodObject={editShoppingListExecutionZodObject} defaultValues={shoppingList}>           
        <Input 
            className={"hiddenElement"}
            name={ "id"}
            type={ "text"}
        />

        <Input 
            label={{
            className: "labelName",
            value: "Nome da lista"
            }}
            className={"inputNameShoppingList"}
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
                >
                  {descriptionItemType[type]}
                </Option>
                )
              })}
          </Select>
        </div>

        { executions?.length > 0 && 
          <div className={"divShoppingListExecutions"}>
            <h2> Execuções </h2>
            <div className={"divShoppingListExecutionsBonds"}>
                <ShoppingListsListExecutions contents={[{id:1}, {id:1}]} />
            </div>
          </div> 
        }

       
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