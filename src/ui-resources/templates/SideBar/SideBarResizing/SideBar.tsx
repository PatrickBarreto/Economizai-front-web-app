import { useState, useRef, useEffect } from "react";
import menu from '../SidebarLinks.tsx'
import { useLocation } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import '../SideBar-1.css'


export const SideBar = () => {
  const [width, setWidth] = useState(250);
  const [menuOpenIcon, setMenuOpen] = useState(false);
  const [menuCloseIcon, setMenuClose] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isResizing.current) {
        const newWidth = e.clientX;
        if (newWidth > 50 && newWidth < 600) {
          setWidth(newWidth);
        }
        if(newWidth <= 100){
          setMenuOpen(true)
          setMenuClose(false)
        }else{
          setMenuOpen(false)
          setMenuClose(true)
        }
      }
    };

    const handleMouseUp = () => {
      isResizing.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  return (
    <div id="sidebar-section">
      <div id="sidebar-div"
        ref={sidebarRef}
        style={{ width: width}}
      >
        <div id={"sidebar-content"}>
            <div id="menu-toggle">
              <div style={{ display: menuOpenIcon ? 'block' : 'none'}}>
                <TiThMenuOutline />
              </div>
              <div style={{ display: menuCloseIcon ? 'block' : 'none'}}>
                <IoMdClose />
               </div>
            </div>
          <div>
            <div id="sidebar-links">
              {menu.map((m, index) => {
                const className = useLocation().pathname.split('/')[1] === m.id ? 'selected' : 'not-selected';
                return <p key={index}>
                    <a className={className} href={m.link}>{m.label}</a>
                </p>
              })}
            </div>
          </div>

          <div id="sidebar-setting">
            <CiSettings size={30} color="gray"/>
          </div>
        </div>
      </div>
      
      <div
        onMouseDown={handleMouseDown}
        style={{
          width: "5px",
          cursor: "col-resize",
          background: "#aaa",
        }}
      >
      </div>
    </div>
  );
};