import { PublicHeader as PublicHeaderComponent, PrivateHeader as PrivateHeaderComponent} from '../../../components/Headers/Headers'
import { Header } from '../../../components/Structure/Structure';
import './Headers.css';



export const PublicHeader:any = () => {
    const image = {path:"./src/ui-resources/assets/logo.png", alt:"logo"};

    return (
        <Header>
          <PublicHeaderComponent image={image}/>
        </Header>
    )
}


export const PrivateHeader:any = () => {
    const image= {path:"./src/ui-resources/assets/logo.png", alt:"logo"};

    return (
       <Header>
          <PrivateHeaderComponent image={image}/>
       </Header>
    )
}