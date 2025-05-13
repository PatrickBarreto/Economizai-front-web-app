import React from "react"
import { Modal as ModalComponent, ModalInterface } from "../../components/Modal/Modal"
import './Modal.css'


export const Modal:React.FC<ModalInterface> = ({ children }) => {
  return (
    <ModalComponent>
      {children}
    </ModalComponent>
  )
}