import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Header from '../../components/Structure/Header/Header';
import { PublicHeader } from '../../components/Templates/Header/PublicHeader';
import { Main } from '../../components/Structure/Main/Main';
import { PublicFooter } from '../../components/Templates/Footer/PublicFooter';
import Footer from '../../components/Structure/Footer/Footer';


const Home:React.FC = () => {
    const navigate = useNavigate();

    function navigator(event: React.MouseEvent<HTMLAnchorElement>){
        const uri:string = event.currentTarget.dataset.value ? event.currentTarget.dataset.value : '';
        navigate(uri);
    }

    const routes = [
                        ['Home','/home'], 
                        ['Listas', '/shopping-list'], 
                        ['Produtos', '/products'], 
                        ['Marcas', '/brands']
                    ];
    

    return (
        <>
            <Header>
                <PublicHeader/>
            </Header>
            <Main>
                <div className="homePage">
                    <div className="divTitle">
                        <h1>Home</h1>
                    </div>

                    <div className='divHomeList'>
                        {routes.map((route, index)=>{
                            return (
                                <a key={index} data-value={route[1]} onClick={navigator}>
                                    <div className="divHomeListItens">
                                        <p className="divHomeListItensText">{route[0]}</p>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </Main>
            <Footer>
                <PublicFooter />
            </Footer>
        </>

    );
}

export default Home