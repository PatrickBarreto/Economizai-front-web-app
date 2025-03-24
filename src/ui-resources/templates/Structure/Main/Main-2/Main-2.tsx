import React from "react"
import { Main as MainComponent } from "../../../../components/Structure/Structure"
import { Main as MainInterface} from "../../../../../config/Interfaces/Structure"
import './Main-2.css'

const Main:React.FC<MainInterface> = ({children}) => {
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

export default Main