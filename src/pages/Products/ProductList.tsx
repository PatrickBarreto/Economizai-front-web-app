import { Product } from "../../config/Interfaces/SystemEntities";

import { DefaultList, List, contentDefaultItem } from "../../templates/List/Lists";

interface ProductList extends List{
    contents: Product[]
}


const setDefaultListItemPattern = (content:Array<Product>):Array<contentDefaultItem> => {
    const listItens = content.map((item:any)=>{
    return {
        id:item.id,
        title:item.name,
        description:item.type,
    }
})

return listItens;
}


export const ProductList:React.FC<ProductList> = ({ contents, actionEdit = ()=>{}, actionDelete = ()=>{}, detailActionOnClick = ()=>{}}) => {
    return <DefaultList contents={setDefaultListItemPattern(contents)} actionEdit={actionEdit} actionDelete={actionDelete} detailActionOnClick={detailActionOnClick} />
}



