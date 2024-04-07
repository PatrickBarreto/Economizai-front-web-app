import { useContext } from "react";
import { menuLinks } from "../../../config/menuLinks";
import { Item, List } from "../../Resources/List/List";
import { HeaderContext } from "../../../config/contexts";

const image= {path:"src/assets/react.svg", alt:"logo"};


export const PublicHeader = () => {
    const headerContext = useContext(HeaderContext);
    console.log(headerContext);
    return (
        <div className='divHeader'>
            <div id="image">
                <img src={image.path} alt={image.alt}/>
            </div>
            <div id="menu">
                <List>
                    { 
                        menuLinks.map((item, index)=>{
                            return (
                                <Item className="itemMenu" key={index}>
                                    <a href={item.link}>{item.label}</a>
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