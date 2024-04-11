import Input from "../components/Resources/Form/Input/Input";
import Form from "../components/Resources/Form/Form";

const TestComponente = () => {

return (
    <>
    <Form className={"formTeste"} submitCallback={()=>{console.log('oi')}}> 
        <Input name={'teste1'}/>
        <Input name={'teste2'}/>
        <Input name={'teste3'}/>
        <Input name={'submit'} type={"submit"}/>
    </Form>

    </>)

}

export default TestComponente;