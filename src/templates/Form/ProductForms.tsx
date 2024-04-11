import Form from "../../components/Resources/Form/Form";
import Input from "../../components/Resources/Form/Input/Input";
import { Product } from "../../config/Interfaces/SystemEntities";


interface ProductForm {
    action: Function,
    product?:Product

}

export const ProductEditForm:React.FC<ProductForm> = ({ action, product }) => {
    return (
        <div id="divFormEditProduct"> 
            <Form className={"editProduct"} submitCallback={action}>
                <Input 
                    className={"hiddenElement"}
                    name={ "id"}
                    type={ "text"}
                    value={product.id}
                />

                <Input 
                    label={{
                    className: "labelName",
                    value: "Nome do produto"
                    }}
                    name={ "name"}
                    type={ "text"}
                    placeholder={product.name}
                />

                <Input 
                    label={{
                        className: "labelType",
                        value: "Tipo do produto"
                    }}
                    className={"typeProduct"}
                    name={ "type"}
                    type={ "text"}
                    placeholder={product.type}
                />

                <Input 
                    label={{
                        className: "labelVolume",
                        value: "Quantidade"
                    }}
                    name={"volume"}
                    type={"text"}
                    placeholder={product.volume}
                />

                <Input label={{
                    className: "labelUnitMensure",
                    value: "Unidade de medida"
                    }}
                    name={"unitMensure"}
                    type={"text"}
                    placeholder={product.unit_mensure}
                />

                <Input
                    id={"buttonSubmit"}
                    name={"buttonSubmit"}
                    type={"submit"}
                    value={"Editar Produto"}
                />
            </Form>
        </div>
    );
}


export const ProductCreateForm:React.FC<ProductForm> = ({ action }) => {

    return (
        <div id="divFormCreateProduct">
            <Form className={"createProduct"} submitCallback={action}>
                <Input 
                    label={{
                    className: "labelName",
                    value: "Nome do produto"
                    }}
                    name={ "name"}
                    type={ "text"}
                    placeholder={ "Nome do produto"}
                    required={true}
                />


                <Input 
                    label={{
                        className: "labelType",
                        value: "Tipo do produto"
                    }}
                    className={"typeProduct"}
                    name={ "type"}
                    type={ "text"}
                    required={ true}
                />

                <Input 
                    label={{
                        className: "labelVolume",
                        value: "Quantidade"
                    }}
                    name={"volume"}
                    type={"text"}
                    placeholder={"Quantidade"}
                    required={true}
                />

                <Input label={{
                    className: "labelUnitMensure",
                    value: "Unidade de medida"
                    }}
                    name={"unitMensure"}
                    type={"text"}
                    placeholder={"unidade de medida"}
                    required={true}
                />

                <Input
                    id={"buttonSubmit"}
                    name={"buttonSubmit"}
                    type={"submit"}
                    value={"Criar Produto"}
                />
            </Form>
        </div>
    );
}