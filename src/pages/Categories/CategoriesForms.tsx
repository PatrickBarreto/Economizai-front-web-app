import { Modal } from "../../components/Modal/Modal";
import Form from "../../components/Resources/Form/Form";
import Input from "../../components/Resources/Form/Input/Input";
import { Title } from "../../components/SubComponents/Title";
import { SubTitle } from "../../components/SubComponents/SubTitle";
import { Categories } from "../../config/Interfaces/SystemEntities";
import { findSpecific } from "../../services/Categories";
import { useEffect, useState } from "react";


interface BrandForm {
    action: Function,
    category?:Categories

}


//
//
//Preciso adicionar ao Edit os demais dados da categoria, que sdão os produtos e as marcas.

export const CategoriesEditForm:React.FC<BrandForm> = ({ action, category }) => {

    const [categoryData, setCategoryData] = useState({})

    useEffect(()=>{
        const fetchData = async () => {
            if (category?.id) {
                try {
                    const data = await findSpecific(category.id);
                    setCategoryData(data);
                } catch (error) {
                    console.error('Failed to fetch category data:', error);
                }
            }
        }
        fetchData();
    },[])

    return (
        <Modal>
            <Title content={"Editar Categoria"}/>
            <SubTitle content={"Id:"+category?.id}/>
            <Form className={"editProduct"} submitCallback={action}>
                
                <Input 
                    className={"hiddenElement"}
                    name={ "id"}
                    type={ "text"}
                    value={category?.id}
                />

                <Input 
                    label={{
                    className: "labelName",
                    value: "Nome da categoria"
                    }}
                    name={ "name"}
                    type={ "text"}
                    placeholder={category?.name}
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


export const CategoriesCreateForm:React.FC<BrandForm> = ({ action }) => {

    return (
        <Modal>
            <Title content={"Criar nova categoria"}/>
            <Form className={"createProduct"} submitCallback={action}>
                <Input 
                    label={{
                    className: "labelName",
                    value: "Nome da categoria"
                    }}
                    name={ "name"}
                    type={ "text"}
                    placeholder={ "Nome da marca"}
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