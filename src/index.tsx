import React from 'react'
import ReactDOM from 'react-dom'
import ModalProvider from 'state/modalState'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    {/* giving access to the context provider here since App.tsx is behaving 
  as a our page component, and needs to access modelData */}
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
