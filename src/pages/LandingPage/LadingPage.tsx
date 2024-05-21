import React from 'react';
import { Footer, Header, Main } from '../../components/Structure/Structure';
import { PublicHeader } from '../../templates/Headers/Headers';
import { PublicFooter } from '../../templates/Footers/Footers';
import { Title } from '../../components/SubComponents/Title';
import { useNavigate } from 'react-router-dom';
import { CtaButton } from '../../templates/Buttons/Buttons';

export const LandingPage:React.FC<any> = () => {

    const navigate = useNavigate();


    return (
        <>
            <Header>
                <PublicHeader />
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