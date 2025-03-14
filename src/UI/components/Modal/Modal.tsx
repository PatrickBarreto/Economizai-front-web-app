import React from 'react';

export const Modal:React.FC<any> = ({children}) => {
    return (
        <>
            <div className='modalDiv'>
                { children }
            </div>
        </>
    );
}