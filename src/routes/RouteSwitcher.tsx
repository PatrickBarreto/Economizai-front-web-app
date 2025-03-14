import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Login              from '../UI/pages/Login/Login';
import Home               from '../UI/pages/Home/Home';
import Products           from '../UI/pages/Products/Products';
import Brands             from '../UI/pages/Brands/Brands.tsx';
import { CreareAcccount } from '../UI/pages/CreateAccount/CreateAccount';
import { LandingPage }    from '../UI/pages/LandingPage/LadingPage';
import Categories         from '../UI/pages/Categories/Categories.tsx';
import ShoppingLists      from '../UI/pages/ShoppingLists/ShoppingLists.tsx';
import { TemplateFactory }  from '../UI/templates/TemplateFactory.tsx';

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
                <Route  path="/templateFactory" element={<TemplateFactory/>}/>
            </Routes>
        </Router>
    );
}

export default RouteSwitcher;