import React from 'react';
import { PublicHeader } from '../../ui-resources/templates/Structure/Headers/Headers';
import { PublicFooter } from '../../ui-resources/templates/Structure/Footers/Footers';
import { Title } from '../../ui-resources/components/SubComponents/Title';
import { useNavigate } from 'react-router-dom';
import { CtaButton } from '../../ui-resources/templates/Buttons/Buttons';
import { Main2 } from '../../ui-resources/templates/Structure/Main/Main';

export const LandingPage:React.FC<any> = () => {

    const navigate = useNavigate();

    return (
        <>
          <PublicHeader />
          <Main2>
              <Title content="Seu app para economizar mais sem precisar pensar em números" />
              <CtaButton action={()=>{navigate('/createAccount')}} content="Comece agora mesmo"/>
          </Main2>
          <PublicFooter />
        </>
    );
}