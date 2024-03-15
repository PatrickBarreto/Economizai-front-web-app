import React from 'react';
import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import {menuLinks, menuLinksLoged} from '../../config/menuLinks.tsx';
import { basePageProps } from '../../config/interfacePageProps.tsx';
import './Base.css'

const logoPath:string = "src/assets/react.svg";
const logoAlt:string = "logo";

const Base:React.FC<basePageProps> = (props) => {

    const links = props.typePage === 'loged' ? menuLinksLoged : menuLinks;

    const PageContent = props.page;
  
    return (
        <>
            <header>
                {props.headerShow &&<Header 
                                        image={{
                                        path: logoPath,
                                        alt: logoAlt 
                                        }}
                                        menu={links}>
                                </Header>
                }
            </header>
            <main>
                <PageContent propsPage={props.propsPage} />
            </main>
            <footer>
                {props.footerShow && <Footer
                                        image={{
                                        path: logoPath,
                                        alt: logoAlt 
                                        }}
                                        menu={links}>
                                    </Footer>
                }
            </footer>
        </>
    );
};

export default Base;
