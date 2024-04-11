import { menuLinks } from "../../config/menuLinks";
import { Item, List } from "../../components/Resources/List/List";
import './PublicFooter.css'


export const PublicFooter = () => {
    const image= {path:"src/assets/react.svg", alt:"logo"};
    return (
        <div className='divFooter'>
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