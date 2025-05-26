import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Login              from '../pages/Login/Login';
import Home               from '../pages/Home/Home';
import Products           from '../pages/Products/Products';
import {ProductCreateForm, ProductEditForm} from '../pages/Products/ProductForms.tsx';
import Brands             from '../pages/Brands/Brands.tsx';
import { CreareAcccount } from '../pages/CreateAccount/CreateAccount';
import { LandingPage }    from '../pages/LandingPage/LadingPage';
import Categories         from '../pages/Categories/Categories.tsx';
import ShoppingLists      from '../pages/ShoppingLists/ShoppingLists.tsx';
import { TemplateFactory }  from '../ui-resources/templates/TemplateFactory.tsx';
import { CategoriesCreateForm } from '../pages/Categories/CategoriesCreateForm.tsx';
import { CategoriesEditForm } from '../pages/Categories/CategoriesUpdateForm.tsx';

const RouteSwitcher:React.FC = () => {
    
    return (
        <Router>
            <Routes>
                <Route  path="/" element={<LandingPage/> }/>
                <Route  path="/login" element={<Login/> }/>
                <Route  path="/createAccount" element={<CreareAcccount/>}/>
                <Route  path="/home" element={<Home/>}/>

                <Route  path="/products" element={<Products/>}/>
                <Route  path="/products/create" element={<ProductCreateForm/>}/>
                <Route  path="/products/:id/edit" element={<ProductEditForm/>}/>
                
                <Route  path="/brands" element={<Brands/>}/>

                <Route  path="/categories" element={<Categories/>}/>
                <Route  path="/categories/create" element={<CategoriesCreateForm/>}/>
                <Route  path="/categories/:id/edit" element={<CategoriesEditForm/>}/>
                
                <Route  path="/shopping-list" element={<ShoppingLists/>}/>
                <Route  path="/templateFactory" element={<TemplateFactory/>}/>
            </Routes>
        </Router>
    );
}

export default RouteSwitcher;