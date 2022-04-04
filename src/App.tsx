import { useContext } from 'react'
import { ModalContext } from 'state/modalState'
import { ModalContextType } from 'types/Modal'
import Calendar from './components/Calendar/Calendar'
import Modal from 'components/Modal/Modal'
import './App.scss'

function App() {
  const { modalData } = useContext(ModalContext) as ModalContextType

  return (
    <div className="page">
      <div className="calendar">
        <Calendar />
      </div>
      {modalData.showModal && <Modal />}
    </div>
  )
}

export default App
