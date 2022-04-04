import { Event } from './Event'

export type ModalContextType = {
  modalData: ModalData
  setModalData: (modalData: ModalData) => void
}

export type ModalData = {
  data: Event
  showModal: boolean
}
