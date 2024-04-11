import React from 'react';
import { List as ListInterface, ItemList } from '../../../config/interfaces/List';


export const List:React.FC<ListInterface> = ({ children, className = '', id = ''}) => {
    return (
        <>
            <ul className={className} id={id}>
                { children }
            </ul>
        </>
     )
    }
   
    
export const Item:React.FC<ItemList> = ({ children, className, id }) => {
    return (
        <>
            <li id={id} className={className} >
                { children }
            </li>
        </>
    )     
}