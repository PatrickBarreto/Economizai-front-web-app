import { DefaultList, List, contentDefaultItem } from "../../templates/List/Lists";
import { Categories } from "../../config/Interfaces/SystemEntities";

interface CategoryList extends List{
    contents: Categories[]
}

const setDefaultListItemPattern = (content:Array<Categories>):Array<contentDefaultItem> => {
        const listItens = content.map((item:any)=>{
        return {
            id:item.id,
            title:item.name,
            description:item.name,
        }
    })

    return listItens;
}



export const CategoriesList:React.FC<CategoryList> = ({ contents, actionEdit = () => {}, actionDelete = () => {}, detailActionOnClick = ()=>{} }) => {
    return <DefaultList contents={setDefaultListItemPattern(contents)} actionEdit={actionEdit} actionDelete={actionDelete} detailActionOnClick={detailActionOnClick} />
}