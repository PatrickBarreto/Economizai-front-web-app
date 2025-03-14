import menu from './SidebarLinks.tsx'
import '../../styles/SideBar-1.css'
import { CiSettings } from "react-icons/ci";


export const SideBar = () => {
    return( 
      <div id="sidebar-1-div">
        <div id="sidebar-1-div-list-options">
          {
            menu.map((m, index) => (
              <p key={index}>
                <a href={m.link}>{m.label}</a>
              </p>
            ))
          }
        </div>
        <div id="sidebar-1-setting">
          <CiSettings size={30} color="gray"/>
        </div>
      </div>
    );
}