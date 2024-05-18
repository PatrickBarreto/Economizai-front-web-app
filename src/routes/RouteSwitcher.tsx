import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Login              from '../pages/Login/Login';
import Home               from '../pages/Home/Home';
import Products           from '../pages/Products/Products';
import Brands             from '../pages/Brands/Brands.tsx';
import { CreareAcccount } from '../pages/CreateAccount/CreateAccount';
import { LandingPage }    from '../pages/LandingPage/LadingPage';
import Categories         from '../pages/Categories/Categories.tsx';
import ShoppingLists      from '../pages/ShoppingLists/ShoppingLists.tsx';
import { TestComponent }  from '../components/testComponent.tsx';

const RouteSwitcher:React.FC = () => {
    
    return (
        <Router>
            <Routes>
                <Route  path="/" element={<LandingPage/> }/>
                <Route  path="/login" element={<Login/> }/>
                <Route  path="/createAccount" element={<CreareAcccount/>}/>
                <Route  path="/home" element={<Home/>}/>
                <Route  path="/products" element={<Products/>}/>
                <Route  path="/brands" element={<Brands/>}/>
                <Route  path="/categories" element={<Categories/>}/>
                <Route  path="/shopping-list" element={<ShoppingLists/>}/>
                <Route  path="/testComponent" element={<TestComponent/>}/>
            </Routes>
        </Router>
    );
}

export default RouteSwitcher;