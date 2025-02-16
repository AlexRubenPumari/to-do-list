import './styles/App.css'
import { useState } from 'react'
import Modal from './components/Modal.jsx'
import TaskContainer from './components/TaskContainer.jsx'
import Prompt from './components/Prompt.jsx'
import ActionTitle from './components/ActionTitle.jsx'

export default function App () {
  const [name, setName] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => setIsModalOpen(false)
  const openModal = () => setIsModalOpen(true)

  function changeName (newName, _) {
    setName(newName === '' ? null : newName)
    closeModal()
  }

  return (
    <>
      {isModalOpen && (
        <Modal isModalToClose onClose={closeModal}>
          <Prompt label="Nombre" buttonText="Continuar" callback={changeName} />
        </Modal>
      )}

      <ActionTitle callback={openModal}>
        {`Bienvenido, ${name ?? 'Invitado'}!`}
      </ActionTitle>

      <TaskContainer />
    </>
  )
}