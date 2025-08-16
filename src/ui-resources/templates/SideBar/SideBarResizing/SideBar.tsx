import { useState, useRef, useEffect, SyntheticEvent } from "react";
import menu from '../SidebarLinks.tsx'
import { useLocation } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import '../SideBar-1.css'


export const SideBar = () => {
  const sideBarWidth = localStorage.getItem('sidebarWidth')
  const [width, setWidth] = useState(Number(sideBarWidth) > 0 ? sideBarWidth+"px" : "250px");
  const [menuOpenIcon, setMenuOpen] = useState(false);
  const [menuCloseIcon, setMenuClose] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);

  const startResizing = () => {
    isResizing.current = true;
  };
  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing.current) {
      
     const sidebarLeft = sidebarRef.current?.getBoundingClientRect().left || 0;
      const clientX = e.clientX
      const newWidth = clientX - sidebarLeft
      localStorage.setItem('sidebarWidth',newWidth.toString())

      if (newWidth > 50 && newWidth < 600) {
        setWidth(newWidth+"px");
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

  const handleTouchMove = (e: TouchEvent) => {
      if (isResizing.current) {
      const newWidth = e.touches[0].clientX;
      localStorage.setItem('sidebarWidth',newWidth.toString())
      if (newWidth > 50 && newWidth < 600) {
        setWidth(newWidth+"px");
      }
      if(newWidth <= 100){
        setMenuOpen(true)
        setMenuClose(false)
      }else{
        setMenuOpen(false)
        setMenuClose(true)
      }
    }
  }
  const handleTouchUp = () => {
    isResizing.current = false;
  }

  const handleToggleSideBar = (event: SyntheticEvent) => {
    if(event.currentTarget.classList.value == "sidebarClose"){
      const sidebar:HTMLElement = document.getElementsByClassName("sidebar-div")[0] as HTMLElement;
      sidebar.style.width = "50px"
      setMenuClose(false)
      setMenuOpen(true)
    }
    if(event.currentTarget.classList.value == "sidebarOpen"){
      const sidebar:HTMLElement = document.getElementsByClassName("sidebar-div")[0] as HTMLElement;
      const lastWidth = localStorage.getItem('sidebarWidth') || 0

      if (lastWidth && Number(lastWidth) >= 50){
        sidebar.style.width = lastWidth+'px'
      }else{
        sidebar.style.width = "200px"
      }
      setMenuClose(true)
      setMenuOpen(false)
    }

  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);

      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchUp);
    };
  }, [width]);


  return (

      <div id="sidebar-section">
        <div id="sidebar-div" className={"sidebar-div"}
          ref={sidebarRef}
          style={{ width: width, transition: isResizing.current ? 'none' : 'width 0.2s'}}
        >
          <div id={"sidebar-content"}>
              <div id="menu-toggle">
                <div className={"sidebarOpen"} onClick={handleToggleSideBar} onTouchStart={handleToggleSideBar} style={{ display: menuOpenIcon ? 'block' : 'none'}}>
                  <TiThMenuOutline />
                </div>
                <div className={"sidebarClose"} onClick={handleToggleSideBar} onTouchStart={handleToggleSideBar} style={{ display: menuCloseIcon ? 'block' : 'none'}}>
                  <IoMdClose  />
                </div>
              </div>
            <div>
              <div id="sidebar-links">
                {menu.map((m, index) => {
                  const className = useLocation().pathname.split('/')[1] === m.id ? 'selected' : 'not-selected';
                  return (
                    <p key={index}>
                      <a className={className} href={m.link}>
                        <div style={{ display: menuCloseIcon ? 'none' : 'block'}}>{m.icon}</div>
                        <p style={{ display: menuCloseIcon ? 'block' : 'none'}}>
                          {m.label}
                        </p>
                        </a>
                    </p>
                  )
                })}
              </div>
            </div>

            <div id="sidebar-setting">
              <CiSettings size={30} color="gray"/>
            </div>
          </div>
        </div>
        
        <div
          onMouseDown={startResizing}
          onTouchStart={startResizing}
          style={{
            width: "3px",
            cursor: "col-resize",
            background: "#aaa",
          }}
        >
        </div>
      </div>
  );
};