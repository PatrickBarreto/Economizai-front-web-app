import { useNavigate } from "react-router-dom";
import { menuLinks, menuLinksLoged } from "../../config/menuLinks";
import { Item, List } from "../../components/Resources/List/List";
import './Header.css'







export const HeaderTemplate:any = ({type = 'public'}) => {
    const image= {path:"src/assets/react.svg", alt:"logo"};
    const navigate = useNavigate();
    
    
    let item:{}[] = [];
    
    switch(type){
        case 'public' : item = menuLinks
        break;
        case 'logged' : item = menuLinksLoged
        break
        default: item = menuLinks
    }

    return (
        <div className='divHeader'>
            <div id="image" onClick={()=>{navigate('/')}}>
                <img src={image.path} alt={image.alt}/>
            </div>
            <div id="menu">
                <List>
                    { 
                        item.map((item, index)=>{
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