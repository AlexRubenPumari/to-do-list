import './styles/App.css'
import { useState } from 'react'
import Modal from './components/Modal.jsx'
import TaskContainer from './components/TaskContainer.jsx'
import Prompt from './components/Prompt.jsx'


export default function App() {
  const [name, setName] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(true)
  function changeName (nameInput) {
    setName(nameInput.value === '' ? null : nameInput.value)
    setIsModalOpen(false)
  }

  return (
    <>
      {/* { isModalOpen && (
          <Modal 
          isModalToClose 
          onClose={() => setIsModalOpen(false)}
          >
            <Prompt label='Nombre' 
                    buttonText='Continuar' 
                    callback={changeName} 
            />
          </Modal>
        )
      } */}

      <h1 style={{ textAlign: 'center' }}>Bienvenido, {name ?? 'Invitado'}!</h1>
      <TaskContainer />
    </>
  )
}

