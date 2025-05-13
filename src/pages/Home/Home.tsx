import React from 'react'
import { PrivateHeader } from '../../ui-resources/templates/Structure/Headers/Headers.tsx';
import { Main } from '../../ui-resources/templates/Structure/Main/Main.tsx';

const Home:React.FC = () => {
    return (
      <>
        <PrivateHeader />
        <Main>
          <span></span>
        </Main>
      </>
    );
}

export default Home