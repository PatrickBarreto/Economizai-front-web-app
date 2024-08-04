import { ReactNode } from "react";

interface Link {
    action:Function
    icon?:ReactNode,
    text:string|number
}

export const Link:React.FC<Link> = ({ action, icon = <></>, text}) => {
    return (
        <div className={"linkdiv"}>
            {icon} <a onClick={()=>{action()}}>{text}</a>
        </div>

    );
}