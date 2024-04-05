import React, { useEffect, useState } from 'react';

import { RiSearchLine, RiDeleteBack2Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import './Products.css';

import { findSpecificProduct, findProdutcs, updateProduct,  deleteProduct, createProduct } from '../../hooks/ProductsHooks';

import Form  from '../../components/Form/Form.tsx';
import Input from '../../components/Form/Input/Input.tsx';
import { Item, List } from '../../components/List/List.tsx';
import { SearchInput } from '../../components/Search/Search.tsx';



const Products:React.FC = () => {
    const [ searchResult, setSearchResult ] = useState([]);
    const [ showCreateForm, setShowCreateForm ] = useState(false);
    const [ showEditForm, setShowEditForm ] = useState(false);
    const [ createdProduct, setCreatedProduct ] = useState(0);
    const [ productInputFormEdit, setProductInputFormEdit ] = useState({id:'',name:'',type:'',volume:'',unit_mensure:''});


    useEffect(()=>{
        const fetchData = async () =>{
            const findedProducts:any = await findProdutcs();
            if(findedProducts.status != 200){
                return false
            }
            setSearchResult(findedProducts.body);
        }
        fetchData()
    },[createdProduct]);


    const handlerFindSpecificProduct = async (data:any) => {
        if(data.searchProducts == ''){
            const findedProducts:any = await findProdutcs();
            setSearchResult(findedProducts.body);
            return;
        }

        let response:any = await findSpecificProduct(data.searchProducts)

        if(response){
            setSearchResult(response)
        }else{
            const findedProducts:any = await findProdutcs();
            setSearchResult(findedProducts.body);
            return alert('Ops, not found')
        }
    }

    const showCreateProductForm = () => {
        setShowEditForm(false);
        setShowCreateForm(true);
    }

    const handleCreateProduct = async (data:any) => {
        const returnApi = await createProduct(data)
        if(returnApi.status == 200){
            setCreatedProduct(createdProduct + 1);
        }

        const findedProducts:any = await findProdutcs();
        setSearchResult(findedProducts.body);
        
        setShowCreateForm(false)
    }

    const handlerUpdateProduct = async (data:any) => {
     
        const result = await updateProduct(data);
        if(result.status == 404){
            return alert("Not found");
        }

        const findedProducts:any = await findProdutcs();
        setSearchResult(findedProducts.body);
        setShowEditForm(false);
    }

    const prepareEditFormData = async (id:string) => {
        const product = await findSpecificProduct(id);
        setProductInputFormEdit(product[0]);
        setShowEditForm(true);
    }

    const handlerDeleteProduct = async (id:any) => {
        const result = await deleteProduct(id);
       
        if(result.status == 400){
            return alert("This product have dependecies with categories, lists..");
        }

        const findedProducts:any = await findProdutcs();
      
        if(findedProducts == false){
            setSearchResult([]);
            return;
        }
        
        setSearchResult(findedProducts.body);

    }


    interface Product {
        id?:number,
        name:string,
        volume:string,
        unit_mensure:string,
    }
    
    const prepareItemList:any = (product) => {
        return (
            <>
                <div className="productImage">
                    <RiSearchLine/>
                </div>
                <div className="productDetails">
                    <p className="idProduct">{product.id}</p>
                    <p className="produtctName">{product.name}</p>
                    <span className="fastInfo">{product.volume}{product.unit_mensure}</span>
                </div>
                <div className="actionButtons">
                    <a onClick={()=>{prepareEditFormData(product.id)}}>
                        <TbEdit />
                    </a>
                    <a onClick={()=>{handlerDeleteProduct(product.id)}}>
                        <RiDeleteBack2Line />
                    </a >
                </div>
            </>
        );
    }

    const toRender = searchResult;
    

    return (
        <>
        
            {
                showCreateForm && <div id="divFormCreateProduct">
                    <Form className={"createProduct"} submitCallback={handleCreateProduct}>
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
            }

            {
                showEditForm && <div id="divFormEditProduct">
                    <Form className={"editProduct"} submitCallback={handlerUpdateProduct}>
                        <Input 
                            className={"hiddenElement"}
                            name={ "id"}
                            type={ "text"}
                            value={productInputFormEdit.id}
                        />

                        <Input 
                            label={{
                            className: "labelName",
                            value: "Nome do produto"
                            }}
                            name={ "name"}
                            type={ "text"}
                            placeholder={productInputFormEdit.name}
                        />

                        <Input 
                            label={{
                                className: "labelType",
                                value: "Tipo do produto"
                            }}
                            className={"typeProduct"}
                            name={ "type"}
                            type={ "text"}
                            placeholder={productInputFormEdit.type}
                        />

                        <Input 
                            label={{
                                className: "labelVolume",
                                value: "Quantidade"
                            }}
                            name={"volume"}
                            type={"text"}
                            placeholder={productInputFormEdit.volume}
                        />

                        <Input label={{
                            className: "labelUnitMensure",
                            value: "Unidade de medida"
                            }}
                            name={"unitMensure"}
                            type={"text"}
                            placeholder={productInputFormEdit.unit_mensure}
                        />

                        <Input
                            id={"buttonSubmit"}
                            name={"buttonSubmit"}
                            type={"submit"}
                            value={"Editar Produto"}
                        />
                    </Form>
                </div>
            }

            <SearchInput submitCallback={handlerFindSpecificProduct}/>
            
            <div>
                <a onClick={()=>{showCreateProductForm()}}><IoMdAdd/>Adicionar um novo produto</a>
            </div>
        
            <div id="divProductsList">
                <List id={"productsList"}>
                {
                        toRender.map((product:any, index:any)=>{
                            return (
                                <Item key={index} className={"product"}>
                                    {prepareItemList(product)}
                                </Item>
                            )
                        })
                     
                    }
                </List>        
            </div>
        </>
    );
}

export default Products