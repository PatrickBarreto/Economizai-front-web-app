import React, { useEffect, useState } from 'react';

import { IoMdAdd } from "react-icons/io";

import { findSpecificProduct, 
        updateProduct,  
        deleteProduct, 
        createProduct, 
        handleSetSearchResultState } from '../../services/Products.tsx';

import { Link } from '../../ui-resources/components/SubComponents/Link.tsx';


import { ProductCreateForm, ProductEditForm } from './ProductForms.tsx';
import { PrivateHeader } from '../../ui-resources/templates/Structure/Headers/Headers.tsx';
import { ProductList } from '../../ui-resources/templates/List/ProductsList/ProductList';
import { SearchInput } from '../../ui-resources/templates/Search/Search-1.tsx';
import { Main } from '../../ui-resources/templates/Structure/Main/Main.tsx';


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
        <PrivateHeader/>
        <Main>
          <div className="inline-div">
            <SearchInput submitCallback={handlerFindSpecificProduct}/>
            <Link action={showCreateProductForm} icon={<IoMdAdd/>} text="Novo Produto"/>
          </div>
          <ProductList contents={toRender} actionEdit={prepareEditFormData} actionDelete={handlerDeleteProduct}/>
        </Main>
      </>
    );
}

export default Products