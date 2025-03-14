import { PublicHeader as PublicHeaderComponent, PrivateHeader as PrivateHeaderComponent} from '../../components/Headers/Headers'
import '../../templates/styles/Headers.css';
import { Header } from '../../components/Structure/Structure';



export const PublicHeader:any = () => {
    const image = {path:"src/UI/assets/logo.png", alt:"logo"};

    return (
        <Header>
          <PublicHeaderComponent image={image}/>
        </Header>
    )
}


export const PrivateHeader:any = () => {
    const image= {path:"src/UI/assets/logo.png", alt:"logo"};

    return (
       <Header>
          <PrivateHeaderComponent image={image}/>
       </Header>
    )
}