import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Base from '../pages/Base/Base';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';

const RouteSwitcher:React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route  
                    path="/login" 
                    element={<Base 
                                page={Login} 
                                propsPage={[
                                    {key:"title", value:"Olá, faça seu login"}
                                ]}
                                typePage='public'
                                headerShow={true}
                                footerShow={true}
                            />
                        }
                />

                <Route  
                    path="/home" 
                    element={<Base 
                                page={Home} 
                                propsPage={[
                                    {key:"title", value:"Seja bem vindo"}
                                ]}
                                typePage='loged'
                                headerShow={true}
                                footerShow={false}
                            />
                        }
                />

                <Route  
                    path="/products" 
                    element={<Base 
                                page={Products} 
                                propsPage={[
                                    {key:"title", value:"Seja bem vindo"}
                                ]}
                                typePage='loged'
                                headerShow={true}
                                footerShow={true}
                            />
                        }
                />
            </Routes>
        </Router>
    );
}

export default RouteSwitcher;