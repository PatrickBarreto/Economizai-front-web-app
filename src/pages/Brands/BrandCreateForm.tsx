import { Title } from "../../ui-resources/components/SubComponents/Title";
import { BrandsForm as BrandFormTemplate} from "../../ui-resources/templates/Form/Brand/BrandsForm";
import { createBrand } from "../../services/Brands";
import { useNavigate } from "react-router-dom";
import { Main } from "../../ui-resources/templates/Structure/Main/Main";
import { PrivateHeader } from "../../ui-resources/templates/Structure/Headers/Headers";

export const BrandCreateForm:React.FC = () => {

  const navigate = useNavigate()

  const handlerCreate = async (data:any) => {
    const returnApi = await createBrand(data)
    if(returnApi.status == 200){
      return navigate('/brands')
    } 
    alert('Ops..')
  }

  return (
    <>
      <Main>
        <PrivateHeader/>
        <Title content={"Criar nova marca"}/>
        <BrandFormTemplate action={handlerCreate} />
      </Main>
    </>

  );
}
