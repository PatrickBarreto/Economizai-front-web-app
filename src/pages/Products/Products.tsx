import React, { useEffect, useState } from 'react';

import { IoMdAdd } from "react-icons/io";
import './Products.css';

import { findSpecificProduct, 
        updateProduct,  
        deleteProduct, 
        createProduct, 
        handleSetSearchResultState } from '../../services/Products.tsx';

import { SearchInput }              from '../../components/Resources/Search/Search.tsx';
import { Header, Footer, Main}      from '../../components/Structure/Structure.tsx';
import { Link }                     from '../../components/SubComponents/Link.tsx';

import { ProductCreateForm, ProductEditForm } from './ProductForms.tsx';
import { HeaderTemplate, PrivateHeader }                       from '../../templates/Headers/Headers.tsx';
import { PrivateFooter, PublicFooter }                       from '../../templates/Footers/Footers.tsx';
import { ProductList }                        from './ProductList.tsx';
import { Title } from '../../components/SubComponents/Title.tsx';


const Products:React.FC = () => {
    const [ searchResult, setSearchResult ] = useState([]);
    const [ showCreateForm, setShowCreateForm ] = useState(false);
    const [ showEditForm, setShowEditForm ] = useState(false);
    const [ createdProduct, setCreatedProduct ] = useState(0);
    const [ productInputFormEdit, setProductInputFormEdit ] = useState({id:'',name:'',type:'',volume:'',unit_mensure:''});

    useEffect(()=>{
        const fetchData = async () =>{
            handleSetSearchResultState(setSearchResult);
        }
        fetchData()
    },[createdProduct]);

    const handlerFindSpecificProduct = async (data:any) => {
        if(data.searchProducts == ''){
            await handleSetSearchResultState(setSearchResult);
            return;
        }

        let response:any = await findSpecificProduct(data.searchProducts)

        if(response){
            setSearchResult(response)
        }else{
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
        await handleSetSearchResultState(setSearchResult)       
        setShowCreateForm(false)
    }

    const handlerUpdateProduct = async (data:any) => {
        const result = await updateProduct(data);
        if(result.status == 404){
            return alert("Not found");
        }
        await handleSetSearchResultState(setSearchResult);
        setShowEditForm(false);
    }

    const prepareEditFormData = async (id:number|string) => {
        const product = await findSpecificProduct(id);
        setProductInputFormEdit(product[0]);
        setShowEditForm(true);
    }

    const handlerDeleteProduct = async (id:any) => {
        const result = await deleteProduct(id);
       
        if(result.status == 400){
            return alert("This product have dependecies with categories, lists..");
        }

        let findedProducts:any = await handleSetSearchResultState(setSearchResult);
      
        if(findedProducts == false){
            setSearchResult([]);
            return;
        }
    }

    const toRender = searchResult;

    return (
        
        <>
            { showCreateForm && <ProductCreateForm action={handleCreateProduct}/> }
            { showEditForm && <ProductEditForm action={handlerUpdateProduct} product={productInputFormEdit}/> }    
            <Header>
                <PrivateHeader/>
            </Header>
            <Main>
                <Title content='Produtos'/>
                <SearchInput submitCallback={handlerFindSpecificProduct}/>
                <Link action={showCreateProductForm} icon={<IoMdAdd/>} text="Adicionar um novo Produto"/>
                <ProductList content={toRender} actionEdit={prepareEditFormData} actionDelete={handlerDeleteProduct}/>
            </Main>
            <Footer>
                <PrivateFooter/>
            </Footer>
        </>
    );
}

export default Products