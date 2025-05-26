import React, { useEffect, useState } from 'react';

import { IoMdAdd } from "react-icons/io";

import { Main } from '../../ui-resources/templates/Structure/Main/Main.tsx';
import { Link } from '../../ui-resources/components/SubComponents/Link.tsx';

import { findSpecific, remove, handleSetSearchResultState } from '../../services/Categories.tsx';

import { PrivateHeader } from '../../ui-resources/templates/Structure/Headers/Headers.tsx';
import { SearchInput } from '../../ui-resources/templates/Search/Search-1';

import { CategoriesList } from '../../ui-resources/templates/List/CategoryList/CategoriesList';
import { useNavigate } from 'react-router-dom';


const Categories:React.FC = () => {
    const [ searchResult, setSearchResult ] = useState([]);
    const navigate = useNavigate()
    

    useEffect(()=>{
        const fetchData = async () => {
            handleSetSearchResultState(setSearchResult);
        }
        fetchData()
    },[]);


    const handlerFindSpecific = async (data:any) => {
        if(data.searchProducts == ''){
            await handleSetSearchResultState(setSearchResult);
            return;
        }

        let response:any = await findSpecific(data.searchProducts)

        if(response){
            setSearchResult(response)
        }else{
            return alert('Ops, not found')
        }
    }

    const handlerEditCategory = (id:any) => {
      navigate(`${id}/edit`, {
        relative: "path"
      })
    }

    const handlerCreateCategory = () => {
      navigate(`create`, {
        relative: "path"
      })
    }

    const handlerDelete = async (id:any) => {
        const result = await remove(id);
       
        if(result.status == 400){
            return alert("This product have dependecies with categories, lists..");
        }

        let findedProducts:any = await handleSetSearchResultState(setSearchResult);
      
        if(findedProducts == false){
            setSearchResult([]);
            return;
        }
    }

    const listContent = searchResult;

    return (    
      <>
        <PrivateHeader/>
        <Main>
          <div className="inline-div">
            <SearchInput submitCallback={handlerFindSpecific} toFind={'categories'}/>
            <Link action={handlerCreateCategory} icon={<IoMdAdd/>} text={'Nova categoria'}/>
          </div>
          <CategoriesList contents={listContent} actionEdit={handlerEditCategory} actionDelete={handlerDelete} />
        </Main>
      </>
    );
}

export default Categories