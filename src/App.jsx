import './styles/App.css'

import { useState } from 'react'
import Modal from './components/Modal.jsx'
import TaskContainer from './components/TaskContainer.jsx'

function App() {
  const [name, setName] = useState('Invitado')

  return (
    <>
      <Modal isModalToClose initialIsOpen callback={newName => setName(newName)}/>
      <h1>Bienvenido, {name}!</h1>
      <TaskContainer />
    </>
  )
}

export default App
