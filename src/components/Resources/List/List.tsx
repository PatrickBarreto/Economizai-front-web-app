import React from 'react';
import { List as ListInterface, ItemList } from '../../../config/interfaces/List';
import "./List.css";

export const List:React.FC<ListInterface> = ({ children, className = '', id = ''}) => {
    return (
        <>
            <ul className={className} id={id}>
                { children }
            </ul>
        </>
     )
    }
   
    
export const Item:React.FC<ItemList> = ({ children, className, id, actionOnClick = ()=>{} }) => {
    return (
        <>
            <li onClick={actionOnClick} id={id} className={className} >
                { children }
            </li>
        </>
    )     
}