import React, { useContext } from 'react'
import "./Header.css"
import headerFooterComponent from '../../config/interfaces/HeaderFooter';
import { BaseContext } from '../../config/contexts';
import { List, Item } from '../List/List';

const Header:React.FC<headerFooterComponent> = (props) => {

    const menu = useContext(BaseContext)[0];
 
    const {image={path:"src/assets/react.svg", alt:"logo"}} = props;

    return (
        <div className='divHeader'>
            <div id="image">
                <img src={image.path} alt={image.alt}/>
            </div>
            <div id="menu">
                <List>
                    { 
                        menu.map((item, index)=>{
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

export default Header;