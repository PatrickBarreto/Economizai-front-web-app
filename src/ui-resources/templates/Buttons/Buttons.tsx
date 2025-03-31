import React from 'react';
import { Button } from '../../components/SubComponents/Button';
import { ButtonInterface } from '../../../config/Interfaces/SubComponents';
import "./ctaButton.css";
import "./defaultButton.css";

export const CtaButton:React.FC<ButtonInterface> = ({action, content}) => {
    return( 
      <>
        <Button buttonClassName={"ctaButton"} action={action} content={content} />
      </>
    )
}


export const DefaultButton:React.FC<ButtonInterface> = ({action, content}) => {
  return( 
    <>
      <Button buttonClassName={"defaultButton"} action={action} content={content} />
    </>
  )
}