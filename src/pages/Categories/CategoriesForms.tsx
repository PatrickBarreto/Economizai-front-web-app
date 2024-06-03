import { Modal } from "../../components/Modal/Modal";
import Form from "../../components/Resources/Form/Form";
import Input from "../../components/Resources/Form/Input/Input";
import { Title } from "../../components/SubComponents/Title";
import { SubTitle } from "../../components/SubComponents/SubTitle";
import { Categories } from "../../config/Interfaces/SystemEntities";
import Checkbox from "../../components/Resources/Form/Input/Checkbox";
import { findProdutcs } from "../../services/Products";
import { findBrands } from "../../services/Brands";
import { useEffect, useState } from "react";
import { ApiRetun } from "../../config/Interfaces/ApiConection";

interface CategoryForm {
    action: Function,
    category?:Categories

}

const handleFind = async (finder:Function) => {
    const returnApi:ApiRetun = await finder();
    if(returnApi.status == 200){
        return returnApi.body;
    }
}
   


export const CategoriesEditForm:React.FC<CategoryForm> = ({ action, category }) => { 

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
                        }
                    }
                    name={ "name"}
                    type={ "text"}
                    placeholder={category?.name}
                />

                <div className={"divCategoryBonds"}>
                    <h2> Products </h2>
                    <div className={"divContentCategoryBonds"}>
                    {
                        category?.products.map((product, index:any)=>{
                            return (
                                <Checkbox 
                                    key={index}
                                    label={{
                                        className: "labelName",
                                        value: product.name
                                        }
                                    }
                                    className={ 'checkboxCategoryBonds' }
                                    value={ product.id }
                                    name={ 'products' }
                                    checked={ product.productsCategory == category.id }
                                />
                            )
                            }
                        )
                    }  
                    </div>    
                </div>

                <div className={"divCategoryBonds"}>
                    <h2> Marcas </h2>
                    <div className={"divContentCategoryBonds"}>
                    {
                        category?.brands.map((brand, index:any)=>{
                                return (
                                    <Checkbox 
                                        key={index}
                                        label={{
                                            className: "labelName",
                                            value: brand.name
                                            }
                                        }
                                        className={ 'checkboxCategoryBonds' }
                                        value={ brand.id }
                                        name={ 'brands' }
                                        checked={ true }
                                    />
                                )
                            }
                        )
                    }
                    </div>
                </div>
                    
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


export const CategoriesCreateForm:React.FC<CategoryForm> = ({ action }) => {

    const [products, setProducts] = useState([{id:'', name:'', unit_mensure:'', volume:'', type:''}]);
    const [brands, setBrands] = useState([{id:'', name:''}]);


    useEffect(()=>{
        const executeFind = async () => {
            setProducts(await handleFind(findProdutcs));
            setBrands(await handleFind(findBrands));
        }
        executeFind();
    },[])


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

                <div id={"divCategoryBonds"}>
                    <h3> Products </h3>
                    <div className={"divContentCategoryBonds"}>
                    {
                        products && products.map((product, index:any)=>{
                            return (
                                <Checkbox 
                                    key={index}
                                    label={{
                                        className: "labelName",
                                        value: product.name
                                        }
                                    }
                                    value={ product.id }
                                    name={ 'products' }
                                    id={ "products" }
                                />
                            )
                        })
                    } 
                    </div>      
                </div>

                <div id={"divCategoryBonds"}>
                    <h3> Marcas </h3>
                    <div className={"divContentCategoryBonds"}>
                    {
                        brands && brands.map((brand, index:any)=>{
                            return (
                                <Checkbox 
                                    key={index}
                                    label={{
                                        className: "labelName",
                                        value: brand.name
                                        }
                                    }
                                    value={ brand.id }
                                    name={ 'brands' }
                                    id={ "brands" }
                                />
                            )
                        })
                    }
                    </div>
                </div>

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