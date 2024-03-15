import React, {useCallback, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { RiSearchLine } from "react-icons/ri";
import { specificPageProps } from '../../config/interfacePageProps';
import {findSpecificProduct, findProdutcs } from '../../hooks/ProductsHooks';
import './Products.css';


//PAREI AQUI TENTANDOD ESCOBRIR COMO LANÇO UM POP UP. MAS ANTES PRECISO COMPARTIMENTALIZAR AS COISAS, LIMPAR ESSES CÓDIGOS.

const Products:React.FC<specificPageProps> = () => {
    
    const [ searchResult, setSearchResult ]= useState([]);
    
    const {register, handleSubmit} = useForm();

    useEffect(()=>{
        const fetchData = async () =>{
            const findedProducts:any = await findProdutcs();
            setSearchResult(findedProducts);
        }
        fetchData()
    },[]);

    
    const handlerFindSpecificProduct = async (data:any) => {
        if(data.searchProducts == ''){
            setSearchResult(await findProdutcs());
            return;
        }

        let responseSpecific:any = await findSpecificProduct(data.searchProducts)
                
        if(responseSpecific[0].erro !== undefined){
            alert(responseSpecific.erro +' - '+responseSpecific[0].status);
            return setSearchResult(await findProdutcs());
        }
        
        setSearchResult(responseSpecific)
    }
    
    const toRender = searchResult;
    
    return (
        <>
            <div id="divProductSearch">
                <form id="produtcForm" onSubmit={handleSubmit(handlerFindSpecificProduct)}>
                    <button type="submit" id="searchIcon">
                        <RiSearchLine/>
                    </button>
                    <input 
                        id="searchInput"
                        type="search"
                        placeholder='Digite sua busca'
                        {...register('searchProducts')}/>
                </form>
            </div>

            <div id="divProductsList">

                <ul id="productsList">
                    {
                        toRender.map((item:any, index:any)=>{
                            return (
                            <li key={index} className="product">
                                <div id="productImage">
                                    <RiSearchLine/>
                                </div>
                                <div>
                                    <p className="idProduct">{item.id}</p>
                                    <p className="produtctName">{item.name}</p>
                                    <span className="fastInfo">{item.volume}{item.unit_mensure}</span>
                                </div>
                            </li>)
                        })
                    }
                </ul>
            </div>

        </>
    );
}

export default Products