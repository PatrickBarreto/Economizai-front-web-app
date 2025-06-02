import React, { useEffect, useState } from 'react';

import { IoMdAdd } from "react-icons/io";

import { findSpecific, remove, handleSetSearchResultState} from '../../services/ShoppingLists.tsx';

import { Link } from '../../ui-resources/components/SubComponents/Link.tsx';
import { PrivateHeader } from '../../ui-resources/templates/Structure/Headers/Headers.tsx';
import { ShoppingListsList } from '../../ui-resources/templates/List/ShoppingList/ShoppingListsList.tsx';
import { Main } from '../../ui-resources/templates/Structure/Main/Main.tsx';
import { SearchInput } from '../../ui-resources/templates/Search/Search-1.tsx';
import { useNavigate } from 'react-router-dom';


const ShoppingLists:React.FC = () => {
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

    const goToCreateShoppingListPage = () => {
      navigate('create', {
        relative: "path"
      })
    }

    const goToUpdateShoppingListPage = (id:string) => {
      navigate(id+'/edit', {
        relative: "path"
      })
    }


    const toRender = searchResult;

    return (    
        <>
          <PrivateHeader/>
          <Main>
            <div className="inline-div">
              <SearchInput submitCallback={handlerFindSpecific} toFind={"shopping-list"}/>
              <Link action={goToCreateShoppingListPage} icon={<IoMdAdd/>} text="Nova lista"/>
            </div>
            <ShoppingListsList contents={toRender} actionEdit={goToUpdateShoppingListPage} actionDelete={handlerDelete}/>
          </Main>
        </>
    );
}

export default ShoppingLists