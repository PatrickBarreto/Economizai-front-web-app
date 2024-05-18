import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { Header, Footer, Main } from '../../components/Structure/Structure.tsx';
import { HeaderTemplate } from '../../templates/Header/Header.tsx';
import { PublicFooter } from '../../templates/Footer/PublicFooter.tsx';

const Home:React.FC = () => {
    const navigate = useNavigate();

    function navigator(event: React.MouseEvent<HTMLAnchorElement>){
        const uri:string = event.currentTarget.dataset.value ? event.currentTarget.dataset.value : '';
        navigate(uri);
    }

    const routes = [
                        ['Listas', '/shopping-list'], 
                        ['Produtos', '/products'], 
                        ['Marcas', '/brands'],
                        ['Categorias', '/categories']
                    ];
    

    return (
        <>
            <Header>
                <HeaderTemplate type={'logged'}/>
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