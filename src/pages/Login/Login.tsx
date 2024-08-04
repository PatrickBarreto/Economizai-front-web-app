
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { tryLogin } from '../../services/Login.tsx';

import Form from '../../components/Resources/Form/Form.tsx';
import Input from '../../components/Resources/Form/Input/Input.tsx';

import { Title } from '../../components/SubComponents/Title.tsx';

import { Header, Main, Footer } from '../../components/Structure/Structure.tsx';

import { PublicHeader } from '../../templates/Headers/Headers.tsx';
import { PublicFooter } from '../../templates/Footers/Footers.tsx';
import { z } from 'zod';


const zodLoginObject = z.object({
  email: z.string().email("Informe um email válido"),
  password: z.string()
});

const Login:React.FC = () => {    
  const navigate = useNavigate();
  
  const handlerTyLogin = async (data:any) => {

    const response:any = await tryLogin(data);
    if(response === true){
      navigate('/home');
    }
  }

  return (
    <>
      <Header>
          <PublicHeader />
      </Header>
      <Main>
        <div className="loginPage">
          <Title content="Olá, seja bem vindo"/>
          <Form 
            className={"loginForm"}
            submitCallback={handlerTyLogin}
            zodObject={zodLoginObject}
          >
            <Input 
              label={ {
                className:"email",
                value:"Email"
              }}
              type={ "text"}
              name={ "email"}
              placeholder={ "xxx@xxx.xx"}
              readonly={ false}
              required={ true}
            />
            <Input
              label={{
                className:"password",
                value:"Senha"
              }}
              type={ "password"}
              name={ "password"}
              autocomplete={ false }
              readonly={ false}
              required={ true}
            />
            <Input
              type={ "submit"}
              value={"Login"}
              name={ "submit"}
            />
          </Form>
        </div>
      </Main>
      <Footer>
          <PublicFooter />
      </Footer>
    </>
  );
};

export default Login;
