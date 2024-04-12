import React from 'react';
import { Footer, Header, Main } from '../../components/Structure/Structure';
import { HeaderTemplate } from '../../templates/Header/Header';
import { PublicFooter } from '../../templates/Footer/PublicFooter';
import Form from '../../components/Resources/Form/Form';
import Input from '../../components/Resources/Form/Input/Input';
import { Title } from '../../components/SubComponents/Title';
import { createAccount } from '../../services/Account';


const handleCreateAccount:any = async (data:any) => {
    const resultCreate = await createAccount(data);

    if(resultCreate === false){
        return alert('Error');
    }
    return alert('Conta criada');
}


export const CreareAcccount:React.FC<any> = () => {
    return (
        <>
            <Header>
                <HeaderTemplate/>
            </Header>
            <Main>
                <Title content={"Criar Conta"} />
                <Form className={"formCreateAccount"} submitCallback={(data:Object)=>{handleCreateAccount(data)}}>
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