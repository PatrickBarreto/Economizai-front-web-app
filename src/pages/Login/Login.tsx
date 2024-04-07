
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { tryLogin } from '../../hooks/LoginHooks';

import Form from '../../components/Resources/Form/Form.tsx';
import Input from '../../components/Resources/Form/Input/Input.tsx';

import { Title } from '../../components/SubComponents/Title.tsx';

import { Main } from '../../components/Structure/Main/Main.tsx';
import Header from '../../components/Structure/Header/Header.tsx';
import Footer from '../../components/Structure/Footer/Footer.tsx';

import { PublicHeader } from '../../components/Templates/Header/PublicHeader.tsx';
import { PublicFooter } from '../../components/Templates/Footer/PublicFooter.tsx';



const Login:React.FC = () => {    
  const navigate = useNavigate();

  const loginValidator = async (data:any) => {
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
          <Title text="Olá, seja bem vindo"/>
          <Form 
            className={"loginForm"}
            submitCallback={loginValidator}
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
