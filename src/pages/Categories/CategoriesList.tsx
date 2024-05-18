import { Categories } from "../../config/Interfaces/SystemEntities";
import { List, Item } from "../../components/Resources/List/List";

import { RiSearchLine, RiDeleteBack2Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";


interface ProductList {
    content:Categories[],
    actionEdit:Function,
    actionDelete:Function

}
interface ProductItem {
    product:Categories,
    actionEdit:Function,
    actionDelete:Function

}


//Component content
const PrepareItemList:React.FC<ProductItem> = ({product, actionEdit, actionDelete }) => {

    return (
        <>
            <div className="productImage">
                <RiSearchLine/>
            </div>
            <div className="productDetails">
                <p className="idProduct">{product.id}</p>
                <p className="produtctName">{product.name}</p>
                <span className="fastInfo">{product.volume}{product.unit_mensure}</span>
            </div>
            <div className="actionButtons">
                <a onClick={()=>{actionEdit(product.id ? product.id : 0)}}>
                    <TbEdit />
                </a>
                <a onClick={()=>{actionDelete(product.id)}}>
                    <RiDeleteBack2Line />
                </a >
            </div>
        </>
    );
}

export const CategoriesList:React.FC<ProductList> = ({ content, actionEdit, actionDelete }) => {
    return (
        <div id="divProductsList">
            <List id={"productsList"}>
            {
                content.map((product:any, index:any)=>{
                    return (
                        <Item key={index} className={"product"}>
                            <PrepareItemList product={product} actionEdit={actionEdit} actionDelete={actionDelete} />
                        </Item>
                    )
                })
            }
            </List>        
        </div>
    );
}