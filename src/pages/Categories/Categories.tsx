import React, { useEffect, useState } from 'react';

import { IoMdAdd } from "react-icons/io";


import { create, findSpecific, update, remove, handleSetSearchResultState} from '../../services/Categories.tsx';

import { SearchInput } from '../../components/Resources/Search/Search.tsx';
import { Header, Footer, Main} from '../../components/Structure/Structure.tsx';
import { Link } from '../../components/SubComponents/Link.tsx';

import { CategoriesCreateForm, CategoriesEditForm } from './CategoriesForms.tsx';
import { PrivateHeader } from '../../templates/Headers/Headers.tsx';
import { PrivateFooter } from '../../templates/Footers/Footers.tsx';
import { Title } from '../../components/SubComponents/Title.tsx';

import { CategoriesList } from './CategoriesList.tsx';
import './Categories.css';


const Categories:React.FC = () => {
    const [ searchResult, setSearchResult ] = useState([]);
    const [ showCreateForm, setShowCreateForm ] = useState(false);
    const [ showEditForm, setShowEditForm ] = useState(false);
    const [ createdCategory, setCreatedCategory ] = useState(0);
    const [ categoryInputFormEdit, setCategoryInputFormEdit ] = useState({id:'',name:''});



    useEffect(()=>{
        const fetchData = async () => {
            handleSetSearchResultState(setSearchResult);
        }
        fetchData()
    },[createdCategory]);




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
        if(returnApi != false){
            if(returnApi.status == 200){
                setCreatedCategory(createdCategory + 1);
            }
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


    
    const prepareEditFormData = async (id:number|string) => {
        const category = await findSpecific(id);
        setCategoryInputFormEdit(category[0]);
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

    const listContent = searchResult;

    return (    
        <>
            { showCreateForm && <CategoriesCreateForm action={handleCreate}/> }
            { showEditForm && <CategoriesEditForm action={handlerUpdate} category={categoryInputFormEdit}/> }
            <Header>
                <PrivateHeader/>
            </Header>
            <Main>
                <Title content='Categorias'/>
                <SearchInput submitCallback={handlerFindSpecific}/>
                <Link action={showCreateBrandForm} icon={<IoMdAdd/>} text="Adicionar uma nova categoria"/>
                <CategoriesList contents={listContent} actionEdit={prepareEditFormData} actionDelete={handlerDelete} />
            </Main>
            <Footer>
                <PrivateFooter/>
            </Footer>
        </>
    );
}

export default Categories