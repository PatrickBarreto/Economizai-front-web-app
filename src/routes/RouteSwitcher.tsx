import { BrowserRouter as Router, Route, Routes, Navigate, Outlet} from 'react-router-dom';

import Login              from '../pages/Login/Login';
import Home               from '../pages/Home/Home';
import Products           from '../pages/Products/Products';
import {ProductCreateForm, ProductEditForm} from '../pages/Products/ProductForms.tsx';
import { CreareAcccount } from '../pages/CreateAccount/CreateAccount';
import { LandingPage }    from '../pages/LandingPage/LadingPage';
import { TemplateFactory }  from '../ui-resources/templates/TemplateFactory.tsx';

import Categories         from '../pages/Categories/Categories.tsx';
import { CategoriesCreateForm } from '../pages/Categories/CategoriesCreateForm.tsx';
import { CategoriesEditForm } from '../pages/Categories/CategoriesUpdateForm.tsx';

import Brands             from '../pages/Brands/Brands.tsx';
import { BrandCreateForm } from '../pages/Brands/BrandCreateForm.tsx';
import { BrandUpdateForm } from '../pages/Brands/BrandUpdateForm.tsx';

import ShoppingLists      from '../pages/ShoppingLists/ShoppingLists.tsx';
import { ShoppingListsCreateForm } from '../pages/ShoppingLists/Forms/ShoppingListsCreateForm.tsx';
import { ShoppingListsUpdateForm } from '../pages/ShoppingLists/Forms/ShoppingListsUpdateForm.tsx';


export const PrivateRoutes:React.FC<{redirectTo?:string}> = ({ redirectTo= "/" }) => {
  return !!localStorage.getItem('Authorization') ? <Outlet/> : <Navigate to={redirectTo} replace />
}

const RouteSwitcher:React.FC = () => {
    
    return (
        <Router>
            <Routes>
                <Route  path="/" element={<LandingPage/> }/>
                <Route  path="/login" element={<Login/> }/>
                <Route  path="/createAccount" element={<CreareAcccount/>}/>
                
                <Route element={<PrivateRoutes redirectTo='login'/>}>
                  <Route  path="/home" element={<Home/>}/>

                  <Route  path="/products" element={<Products/>}/>
                  <Route  path="/products/create" element={<ProductCreateForm/>}/>
                  <Route  path="/products/:id/edit" element={<ProductEditForm/>}/>
                  
                  <Route  path="/brands" element={<Brands/>}/>
                  <Route  path="/brands/create" element={<BrandCreateForm/>}/>
                  <Route  path="/brands/:id/edit" element={<BrandUpdateForm/>}/>

                  <Route  path="/categories" element={<Categories/>}/>
                  <Route  path="/categories/create" element={<CategoriesCreateForm/>}/>
                  <Route  path="/categories/:id/edit" element={<CategoriesEditForm/>}/>
                  
                  <Route  path="/shopping-list" element={<ShoppingLists/>}/>
                  <Route  path="/shopping-list/create" element={<ShoppingListsCreateForm/>}/>
                  <Route  path="/shopping-list/:id/edit" element={<ShoppingListsUpdateForm/>}/>
                  <Route  path="/templateFactory" element={<TemplateFactory/>}/>
                </Route>
                
                <Route  path="*" element={<Navigate to="home" replace/>}/>
            </Routes>
        </Router>
    );
}

export default RouteSwitcher;