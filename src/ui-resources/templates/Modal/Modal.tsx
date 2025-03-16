import React from "react"
import { Modal as ModalComponent, ModalInterface } from "../../components/Modal/Modal"


export const Modal:React.FC<ModalInterface> = ({ children }) => {
  return (
    <ModalComponent>
      {children}
    </ModalComponent>
  )
}