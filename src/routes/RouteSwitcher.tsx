import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import TestComponente from '../pages/testComponent';

const RouteSwitcher:React.FC = () => {
    
    return (
        <Router>
            <Routes>
                <Route  path="/login" element={<Login/> }/>
                <Route  path="/home" element={<Home/>}/>
                <Route  path="/products" element={<Products/>}/>
                <Route  path="/testeComponent" element={<TestComponente/>}/>
            </Routes>
        </Router>
    );
}

export default RouteSwitcher;