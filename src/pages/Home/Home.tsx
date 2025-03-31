import React from 'react'
import { PrivateHeader } from '../../ui-resources/templates/Structure/Headers/Headers.tsx';
import MainTemplate1 from '../../ui-resources/templates/Structure/Main/Main-1/Main-1.tsx';

const Home:React.FC = () => {
    return (
      <>
        <PrivateHeader />
        <MainTemplate1>
          <span></span>
        </MainTemplate1>
      </>
    );
}

export default Home