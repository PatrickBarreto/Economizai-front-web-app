import React from 'react';
import { Button } from '../../components/SubComponents/Button';
import "./ctaButton.css";
import { ButtonInterface } from '../../config/Interfaces/SubComponents';

export const CtaButton:React.FC<ButtonInterface> = ({action, content}) => {
    return( 
        <>
            <Button buttonClassName={"ctaButton"} action={action} content={content} />
        </>
    )
}