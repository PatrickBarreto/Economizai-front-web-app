import React from 'react';
import './Modal.css'

export const Modal:React.FC<any> = ({children}) => {
    return (
        <>
            <div className='modalDiv'>
                { children }
            </div>
        </>
    );
}