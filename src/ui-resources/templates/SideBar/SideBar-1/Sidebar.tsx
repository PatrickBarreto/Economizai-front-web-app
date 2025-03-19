import menu from './SidebarLinks.tsx'
import '../../styles/SideBar-1.css'
import { CiSettings } from "react-icons/ci";
import { useLocation } from 'react-router-dom';


export const SideBar = () => {
    return( 
      <div id="sidebar-1-div">
        <div id="sidebar-1-div-list-options">
          {menu.map((m, index) => {
            const className = useLocation().pathname == m.link ? 'selected' : 'not-selected';
            return <p key={index}>
                <a className={className} href={m.link}>{m.label}</a>
            </p>
          })}
        </div>
        <div id="sidebar-1-setting">
          <CiSettings size={30} color="gray"/>
        </div>
      </div>
    );
}