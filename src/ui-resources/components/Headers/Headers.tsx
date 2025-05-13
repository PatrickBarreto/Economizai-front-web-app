import { useNavigate } from "react-router-dom";
import { menuLinks, menuLinksLoged } from "../../../config/Links";
import { Item, List } from "../Resources/List/List";


interface HeaderProp {
    image:{
      path: string;
      alt: string
    }
}


export const PublicHeader:any = ({ image }:HeaderProp) => {
  const navigate = useNavigate();
    return (
        <div className='publicHeader'>
            <div id="image" onClick={()=>{navigate('/')}}>
                <img src={image.path} alt={image.alt}/>
            </div>
            <div id="menu">
                <List>
                    { 
                        menuLinks.map((item, index)=>{
                            return (
                                <Item className="itemMenu" key={index}>
                                    <a onClick={()=>{navigate(item.link)}}>{item.label}</a>
                                </Item>
                                )
                            }
                        )
                    }
                </List>
            </div>
        </div>
    )
}



export const PrivateHeader:any =({ image }:HeaderProp) => {
    const navigate = useNavigate();
    return (
        <div className='privateHeader'>
            <div id="image" onClick={()=>{navigate('/')}}>
              <img src={image.path} alt={image.alt}/>
            </div>
            <div id="menu">
              <List>
                { 
                  menuLinksLoged.map((item, index)=>{
                    return (
                        <Item className="itemMenu" key={index}>
                            <a onClick={()=>{navigate(item.link)}}>{item.label}</a>
                        </Item>
                        )
                    }
                  )
                }
              </List>
            </div>
        </div>
    )
}