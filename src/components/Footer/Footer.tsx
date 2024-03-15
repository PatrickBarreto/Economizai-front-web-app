import React from 'react'
import "./Footer.css"
import headerFooterComponent from '../../config/interfaceHeaderFooter';

const Footer:React.FC<headerFooterComponent> = (props) => {
    return (
        <div className="divFooter">
            <div id="image">
                <img src={props.image.path} alt={props.image.alt}/>
            </div>
            <div id="menu">
                <ul>
                    {props.menu.map((item, index)=>{
                        return <li className="itemMenu" key={index}><a href={item.link}>{item.label}</a></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Footer;