import { Modal } from "../../components/Modal/Modal";
import Form from "../../components/Resources/Form/Form";
import Input from "../../components/Resources/Form/Input/Input";
import { Title } from "../../components/SubComponents/Title";
import { SubTitle } from "../../components/SubComponents/SubTitle";
import { Product } from "../../config/Interfaces/SystemEntities";


interface BrandForm {
    action: Function,
    brand?:Product

}

export const BrandEditForm:React.FC<BrandForm> = ({ action, brand }) => {
    return (
        <Modal>
            <Title content={"Editar Marca"}/>
            <SubTitle content={"Id:"+brand?.id}/>
            <Form className={"editProduct"} submitCallback={action}>
                
                <Input 
                    className={"hiddenElement"}
                    name={ "id"}
                    type={ "text"}
                    value={brand?.id}
                />

                <Input 
                    label={{
                    className: "labelName",
                    value: "Nome da marca"
                    }}
                    name={ "name"}
                    type={ "text"}
                    placeholder={brand?.name}
                />

                <Input 
                    label={{
                        className: "labelType",
                        value: "Tipo da marca"
                    }}
                    className={"typeProduct"}
                    name={ "type"}
                    type={ "text"}
                    placeholder={brand?.type}
                />

                <Input
                    id={"buttonSubmit"}
                    name={"buttonSubmit"}
                    type={"submit"}
                    value={"Editar Produto"}
                />
            </Form>
        </Modal>

    );
}


export const BrandCreateForm:React.FC<BrandForm> = ({ action }) => {

    return (
        <Modal>
            <Title content={"Criar nova marca"}/>
            <Form className={"createProduct"} submitCallback={action}>
                <Input 
                    label={{
                    className: "labelName",
                    value: "Nome da marca"
                    }}
                    name={ "name"}
                    type={ "text"}
                    placeholder={ "Nome da marca"}
                    required={true}
                />


                <Input 
                    label={{
                        className: "labelType",
                        value: "Tipo da marca"
                    }}
                    className={"typeProduct"}
                    name={ "type"}
                    type={ "text"}
                    required={ true}
                />

                <Input
                    id={"buttonSubmit"}
                    name={"buttonSubmit"}
                    type={"submit"}
                    value={"Criar Marca"}
                />
            </Form>
        </Modal>
    );
}