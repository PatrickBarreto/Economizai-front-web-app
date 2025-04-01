import React from 'react';

import { Main3 as Main } from '../../ui-resources/templates/Structure/Main/Main';

import { createAccount } from '../../services/Account';
import { z } from 'zod';
import { Title } from '../../ui-resources/components/SubComponents/Title';
import Form from '../../ui-resources/components/Resources/Form/Form';
import Input from '../../ui-resources/components/Resources/Form/Input/Input';

const handlerCreateAccount:any = async (data:any) => {
  //Redirecionar para home com ususário já logado.
    const resultCreate = await createAccount(data);

    if(resultCreate === false){
        return alert('Error');
    }
    return alert('Conta criada');
}

const zodCreateAccountObject = z.object({
    name: z.string(),
    phone: z.string().max(12, "máximo 11 digitos"),
    email: z.string(),
    password: z.string()
});


export const CreareAcccount:React.FC<any> = () => {
  return (
    <>
      <Main>
        <div className="main-3-cotent">
          <div className="main-3-cotent-title">
            <Title content="Não sei você, mas aqui pagamos sempre menos pela mesma coisa"/>
          </div>

          <div className="main-3-cotent-body">
          <Form 
              className={"main-3-cotent-body-form"}
              submitCallback={handlerCreateAccount}
              zodObject={zodCreateAccountObject}
            >
              <Input 
                label={ {
                  className:"name",
                }}
                type={ "text"}
                name={ "name"}
                placeholder={ "Digite seu nome"}
                readonly={ false }
                required={ true }
              />
              <Input 
                label={ {
                  className:"email",
                }}
                type={ "text"}
                name={ "email"}
                placeholder={ "Digite seu email"}
                readonly={ false }
                required={ true }
              />
              <Input 
                label={ {
                  className:"phone",
                }}
                type={ "text"}
                name={ "phone"}
                placeholder={ "Digite seu celular"}
                readonly={ false }
                required={ true }
              />
              <Input
                label={{
                  className:"password",
                }}
                type={ "password"}
                name={ "password"}
                placeholder={ "*******"}
                autocomplete={ false }
                readonly={ false }
                required={ true }
              />
              <Input
              label={{
                className:"submit",
              }}
                type={ "submit"}
                value={"Criar conta"}
                name={ "submit"}
              />
            </Form>
          </div>
        </div>
      </Main>
    </>
  )
}