import React, { useEffect, useState } from 'react';

import { IoMdAdd } from "react-icons/io";

import { findSpecificBrand, deleteBrand, handleSetSearchResultState} from '../../services/Brands.tsx';

import { Link } from '../../ui-resources/components/SubComponents/Link.tsx';

import { PrivateHeader } from '../../ui-resources/templates/Structure/Headers/Headers.tsx';
import { SearchInput } from '../../ui-resources/templates/Search/Search-1.tsx';
import { Main } from '../../ui-resources/templates/Structure/Main/Main.tsx';

import { BrandList } from '../../ui-resources/templates/List/BrandsList/BrandsList.tsx';
import { useNavigate } from 'react-router-dom';
import { Brand } from '../../config/Interfaces/SystemEntities.tsx';


const Brands:React.FC = () => {
    const [ searchResult, setSearchResult ] = useState<Brand[] | []>([]);
    
    const navigate = useNavigate()

    useEffect(()=>{
      const fetchData = async () => {
          handleSetSearchResultState(setSearchResult);
      }
      fetchData()
    },[]);

    const searchForSpecificBrand = async (data:any) => {
      if(data.searchBrands == ''){
        await handleSetSearchResultState(setSearchResult);
        return;
      }
      let response:any = await findSpecificBrand(data.searchBrands)
      if(response){
          setSearchResult(response)
      }else{
          return alert('Ops, not found')
      }
    }

    const goToUpdateForm = (id:any) => {
      navigate(`${id}/edit`, {
        relative: "path"
      })
    }

    const goToCreateForm = () => {
      navigate(`create`, {
        relative: "path"
      })
    }

    const handlerDelete = async (id:any) => {
      const result = await deleteBrand(id);
      if(result.status == 400){
          return alert("This product have dependecies with categories, lists..");
      }
      navigate('/brands')
    }

    return (
        <>
          <PrivateHeader/>
          <Main>
            <div className="inline-div">
              <SearchInput submitCallback={searchForSpecificBrand} toFind='brands'/>
              <Link action={(goToCreateForm)} icon={<IoMdAdd/>} text="Nova marca"/>
            </div>
            <BrandList content={searchResult} actionEdit={goToUpdateForm} actionDelete={handlerDelete}/>
          </Main>
        </>
    );
}

export default Brands