import React, { ReactNode } from 'react';


export interface ModalInterface {
    children: ReactNode,
}

export const Modal:React.FC<ModalInterface> = ({children}) => {
    return (
        <>
            <div className='modalDiv'>
                { children }
            </div>
        </>
    );
}