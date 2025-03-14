import React from 'react'
import { Main } from '../../../UI/components/Structure/Structure.tsx';
import { PrivateHeader } from '../../templates/Headers/Headers.tsx';
import { SideBar } from '../../templates/SideBar/SideBar-1/Sidebar.tsx';
import '../styles/Home.css';

const Home:React.FC = () => {
    return (
      <>
        <PrivateHeader/>
        <Main>
          <SideBar/>
        </Main>
      </>
    );
}

export default Home