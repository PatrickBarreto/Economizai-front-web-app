import { DefaultList, List, contentDefaultItem } from "../../templates/List/DefaultList/DeafaultLits";
import { ShoppingList } from "../../config/Interfaces/SystemEntities";

interface ShoppingListList extends List{
    contents: ShoppingList[]
}

const setDefaultListItemPattern = (content:Array<ShoppingList>):Array<contentDefaultItem> => {
    const listItens = content.map((item:any)=>{
        return {
            id:item.id,
            title:item.name,
            description:item.type,
        }
    })

    return listItens;
}



export const ShoppingListsList:React.FC<ShoppingListList> = ({ contents, actionEdit = () => {}, actionDelete = () => {}, detailActionOnClick = ()=>{console.log('oi')} }) => {
    return <DefaultList contents={setDefaultListItemPattern(contents)} actionEdit={actionEdit} actionDelete={actionDelete} detailActionOnClick={detailActionOnClick} />
}