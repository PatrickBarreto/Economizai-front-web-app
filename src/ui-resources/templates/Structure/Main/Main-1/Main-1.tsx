import { SideBar } from "../../../SideBar/SideBar-1/Sidebar"
import '../../../styles/Main-1.css'
import { Main as MainComponent } from "../../../../components/Structure/Structure"

const Main = () => {
  return (
    <MainComponent>
      <SideBar/>
    </MainComponent>
  )
}

export default Main