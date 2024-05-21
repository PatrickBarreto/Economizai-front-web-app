import React, { useEffect, useState } from 'react';

import { IoMdAdd } from "react-icons/io";
import './Brands.css';

import { createBrand, findSpecificBrand, updateBrand, deleteBrand, handleSetSearchResultState} from '../../services/Brands.tsx';

import { SearchInput }              from '../../components/Resources/Search/Search.tsx';
import { Header, Footer, Main}      from '../../components/Structure/Structure.tsx';
import { Link }                     from '../../components/SubComponents/Link.tsx';

import { BrandCreateForm, BrandEditForm } from './BrandForms.tsx';
import { PrivateHeader }                  from '../../templates/Headers/Headers.tsx';
import { PrivateFooter }                  from '../../templates/Footers/Footers.tsx';
import { BrandList } from './BrandList.tsx';
import { Title } from '../../components/SubComponents/Title.tsx';


const Brands:React.FC = () => {
    const [ searchResult, setSearchResult ] = useState([]);
    const [ showCreateForm, setShowCreateForm ] = useState(false);
    const [ showEditForm, setShowEditForm ] = useState(false);
    const [ createdBrand, setCreatedBrand ] = useState(0);
    const [ brandInputFormEdit, setBrandInputFormEdit ] = useState({id:'',name:'',type:''});

    useEffect(()=>{
        const fetchData = async () => {
            handleSetSearchResultState(setSearchResult);
        }
        fetchData()
    },[createdBrand]);

    const handlerFindSpecific = async (data:any) => {
        if(data.searchProducts == ''){
            await handleSetSearchResultState(setSearchResult);
            return;
        }

        let response:any = await findSpecificBrand(data.searchProducts)

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
        const returnApi = await createBrand(data)
        if(returnApi.status == 200){
            setCreatedBrand(createdBrand + 1);
        }
        await handleSetSearchResultState(setSearchResult)       
        setShowCreateForm(false)
    }

    const handlerUpdate = async (data:any) => {
        const result = await updateBrand(data);
        if(result.status == 404){
            return alert("Not found");
        }
        await handleSetSearchResultState(setSearchResult);
        setShowEditForm(false);
    }

    const prepareEditFormData = async (id:number|string) => {
        const product = await findSpecificBrand(id);
        setBrandInputFormEdit(product[0]);
        setShowCreateForm(false)
        setShowEditForm(true);
    }



    const handlerDelete = async (id:any) => {
        const result = await deleteBrand(id);
       
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
            { showCreateForm && <BrandCreateForm action={handleCreate}/> }
            { showEditForm && <BrandEditForm action={handlerUpdate} brand={brandInputFormEdit}/> }
            <Header>
                <PrivateHeader/>
            </Header>
            <Main>
                <Title content='Marcas'/>
                <SearchInput submitCallback={handlerFindSpecific}/>
                <Link action={showCreateBrandForm} icon={<IoMdAdd/>} text="Adicionar uma nova marca"/>
                <BrandList content={toRender} actionEdit={prepareEditFormData} actionDelete={handlerDelete}/>
            </Main>
            <Footer>
                <PrivateFooter/>
            </Footer>
        </>
    );
}

export default Brands