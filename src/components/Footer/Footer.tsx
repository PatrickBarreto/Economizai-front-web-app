import React, { useContext } from 'react'
import "./Footer.css"
import headerFooterComponent from '../../config/Interfaces/HeaderFooter';
import { baseContext } from '../../pages/Base/Base';

const Footer:React.FC<headerFooterComponent> = (props) => {
    
    const menu:Array<any> = useContext(baseContext)[0];

    const {image={path:"src/assets/react.svg", alt:"logo"}} = props;

    return (
        <div className="divFooter">
            <div id="image">
                <img src={image.path} alt={image.alt}/>
            </div>
            <div id="menu">
                <ul>
                    {menu.map((item, index)=>{
                        return <li className="itemMenu" key={index}><a href={item.link}>{item.label}</a></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Footer;