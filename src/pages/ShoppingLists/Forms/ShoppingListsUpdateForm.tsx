import { Title } from "../../../ui-resources/components/SubComponents/Title";
import { handleSetSpecificShoppingList, update } from "../../../services/ShoppingLists";
import { useLocation, useNavigate } from "react-router-dom";
import { Main } from "../../../ui-resources/templates/Structure/Main/Main";
import { PrivateHeader } from "../../../ui-resources/templates/Structure/Headers/Headers";
import { useEffect, useState } from "react";
import { ShoppingList } from "../../../config/Interfaces/SystemEntities";
import { ShoppingListForm } from "../../../ui-resources/templates/Form/ShoppingLists/ShoppingListForm";
import { SubTitle } from "../../../ui-resources/components/SubComponents/SubTitle";


export const ShoppingListsUpdateForm:React.FC = () => {

  const [shoppingList, setShoppingList] = useState<ShoppingList | undefined>(undefined)

  const location = useLocation().pathname.split('/')
  const navigate = useNavigate()

  const handlerUpdate = async (data:any) => {
      const result = await update(data);
      if(result.status == 404){
          return alert("Not found");
      }
      navigate('/shopping-list', {
        relative: "path"
      })
  }

  useEffect(()=>{
    const exec = async () => {
      await handleSetSpecificShoppingList(setShoppingList, location[2])
    }
    exec()
  },[])

  return (
      <Main>
        <PrivateHeader/>
        <Title content={"Editar Lista de Compras"}/>
        {
          shoppingList && 
          <SubTitle content={"Id:"+shoppingList?.id}/> &&
          <ShoppingListForm action={handlerUpdate} shoppingList={shoppingList} />
        }
      </Main>

  );
}
