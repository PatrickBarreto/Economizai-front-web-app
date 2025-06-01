import { Title } from "../../ui-resources/components/SubComponents/Title";
import { SubTitle } from "../../ui-resources/components/SubComponents/SubTitle";
import { Categories } from "../../config/Interfaces/SystemEntities";
import { CategoryUpdateForm } from "../../ui-resources/templates/Form/Category/CategoryForm";
import { useEffect, useState } from "react";
import { handleSetSpecificCategory, update } from "../../services/Categories";
import { useLocation, useNavigate } from "react-router-dom";
import { Main } from "../../ui-resources/templates/Structure/Main/Main";
import { PrivateHeader } from "../../ui-resources/templates/Structure/Headers/Headers";
import { Loading } from "../../ui-resources/templates/Loading/Loading";

interface CategoryForm {
    category?:Categories
}

export const CategoriesEditForm:React.FC<CategoryForm> = () => { 
  const navigate = useNavigate()
  const location = useLocation().pathname.split('/')
  const [ category, setCategory ] = useState<Categories|undefined>(undefined); 
  
  useEffect(()=>{
    const fetchData = async () =>{
      await handleSetSpecificCategory(setCategory, location[2]);
    }
    fetchData()
  },[]);
  const handlerUpdate = async (data:any) => {
    const result = await update(data);
    if(result.status == 404){
        return alert("Not found");
    }
    navigate('/categories')
  }

  return (
    <Main>
      <PrivateHeader/>
      {category && 
        <>
          <Title content={"Editar Categoria"}/>
          <SubTitle content={"A categoria Id: "+category?.id}/>
          <CategoryUpdateForm action={handlerUpdate} category={category} />
        </>
      }
      {!category && <Loading/>}
    </Main>
  );
}