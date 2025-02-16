import './styles/App.css'
import { useState } from 'react'
import Modal from './components/Modal.jsx'
import TaskContainer from './components/TaskContainer.jsx'
import Prompt from './components/Prompt.jsx'
import SvgEdit from './components/svg/SvgEdit.jsx'


export default function App() {
  const [name, setName] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  function changeName (newName) {
    setName(newName === '' ? null : newName)
    setIsModalOpen(false)
  }

  return (
    <>
      { isModalOpen && (
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
      }

      <div className='titleWithButton'>
        <h1
          className='titleWithButton__title'
        >
          Bienvenido, {name ?? 'Invitado'}!
        </h1>
        <button
          title='Cambiar nombre'
          className='titleWithButton__btn btn--cta'
          onClick={() => setIsModalOpen(true)}
        >
          <SvgEdit />
        </button>
      </div>
      <TaskContainer />
    </>
  )
}

