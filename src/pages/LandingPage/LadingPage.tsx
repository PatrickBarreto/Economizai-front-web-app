import React from 'react';
import { Footer, Header, Main } from '../../components/Structure/Structure';
import { HeaderTemplate } from '../../templates/Header/Header';
import { PublicFooter } from '../../templates/Footer/PublicFooter';
import { Title } from '../../components/SubComponents/Title';
import { useNavigate } from 'react-router-dom';
import { CtaButton } from '../../templates/Button/CtaButton';

export const LandingPage:React.FC<any> = () => {

    const navigate = useNavigate();


    return (
        <>
            <Header>
                <HeaderTemplate />
            </Header>
            <Main >
                <Title content="Economizaí" />
                <CtaButton action={()=>{navigate('/login')}} content="Login"/>
                <CtaButton action={()=>{navigate('/createAccount')}} content="Criar Conta"/>
            </Main>
            <Footer>
                <PublicFooter />
            </Footer>
        </>
    );
}