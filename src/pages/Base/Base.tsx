import React, { useEffect, useState} from 'react';
import Header from '../../components/Structure/Header/Header.tsx';
import Footer from '../../components/Structure/Footer/Footer.tsx';
import {menuLinks, menuLinksLoged} from '../../config/menuLinks.tsx';
import './Base.css'
import { BaseContext, BaseContextPage } from '../../config/contexts.tsx';
import { BasePage } from '../../config/Interfaces/BasePage.tsx';


const Base:React.FC<BasePage> = (props) => {
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
            <BaseContext.Provider value={[links]}>
                <header>
                    { props.headerShow && <Header /> }
                </header>
            </ BaseContext.Provider>

            <BaseContextPage.Provider value={[props]}>
                <main>
                    <props.page/>
                </main>
            </BaseContextPage.Provider>
            
            <BaseContext.Provider value={[links]}>
                <footer>
                    { props.footerShow && <Footer /> }
                </footer>
            </ BaseContext.Provider>
        </>
    );
};

export default Base;
