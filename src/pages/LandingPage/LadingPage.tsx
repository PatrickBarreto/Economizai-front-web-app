import React from 'react';
import { Header } from '../../components/Structure/Structure';
import { HeaderTemplate } from '../../templates/Header/Header';

export const LandingPage:React.FC<any> = () => {

    return (
        <>
            <Header>
                <HeaderTemplate />
            </Header>
        </>
    );
}