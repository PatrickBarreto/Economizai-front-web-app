import React from 'react';
import { Footer, Header, Main } from '../../components/Structure/Structure';
import { PublicHeader } from '../../templates/Headers/Headers';
import { PublicFooter } from '../../templates/Footers/Footers';
import Form from '../../components/Resources/Form/Form';
import Input from '../../components/Resources/Form/Input/Input';
import { Title } from '../../components/SubComponents/Title';
import { createAccount } from '../../services/Account';
import { z } from 'zod';


const handleCreateAccount:any = async (data:any) => {
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
            <Header>
                <PublicHeader/>
            </Header>
            <Main>
                <Title content={"Criar Conta"} />
                <Form className={"formCreateAccount"} submitCallback={(data:Object)=>{handleCreateAccount(data)}} zodObject={zodCreateAccountObject}>
                    <Input 
                        label={{
                            className:"nameInput",
                            value:"Nome"
                        }}
                        name={"name"}
                        required={true}
                    />
                    <Input 
                       label={{
                            className:"phoneInput",
                            value:"Telefone"
                        }}
                        name={"phone"}
                        required={true}
                    />
                    <Input 
                       label={{
                            className:"emailInput",
                            value:"Email"
                        }}
                        name={"email"}
                        type={"email"}
                        required={true}
                    />
                    <Input 
                       label={{
                            className:"passwordInput",
                            value:"Senha"
                        }}
                        name={"password"}
                        type={"password"}
                        autocomplete={false}
                        required={true}
                    />
                    <Input 
                        name={"submitButton"}
                        type={"submit"}
                        value={"Criar conta"}
                    />
                </Form>
            </Main>
            <Footer>
                <PublicFooter />
            </Footer>
        </>
    )
}