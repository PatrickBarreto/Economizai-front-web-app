import { InterfaceComeBackButton } from "../../config/Interfaces/SubComponents";

export const ComeBackButton:React.FC<InterfaceComeBackButton>= (props) => {

    return (
        <button onClick={()=>{props.action()}}>
            Voltar
        </button>
    );
}