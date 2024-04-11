
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { tryLogin } from '../../services/Login.tsx';

import Form from '../../components/Resources/Form/Form.tsx';
import Input from '../../components/Resources/Form/Input/Input.tsx';

import { Title } from '../../components/SubComponents/Title.tsx';

import { Header, Main, Footer } from '../../components/Structure/Structure.tsx';

import { HeaderTemplate } from '../../templates/Header/Header.tsx';
import { PublicFooter } from '../../templates/Footer/PublicFooter.tsx';



const Login:React.FC = () => {    
  
  const handlerTyLogin = async (data:any) => {
    const navigate = useNavigate();

    const response:any = await tryLogin(data);
    if(response === true){
      navigate('/home');
    }
  }

  return (
    <>
      <Header>
          <HeaderTemplate />
      </Header>
      <Main>
        <div className="loginPage">
          <Title text="Olá, seja bem vindo"/>
          <Form 
            className={"loginForm"}
            submitCallback={handlerTyLogin}
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
