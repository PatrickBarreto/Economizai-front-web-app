import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import { TestComponent } from '../components/testComponent.tsx';
import { CreareAcccount } from '../pages/CreateAccount/CreateAccount';
import { LandingPage } from '../pages/LandingPage/LadingPage';

const RouteSwitcher:React.FC = () => {
    
    return (
        <Router>
            <Routes>
                <Route  path="/" element={<LandingPage/> }/>
                <Route  path="/login" element={<Login/> }/>
                <Route  path="/createAccount" element={<CreareAcccount/>}/>
                <Route  path="/home" element={<Home/>}/>
                <Route  path="/products" element={<Products/>}/>
                <Route  path="/testComponent" element={<TestComponent/>}/>
            </Routes>
        </Router>
    );
}

export default RouteSwitcher;