import React, { useEffect, useState } from 'react';

import { IoMdAdd } from "react-icons/io";

import { create, findSpecific, update, remove, handleSetSearchResultState} from '../../services/ShoppingLists.tsx';

import { Link } from '../../ui-resources/components/SubComponents/Link.tsx';

import { ShoppingListsCreateForm, ShoppingListsEditForm } from './ShoppingListsForms.tsx';
import { PrivateHeader } from '../../ui-resources/templates/Structure/Headers/Headers.tsx';
import { ShoppingListsList } from './ShoppingListsList.tsx';
import { Main } from '../../ui-resources/templates/Structure/Main/Main.tsx';
import { SearchInput } from '../../ui-resources/templates/Search/Search-1.tsx';


const ShoppingLists:React.FC = () => {
    const [ searchResult, setSearchResult ] = useState([]);
    const [ showCreateForm, setShowCreateForm ] = useState(false);
    const [ showEditForm, setShowEditForm ] = useState(false);
    const [ createdShoppingList, setCreatedShoppingList ] = useState(0);
    const [ InputFormData, setInputFormData ] = useState({id:'',name:'', type:'', executions:[]});

    useEffect(()=>{
        const fetchData = async () => {
            handleSetSearchResultState(setSearchResult);
        }
        fetchData()
    },[createdShoppingList]);

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

    const showCreateBrandForm = () => {
        setShowEditForm(false);
        setShowCreateForm(true);
    }

    const handleCreate = async (data:any) => {
        const returnApi = await create(data)
        if(returnApi && returnApi.status == 200){
            setCreatedShoppingList(createdShoppingList + 1);
        }
        await handleSetSearchResultState(setSearchResult)       
        setShowCreateForm(false)
    }

    const handlerUpdate = async (data:any) => {
        const result = await update(data);
        if(result.status == 404){
            return alert("Not found");
        }
        await handleSetSearchResultState(setSearchResult);
        setShowEditForm(false);
    }

    //Passível de sair daqui e tornar algo abstrato
    const prepareEditFormData = async (id:number|string) => {
        const item = await findSpecific(id);
        setInputFormData(item[0]);
        setShowCreateForm(false)
        setShowEditForm(true);
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


    const toRender = searchResult;

    return (    
        <>
          { showCreateForm && <ShoppingListsCreateForm action={handleCreate} shoppingList={InputFormData}/> }
          { showEditForm && <ShoppingListsEditForm action={handlerUpdate} shoppingList={InputFormData}/> }
          <PrivateHeader/>
          <Main>
            <div className="inline-div">
              <SearchInput submitCallback={handlerFindSpecific} toFind={"shopping-list"}/>
              <Link action={showCreateBrandForm} icon={<IoMdAdd/>} text="Nova lista"/>
            </div>
            <ShoppingListsList contents={toRender} actionEdit={prepareEditFormData} actionDelete={handlerDelete}/>
          </Main>
        </>
    );
}

export default ShoppingLists