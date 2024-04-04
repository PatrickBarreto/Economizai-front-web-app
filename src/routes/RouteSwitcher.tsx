import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Base from '../pages/Base/Base';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import TestComponente from '../pages/testComponent';

const RouteSwitcher:React.FC = () => {
    
    return (
        <Router>
            <Routes>
                <Route  
                    path="/login" 
                    element={<Base 
                                page={Login} 
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
                                typePage='loged'
                                headerShow={true}
                                footerShow={true}
                            />
                        }
                />

                <Route  
                    path="/testeComponent" 
                    element={<Base 
                                page={TestComponente} 
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