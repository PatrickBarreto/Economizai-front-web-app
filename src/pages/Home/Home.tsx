import React from 'react'
import { PrivateHeader } from '../../ui-resources/templates/Structure/Headers/Headers.tsx';
import { Main2 } from '../../ui-resources/templates/Structure/Main/Main.tsx';

const Home:React.FC = () => {
    return (
      <>
        <PrivateHeader />
        <Main2>
          <span></span>
        </Main2>
      </>
    );
}

export default Home