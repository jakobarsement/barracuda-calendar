import { createContext, useState } from 'react'
import { ModalContextType, ModalData } from 'types/Modal'

const initialModelData = {
  data: { name: '', date: '', description: '', type: '' },
  showModal: false,
}
const initialContext = {
  modalData: initialModelData,
  setModalData: (modelData: ModalData) => {},
}
export const ModalContext = createContext<ModalContextType | null>(
  initialContext
)

const ModalProvider = ({ children }: { children: JSX.Element }) => {
  const [modalData, setModalData] = useState<ModalData>(initialModelData)

  // can define setters and getters here, then give access to them
  // in the 'value' prop below

  return (
    <ModalContext.Provider value={{ modalData, setModalData }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
