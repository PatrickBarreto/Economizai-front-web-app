import React from 'react';
import { Button } from '../../../ui-resources/components/SubComponents/Button';
import { ButtonInterface } from '../../../config/Interfaces/SubComponents';
import "../styles/Buttons.css";

export const CtaButton:React.FC<ButtonInterface> = ({action, content}) => {
    return( 
        <>
            <Button buttonClassName={"ctaButton"} action={action} content={content} />
        </>
    )
}