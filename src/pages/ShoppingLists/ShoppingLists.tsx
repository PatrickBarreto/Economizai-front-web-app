import React, { useEffect, useState } from 'react';

import { IoMdAdd } from "react-icons/io";
import './ShoppingLists.css';

import { create, findSpecific, update, remove, handleSetSearchResultState} from '../../services/ShoppingLists.tsx';

import { SearchInput } from '../../components/Resources/Search/Search.tsx';
import { Header, Footer, Main} from '../../components/Structure/Structure.tsx';
import { Link } from '../../components/SubComponents/Link.tsx';

import { ShoppingListsCreateForm, ShoppingListsEditForm } from './ShoppingListsForms.tsx';
import { PrivateHeader } from '../../templates/Headers/Headers.tsx';
import { PublicFooter } from '../../templates/Footers/Footers.tsx';
import { ShoppingListsList } from './ShoppingListsList.tsx';
import { Title } from '../../components/SubComponents/Title.tsx';


const ShoppingLists:React.FC = () => {
    const [ searchResult, setSearchResult ] = useState([]);
    const [ showCreateForm, setShowCreateForm ] = useState(false);
    const [ showEditForm, setShowEditForm ] = useState(false);
    const [ createdShoppingList, setCreatedShoppingList ] = useState(0);
    const [ InputFormEdit, setInputFormEdit ] = useState({id:'',name:'', type:''});

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
        if(returnApi.status == 200){
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
        setInputFormEdit(item[0]);
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
            { showCreateForm && <ShoppingListsCreateForm action={handleCreate}/> }
            { showEditForm && <ShoppingListsEditForm action={handlerUpdate} shoppingList={InputFormEdit}/> }
            <Header>
                <PrivateHeader/>
            </Header>
            <Main>
                <Title content='Listas de Compras'/>
                <SearchInput submitCallback={handlerFindSpecific}/>
                <Link action={showCreateBrandForm} icon={<IoMdAdd/>} text="Adicionar uma lista de compras"/>
                <ShoppingListsList contents={toRender} actionEdit={prepareEditFormData} actionDelete={handlerDelete}/>
            </Main>
            <Footer>
                <PublicFooter/>
            </Footer>
        </>
    );
}

export default ShoppingLists