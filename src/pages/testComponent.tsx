import Input from "../components/Form/Input/Input";
import Form from "../components/Form/Form";

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