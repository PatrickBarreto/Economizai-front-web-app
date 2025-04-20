import React, { useEffect, useState } from 'react';

import { IoMdAdd } from "react-icons/io";

import { findSpecificProduct,
        deleteProduct,
        handleSetSearchResultState } from '../../services/Products.tsx';

import { Link } from '../../ui-resources/components/SubComponents/Link.tsx';

import { PrivateHeader } from '../../ui-resources/templates/Structure/Headers/Headers.tsx';
import { ProductList } from '../../ui-resources/templates/List/ProductsList/ProductList';
import { SearchInput } from '../../ui-resources/templates/Search/Search-1.tsx';
import { Main } from '../../ui-resources/templates/Structure/Main/Main.tsx';
import { useNavigate } from 'react-router-dom';


const Products:React.FC = () => {
    const [ searchResult, setSearchResult ] = useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        const fetchData = async () =>{
            handleSetSearchResultState(setSearchResult);
        }
        fetchData()
    },[]);

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

    const handlerEditProduct = (id:any) => {
      navigate(`${id}/edit`, {
        relative: "path"
      })
    }

    const handlerCreateProduct = () => {
      navigate(`create`, {
        relative: "path"
      })
    }

    const content = searchResult;

    return (   
      <>
        <PrivateHeader/>
        <Main>
          <div className="inline-div">
            <SearchInput submitCallback={handlerFindSpecificProduct} toFind="products" />
            <Link action={handlerCreateProduct} icon={<IoMdAdd/>} text="Novo Produto"/>
          </div>
          <ProductList contents={content} actionEdit={handlerEditProduct} actionDelete={handlerDeleteProduct}/>
        </Main>
      </>
    );
}

export default Products