import { useNavigate } from 'react-router-dom';
import { tryLogin } from '../../services/Login.tsx';

import Form from '../../ui-resources/components/Resources/Form/Form.tsx';
import Input from '../../ui-resources/components/Resources/Form/Input/Input.tsx';

import { Title } from '../../ui-resources/components/SubComponents/Title.tsx';

import { Main3 as Main } from '../../ui-resources/templates/Structure/Main/Main';

import { z } from 'zod';

const zodLoginObject = z.object({
  email: z.string().email("Informe um email válido"),
  password: z.string()
});

const Login:React.FC = () => {    
  const navigate = useNavigate();
  
  const handlerTyLogin = async (data:any) => {

    const response:boolean|undefined = await tryLogin(data);
    
    if(response === true){
      navigate('/home');
    }
  }

  return (
    <>
      <Main>
        <div className="main-3-cotent">
          <div className="main-3-cotent-title">
            <Title content="Olha quem voltou... Bora economizar mais uma vez?"/>
          </div>
          <div className="main-3-cotent-body">
            <Form 
              className={"main-3-cotent-body-form"}
              submitCallback={handlerTyLogin}
              zodObject={zodLoginObject}
            >
              <Input 
                label={ {
                  className:"email",
                }}
                type={ "text"}
                name={ "email"}
                placeholder={ "Digite seu email"}
                readonly={ false}
                required={ true}
              />
              <Input
                label={{
                  className:"password",
                }}
                type={ "password"}
                name={ "password"}
                placeholder={ "*******"}
                autocomplete={ false }
                readonly={ false}
                required={ true}
              />
              <Input
              label={{
                className:"submit",
              }}
                type={ "submit"}
                value={"Login"}
                name={ "submit"}
              />
            </Form>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Login;
