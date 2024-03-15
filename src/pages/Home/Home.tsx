import React, { useEffect, useState } from 'react'
import { specificPageProps } from '../../config/interfacePageProps';
import { useNavigate } from 'react-router-dom';
import './Home.css';


const Home:React.FC<specificPageProps> = (props) => {
    const navigate = useNavigate();

    function navigator(event: React.MouseEvent<HTMLAnchorElement>){
        const uri:string = event.currentTarget.dataset.value ? event.currentTarget.dataset.value : '';
        navigate(uri);
    }

    const [renderized, setRenderized] = useState(false);

    useEffect(() => {
        // Aguarde um curto período para garantir que a renderização tenha ocorrido
        const timeout = setTimeout(() => {
            setRenderized(true);
        }, 100);

        // Limpe o timeout ao desmontar o componente
        return () => clearTimeout(timeout);
    }, [renderized]);

    const routes = [
                        ['Home','/home'], 
                        ['Listas', '/shopping-list'], 
                        ['Produtos', '/products'], 
                        ['Marcas', '/brands']
                    ];
    

    return (
        <div className="homePage">
            <div className="divTitle">
                <h1>{props.propsPage[0].value}</h1>
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

    );
}

export default Home