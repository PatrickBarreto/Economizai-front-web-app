import { menuLinks, menuLinksLoged } from "../../../../config/Links";
import { Item, List } from "../../../components/Resources/List/List";
import './Footers.css'


export const PublicFooter = () => {
    const image= {path:"src/ui-resources/assets/logo.png", alt:"logo"};
    return (
        <div className='publicFooter'>
            <div id="footerImage">
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


export const PrivateFooter = () => {
    const image= {path:"src/ui-resources/assets/logo.png", alt:"logo"};
    return (
        <div className='privateFooter'>
            <div id="footerImage">
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