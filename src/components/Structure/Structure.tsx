import React from 'react'
import { FooterContext, HeaderContext, MainContext } from '../../config/contexts';
import { Header as HeaderInterface, Footer as FooterInterface } from '../../config/Interfaces/Structure.tsx';
import "./Structure.css"



export const Header:React.FC<HeaderInterface> = ({ children, contexHeaderData = [[{}]] }) => {

    return (
        <HeaderContext.Provider value={contexHeaderData}>
            <header>
                { children }
            </header>
        </HeaderContext.Provider>
    )
}



export const Main:React.FC<any> = ({ children, contexMainData = [{}]}) => {
    return(
        <MainContext.Provider value={contexMainData}>
            <main>
                { children }
            </main>
        </MainContext.Provider>
    );
}



export const Footer:React.FC<FooterInterface> = ({ children }) => {

    return (
        <FooterContext.Provider value={[[{}]]}>
            <footer>
                { children }
            </footer>
        </FooterContext.Provider >
    )
}