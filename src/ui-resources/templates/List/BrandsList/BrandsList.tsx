import { Brand } from "../../../../config/Interfaces/SystemEntities";
import { List, Item } from "../../../../ui-resources/components/Resources/List/List";

import {RiDeleteBack2Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import '../../styles/List.css'

interface BrandList {
    content:Brand[],
    actionEdit:Function,
    actionDelete:Function

}
interface BrandItem {
    brand:Brand,
    actionEdit:Function,
    actionDelete:Function

}

const tagsMock = [
  {name: "proteina"},
  {name: "carne"},
]

//Component content
const PrepareItemList:React.FC<BrandItem> = ({brand, actionEdit, actionDelete }) => {
    return (
      <>
        <div className="itemDiv">
         
          <div className="itemDetails">
            <div className="itemDetailsContent">
              <p className="itemName">{brand.name}</p>
              <p className="itemType"> Tipo: {brand.type}</p>
            </div>

            <div className="itemTags">
              {tagsMock.map((tag)=>{
                return <span className="itemTag">{tag.name}</span>
              })}
            </div>
          </div>
          
          <div className="itemActionButtonsDiv">
            <div className="itemActionButtons">
              <a onClick={()=>{actionEdit(brand.id ? brand.id : 0)}}>
                <TbEdit />
              </a>
              <span>-</span>
              <a onClick={()=>{actionDelete(brand.id)}}>
                <RiDeleteBack2Line />
              </a >
            </div>
          </div>

        </div>
      </>
    );
}

export const BrandList:React.FC<BrandList> = ({ content, actionEdit, actionDelete }) => {
    return (
      <div className="listDiv">
        <List className={"list"}>
          {content.map((brand:any, index:any)=>{
            return (
              <Item key={index} className={"item"}>
                <PrepareItemList brand={brand} actionEdit={actionEdit} actionDelete={actionDelete} />
              </Item>
            )
          })}
        </List>        
      </div>
    );
}