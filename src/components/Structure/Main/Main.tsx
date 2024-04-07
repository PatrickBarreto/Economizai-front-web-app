import React from 'react';
import { MainContext } from '../../../config/contexts';
import '../Main/Main.css'


export const Main:React.FC<any> = ({ children, contexMainData = [{}]}) => {
    return(
        <>
            <MainContext.Provider value={contexMainData}>
                <main>
                    { children }
                </main>
            </MainContext.Provider>
        </>
    );
}