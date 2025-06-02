import { Title } from "../../../ui-resources/components/SubComponents/Title";
import { create } from "../../../services/ShoppingLists";
import { Main } from "../../../ui-resources/templates/Structure/Main/Main";
import { PrivateHeader } from "../../../ui-resources/templates/Structure/Headers/Headers";
import { useNavigate } from "react-router-dom";
import { ShoppingListForm } from "../../../ui-resources/templates/Form/ShoppingLists/ShoppingListForm";


export const ShoppingListsCreateForm:React.FC = () => {
  const navigate = useNavigate()

  const handleCreate = async (data:any) => {
    const returnApi = await create(data)
    if(returnApi && returnApi.status == 200){
      navigate('/shopping-list', {
        relative: "path"
      })
    }
  }

  return (
        <Main>
          <PrivateHeader/>
            <Title content={"Criar Lista de Compras"}/>
            <ShoppingListForm action={handleCreate}/>
        </Main>
    );
}