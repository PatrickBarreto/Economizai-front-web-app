

interface interfaceComeBackButton {
    action: Function
}

export const ComeBackButton:React.FC<interfaceComeBackButton>= (props) => {

    return (
        <button onClick={()=>{props.action()}}>
            Voltar
        </button>
    );
}