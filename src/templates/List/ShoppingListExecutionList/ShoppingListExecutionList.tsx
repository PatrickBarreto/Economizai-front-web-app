import React from "react";

import { List, Item } from "../../../components/Resources/List/List";

import { RiDeleteBack2Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import "./ShoppingListExecutionList.css";

//Exportar ao local apropriado

export interface List{
    contents: any[],
    actionEdit?: Function,
    actionDelete?: Function,
    detailActionOnClick?: Function
}

export interface DefaultListInterface extends List {
    contents: contentDefaultItem[]
}


export interface contentDefaultItem {
    id?: number,
    title?: string,
    description?: string
}


export interface DefaultItem {
    content: contentDefaultItem,
    actionEdit?: Function,
    actionDelete?: Function
}    


/**
 * This will return an JSX with item content.
 */
const ListEditItem:React.FC<DefaultItem> = ({ content, actionEdit = ()=>{}, actionDelete  = ()=>{} }) => {
    return (
        <>
            <div className="content">
                <p className="idContent">{content.id}</p>
                { content.title && <p className="titleContent">{content.title}</p> }
                { content.description && <p className="descriptionContent">{content.description}</p> }
            </div>

            <div className="actionButtons">
                <a onClick={()=>{actionEdit(content.id ? content.id : 0)}}>
                    <TbEdit />
                </a>
                <a onClick={()=>{actionDelete(content.id)}}>
                    <RiDeleteBack2Line />
                </a>
            </div>
        </>
    );
}





/**
 * This will return the List with their items
 */
export const ListEdit:React.FC<DefaultListInterface> = ({ contents, actionEdit = ()=>{} , actionDelete = ()=>{} , detailActionOnClick = ()=>{} }) => {
    return (
        <div id="divListEdit">
            <List id={"ListEdit"}>
            {
                contents.map((product:any, index:any)=>{
                    return (
                        <Item key={index} className={"listEditItem"} actionOnClick={()=>{detailActionOnClick(product.id)}}>
                            <ListEditItem content={product} actionEdit={actionEdit} actionDelete={actionDelete} />
                        </Item>
                    )
                })
            }
            </List>
        </div>
    );
}