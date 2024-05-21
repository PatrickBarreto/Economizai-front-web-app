import { useNavigate } from "react-router-dom";
import { menuLinks, menuLinksLoged } from "../../config/menuLinks";
import { Item, List } from "../../components/Resources/List/List";
import './Headers.css'



export const PublicHeader:any = () => {
    const image= {path:"src/assets/react.svg", alt:"logo"};
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



export const PrivateHeader:any = () => {
    const image= {path:"src/assets/react.svg", alt:"logo"};
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