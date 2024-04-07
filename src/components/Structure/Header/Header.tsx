import React from 'react'
import "./Header.css"
import Header from '../../../config/Interfaces/Header';
import { HeaderContext } from '../../../config/contexts';

const Header:React.FC<Header> = ({ children, contexHeaderData = [[{}]] }) => {

    return (
        <HeaderContext.Provider value={contexHeaderData}>
            <header>
                { children }
            </header>
        </HeaderContext.Provider>
    )
}

export default Header;