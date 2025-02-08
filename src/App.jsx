import './styles/App.css'

import { useState } from 'react'
import Modal from './components/Modal.jsx'
import TaskContainer from './components/TaskContainer.jsx'

export default function App() {
  const [name, setName] = useState('Invitado')
  const [isModalOpen, setIsModalOpen] = useState(true)
  function changeName () {
    const newName = document.querySelector('.modal__content input').value
    setName(newName === '' ? 'Invitado' : newName)
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      {
        isModalOpen && (
          <Modal isModalToClose 
                 toggleModal={() => setIsModalOpen(!isModalOpen)}
          >
            <div className='modal__content'>
              <label htmlFor=''>Nombre:</label>
              <input id='inputName' type='text' placeholder='Ingrese su nombre...' autoFocus />
              <button onClick={changeName} className='btn--cta modal__btnCta'>
                Continuar
              </button>
            </div>
          </Modal>
        )
      }
      <h1>Bienvenido, {name}!</h1>
      <TaskContainer />
    </>
  )
}

