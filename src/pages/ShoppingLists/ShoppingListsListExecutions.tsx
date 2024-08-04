import { List, ListEdit } from "../../templates/List/DefaultList/DeafaultLits";
import { ShoppingListExecutions } from "../../config/Interfaces/SystemEntities";

interface ShoppingListExecutionItem extends List{
    contents: ShoppingListExecutions[]
}

const setDefaultListItemPattern = (content:Array<ShoppingListExecutions>):Array<ShoppingListExecutions> => {
    const listItens = content.map((item:any)=>{
        return {
            id:item.id,
            title:item.id,
        }
    })

    return listItens;
}



export const ShoppingListsListExecutions:React.FC<ShoppingListExecutionItem> = ({ contents, actionEdit = () => {}, actionDelete = () => {}, detailActionOnClick = ()=>{console.log('oi')} }) => {
    return <ListEdit contents={setDefaultListItemPattern(contents)} 
                    actionEdit={actionEdit} 
                    actionDelete={actionDelete} 
                    detailActionOnClick={detailActionOnClick} />
}