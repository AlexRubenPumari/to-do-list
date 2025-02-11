import '../styles/App.css'
import { useState } from 'react'
import Modal from './Modal.jsx'
import TaskContainer from './TaskContainer.jsx'
import Prompt from './Prompt.jsx'


export default function App() {
  const [name, setName] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(true)
  function changeName (nameInput) {
    setName(nameInput.value === '' ? null : nameInput.value)
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <Modal 
             isOpen={isModalOpen}
             isModalToClose 
             onClose={() => setIsModalOpen(false)}
      >
        <Prompt label='Nombre' 
                buttonText='Continuar' 
                callback={changeName} 
        />
      </Modal>

      <h1 style={{ textAlign: 'center' }}>Bienvenido, {name ?? 'Invitado'}!</h1>
      <TaskContainer />
    </>
  )
}

