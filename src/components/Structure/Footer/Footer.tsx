import React from 'react'
import "./Footer.css"
import Footer from '../../../config/Interfaces/Footer';
import { FooterContext } from '../../../config/contexts';

const Footer:React.FC<Footer> = ({ children }) => {

    return (
        <FooterContext.Provider value={[[{}]]}>
            <footer>
                { children }
            </footer>
        </FooterContext.Provider >
    )
}

export default Footer;