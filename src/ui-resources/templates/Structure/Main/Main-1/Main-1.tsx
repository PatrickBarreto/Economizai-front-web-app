import React from "react"
import { SideBar } from "../../../SideBar/SideBar-1/Sidebar"
import { Main as MainComponent } from "../../../../components/Structure/Structure"
import { Main as MainInterface} from "../../../../../config/Interfaces/Structure"
import './Main-1.css'

const Main:React.FC<MainInterface> = ({children}) => {
  return (
    <MainComponent>
      <SideBar/>
      <section id="main-1-content-section">
        <div id="main-1-content-div">
          { children }
        </div>
      </section>
    </MainComponent>
  )
}

export default Main