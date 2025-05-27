import { Title } from "../../ui-resources/components/SubComponents/Title";
import { CategoryCreateForm } from "../../ui-resources/templates/Form/Category/CategoryForm";
import { create } from "../../services/Categories";
import { useNavigate } from "react-router-dom";
import { Main } from "../../ui-resources/templates/Structure/Main/Main";
import { PrivateHeader } from "../../ui-resources/templates/Structure/Headers/Headers";

export const CategoriesCreateForm:React.FC = () => {
  const navigate = useNavigate()

  const handleCreate = async (data:any) => {
    const returnApi = await create(data)
    if(returnApi != false){
        if(returnApi.status == 200){
          return navigate('/categories')
        }
    }
    alert('Ops...')
  }

    return (
      <Main>
        <PrivateHeader/>
        <Title content={"Criar nova categoria"}/>
        <CategoryCreateForm action={handleCreate} />
      </Main>
  );
}