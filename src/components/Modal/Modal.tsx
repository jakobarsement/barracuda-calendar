import { useContext } from 'react'
import { ModalContext } from 'state/modalState'
import { ModalContextType } from 'types/Modal'

import './Modal.scss'

const Modal = () => {
  const { modalData, setModalData } = useContext(
    ModalContext
  ) as ModalContextType
  return (
    <div className="modal">
      {/* prettier-ignore */}
      <div className="modalDetails">
        <p><b>Name: </b>{modalData.data.name}</p>
        <p><b>Date: </b>{modalData.data.date}</p>
        <p><b>Description: </b>{modalData.data.description}</p>
        <p><b>Occasion: </b>{modalData.data.type}</p>
      </div>
      <div className="modalButtons">
        <button
          className="modalButton"
          onClick={() =>
            setModalData({ data: modalData.data, showModal: false })
          }
        >
          Close
        </button>
      </div>
    </div>
  )
}
export default Modal
