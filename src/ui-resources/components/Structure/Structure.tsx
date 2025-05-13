import React from 'react'
import { FooterContext, HeaderContext, MainContext } from '../../../config/contexts.tsx';
import { Header as HeaderInterface, Footer as FooterInterface, Main as MainInterface } from '../../../config/Interfaces/Structure.tsx';

export const Header:React.FC<HeaderInterface> = ({ children, contexHeaderData = [[{}]] }) => {

    return (
        <HeaderContext.Provider value={contexHeaderData}>
            <header>
                { children }
            </header>
        </HeaderContext.Provider>
    )
}


export const Main:React.FC<MainInterface> = ({ children, contexMainData = [{}]}) => {
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