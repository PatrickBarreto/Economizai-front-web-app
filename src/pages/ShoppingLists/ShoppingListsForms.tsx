import { Modal } from "../../components/Modal/Modal";
import Form from "../../components/Resources/Form/Form";
import Input from "../../components/Resources/Form/Input/Input";
import { Title } from "../../components/SubComponents/Title";
import { SubTitle } from "../../components/SubComponents/SubTitle";
import { ShoppingList } from "../../config/Interfaces/SystemEntities";


interface ShoppingListsForm {
    action: Function,
    shoppingList?:ShoppingList

}

export const ShoppingListsEditForm:React.FC<ShoppingListsForm> = ({ action, shoppingList }) => {
    
    return (
        <Modal>
            <Title content={"Editar Lista de Compras"}/>
            <SubTitle content={"Id:"+shoppingList?.id}/>
            <Form className={"editProduct"} submitCallback={action}>
                
                <Input 
                    className={"hiddenElement"}
                    name={ "id"}
                    type={ "text"}
                    value={shoppingList?.id}
                />

                <Input 
                    label={{
                    className: "labelName",
                    value: "Nome da lista"
                    }}
                    name={ "name"}
                    type={ "text"}
                    placeholder={shoppingList?.name}
                />

                <Input 
                    label={{
                    className: "labelName",
                    value: "Tipo da lista"
                    }}
                    name={ "type"}
                    type={ "text"}
                    placeholder={shoppingList?.name}
                />

                <Input
                    id={"buttonSubmit"}
                    name={"buttonSubmit"}
                    type={"submit"}
                    value={"Editar"}
                />
            </Form>
        </Modal>

    );
}


export const ShoppingListsCreateForm:React.FC<ShoppingListsForm> = ({ action }) => {

    return (
        <Modal>
            <Title content={"Criar Lista de Compras"}/>
            <Form className={"createProduct"} submitCallback={action}>
                <Input 
                    label={{
                        className: "labelName",
                        value: "Nome da lista"
                        }
                    }
                    name={ "name"}
                    type={ "text"}
                    placeholder={ "Nome da lista"}
                    required={true}
                />

                <Input 
                    label={{
                        className: "labelName",
                        value: "Tipo da lista"
                        }
                    }
                    name={ "type"}
                    type={ "text"}
                    placeholder={ "Tipo da lista"}
                    required={true}
                />

                <Input
                    id={"buttonSubmit"}
                    name={"buttonSubmit"}
                    type={"submit"}
                    value={"Criar Categoria"}
                />
            </Form>
        </Modal>
    );
}