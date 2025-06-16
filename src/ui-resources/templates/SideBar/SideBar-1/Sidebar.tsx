import menu from '../SidebarLinks.tsx'
import { CiSettings } from "react-icons/ci";
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

import { useLocation } from 'react-router-dom';
import './SideBar-1.css'


export const SideBar = () => {
    return( 
      <div id="sidebar-1-div">
        <TiThMenuOutline />
        <IoMdClose />
        <div id="sidebar-1-div-list-options">
          {menu.map((m, index) => {
            const className = useLocation().pathname.split('/')[1] === m.id ? 'selected' : 'not-selected';
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