import { Modal } from "../../ui-resources/templates/Modal/Modal";
import { Title } from "../../ui-resources/components/SubComponents/Title";
import { SubTitle } from "../../ui-resources/components/SubComponents/SubTitle";
import { BrandsForm as BrandFormTemplate} from "../../ui-resources/templates/Form/Brand/BrandsForm";
import { useEffect, useState } from "react";
import { Brand } from "../../config/Interfaces/SystemEntities";
import { handleSetSpecificBrand, updateBrand } from "../../services/Brands";
import { useLocation, useNavigate } from "react-router-dom";
import { Loading } from "../../ui-resources/templates/Loading/Loading";
import { Main } from "../../ui-resources/templates/Structure/Main/Main";
import { PrivateHeader } from "../../ui-resources/templates/Structure/Headers/Headers";

export const BrandUpdateForm:React.FC = () => {
  const navigate = useNavigate()
  const location:string[] = useLocation().pathname.split('/')

  const [brand, setBrand] = useState<Brand | undefined>(undefined)

  const handlerUpdate = async (data:any) => {
    const result = await updateBrand(data);
    if(result.status == 404){
      return alert("Not found");
    }
    navigate('/brands')
  }

  useEffect(()=>{
    const fetchData = async () => {
      await handleSetSpecificBrand(setBrand, location[2])
    }
    fetchData()
  },[])

  return (
    <>
      <Main>
        <PrivateHeader/>
        <Title content={"Editar Marca"}/>
        {brand && 
          <>
            <SubTitle content={"Id:"+brand?.id}/>
            <BrandFormTemplate action={handlerUpdate} brand={brand} />
          </>
        }
      </Main>
    </>

  );
}
