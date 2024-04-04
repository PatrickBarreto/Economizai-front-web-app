import React, {createContext, useContext, useEffect, useState} from 'react';
import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import {menuLinks, menuLinksLoged} from '../../config/menuLinks.tsx';
import './Base.css'

interface basePageProps {
    page: JSX.ElementType;
    typePage:string;
    headerShow?:boolean;
    footerShow?:boolean;
}

export const baseContext = createContext([]);
export const baseContextPage = createContext([]);

const Base:React.FC<basePageProps> = (props) => {
    const [links, setLinks] = useState([{label: '', link: ''}]);
   
    useEffect(()=>{
        if(props.typePage === 'loged'){
            setLinks(menuLinksLoged);
        }else{
            setLinks(menuLinks);
        }
    }),[];

    return (
        <>
            <baseContext.Provider value={[links]}>
                <header>
                    { props.headerShow && <Header /> }
                </header>
            </ baseContext.Provider>

            <baseContextPage.Provider value={[props]}>
                <main>
                    <props.page/>
                </main>
            </baseContextPage.Provider>
            
            <baseContext.Provider value={[links]}>
                <footer>
                    { props.footerShow && <Footer /> }
                </footer>
            </ baseContext.Provider>
        </>
    );
};

export default Base;
