import { ButtonInterface } from "../../config/Interfaces/SubComponents";

export const Button:React.FC<ButtonInterface>= ({action, content = 'Click', buttonClassName=""}) => {
    return (
        <button className={buttonClassName} onClick={()=>{action()}}>
            {content}
        </button>
    );
}