import React from "react"
import { SideBar } from "../../SideBar/SideBarResizing/SideBar"
import { Main as MainComponent } from "../../../components/Structure/Structure"
import { Main as MainInterface} from "../../../../config/Interfaces/Structure"
import './Main-1.css'
import './Main-2.css'
import './Main-3.css'

export const Main:React.FC<MainInterface> = ({children}) => {
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

export const Main2:React.FC<MainInterface> = ({children}) => {
  return (
    <MainComponent>
      <section id="main-2-content-section">
        <div id="main-2-content-div">
          { children }
        </div>
      </section>
    </MainComponent>
  )
}

export const Main3:React.FC<MainInterface> = ({children}) => {
  return (
    <MainComponent>
      <section className="main-3-content-section">
        <div className="main-3-content-div">
          { children }
        </div>
      </section>
    </MainComponent>
  )
}