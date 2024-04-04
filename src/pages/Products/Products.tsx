import React, {useEffect, useState} from 'react';
import { RiSearchLine, RiDeleteBack2Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { specificPageProps } from '../../config/interfacePageProps';
import { findSpecificProduct, findProdutcs, updateProduct,  deleteProduct, createProduct } from '../../hooks/ProductsHooks';
import Form  from '../../components/Form/Form.tsx';
import './Products.css';


const Products:React.FC<specificPageProps> = () => {
    //Definição de estados
    const [ searchResult, setSearchResult ] = useState([]);
    const [ showCreateForm, setShowCreateForm ] = useState(false);
    const [ showEditForm, setShowEditForm ] = useState(false);
    const [ editedFormData, setEditFormData ] = useState({});
    const [ createdProduct, setCreatedProduct ] = useState(0);

    //Definição de efeito pós alteração no estado createdProduct
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





    //Contexto de criação do produto
    const showCreateProductForm = () => {
        setShowEditForm(false);
        setShowCreateForm(true);
    }

    const HandleCreateProduct = async (data:any) => {
        const returnApi = await createProduct(data)
        if(returnApi.status == 200){
            setCreatedProduct(createdProduct + 1);
        }

        const findedProducts:any = await findProdutcs();
        setSearchResult(findedProducts.body);
        
        setShowCreateForm(false)
    }





    //Contexto de edição do produto
    const handlerUpdateProduct = async (data:any) => {
     
        const result = await updateProduct(data);
        if(result.status == 404){
            return alert("Not found");
        }

        const findedProducts:any = await findProdutcs();
        setSearchResult(findedProducts.body);
    }

    //Dados para renderizar os formulários
    const prepareEditFormData = (product:any) => {
        
        const EditFormData = {
            form : {
                className: "editProduct", 
                submitCallback: handlerUpdateProduct
            },
            inputs :  [
                { 
                    label: {
                        className: "labelName",
                        value: "Nome do produto"
                    },
                    name: "name",
                    type: "text",
                    placeholder: product.name,
                    required: true,
                },
                { 
                    label: {
                        className: "labelType",
                        value: "Tipo do produto"
                    },
                    className:"typeProduct",
                    name: "type",
                    type: "text",
                    placeholder: product.type,
                    required: true,
                },
                {  
                    label: {
                        className: "labelVolume",
                        value: "Quantidade"
                    },
                    name: "volume",
                    type: "text",
                    placeholder: product.volume,
                    required: true,
                },
                { 
                    label: {
                        className: "labelUnitMensure",
                        value: "Unidade de medida"
                    },
                    name: "unitMensure",
                    type: "text",
                    placeholder: product.unitMensure,
                    required: true,
                },
                {   
                    id:"buttonSubmit",
                    name: "buttonSubmit",
                    type: "submit",
                    value: "Editar Produto",
                },
            ]
        }

        setEditFormData(EditFormData);
        setShowEditForm(true);

    }

    const SearchFormData = {
        form: {
            className:"produtcForm",
            id:"produtcForm",
            submitCallback: handlerFindSpecificProduct,
        },
        inputs: [
            { 
                name:"searchProducts",
                id:"searchInput",
                type:"search",
                placeholder:'Digite sua busca'
            }
        ]
    }

    const CreateFormData = {
        form : {
            className: "createProduct", 
            submitCallback: HandleCreateProduct
        },
        inputs :  [
            { 
                label: {
                    className: "labelName",
                    value: "Nome do produto"
                },
                name: "name",
                type: "text",
                placeholder: "Nome do produto",
                required: true,
            },
            { 
                label: {
                    className: "labelType",
                    value: "Tipo do produto"
                },
                className:"typeProduct",
                name: "type",
                type: "text",
                required: true,
            },
            {  
                label: {
                    className: "labelVolume",
                    value: "Quantidade"
                },
                name: "volume",
                type: "text",
                placeholder: "Quantidade",
                required: true,
            },
            { 
                label: {
                    className: "labelUnitMensure",
                    value: "Unidade de medida"
                },
                name: "unitMensure",
                type: "text",
                placeholder: "unidade de medida",
                required: true,
            },
            {   
                id:"buttonSubmit",
                name: "buttonSubmit",
                type: "submit",
                value: "Criar Produto",
            },
        ]
    }




    const toRender = searchResult;
    

    return (
        <>
            {
            showCreateForm && <div id="divFormCreateProduct">
                                    <Form data={CreateFormData} comeBackFunction={()=>{
                                        setShowCreateForm(false);
                                    }}/>
                                </div> 
            }

            {
                showEditForm && <div id="divFormEditProduct">
                    <Form data={editedFormData} comeBackFunction={()=>{
                        setShowEditForm(false);
                    }}/>
                </div> 
            }

            <div id="divProductSearch">
                <button type="submit" id="searchIcon">
                    <RiSearchLine/>
                </button>
                <Form data={SearchFormData} />
            </div>
            
            <div>
                <a onClick={()=>{showCreateProductForm()}}><IoMdAdd/>Adicionar um novo produto</a>
            </div>
            
            <div id="divProductsList">
                <ul id="productsList">
                    {
                        toRender.map((item:any, index:any)=>{
                            return (
                            <li key={index} className="product">
                                <div className="productImage">
                                    <RiSearchLine/>
                                </div>
                                <div className="productDetails">
                                    <p className="idProduct">{item.id}</p>
                                    <p className="produtctName">{item.name}</p>
                                    <span className="fastInfo">{item.volume}{item.unit_mensure}</span>
                                </div>
                                <div className="actionButtons">
                                    <a onClick={()=>{prepareEditFormData(item.id)}}>
                                        <TbEdit />
                                    </a>
                                    <a onClick={()=>{handlerDeleteProduct(item.id)}}>
                                        <RiDeleteBack2Line />
                                    </a >
                                </div>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
}

export default Products