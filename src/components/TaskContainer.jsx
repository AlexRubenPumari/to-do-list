import { useState } from 'react'
import Modal from './Modal.jsx'

export default function TaskContainer() {
  const [tasks, setTasks] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <>
      {
        isModalOpen && (
          <Modal 
            isModalToClose
            toggleModal={() => setIsModalOpen(!isModalOpen)}
          >
            Añadir tareas
          </Modal>
        )
      }
      <div className="taskContainer">
        <div className="taskContainer__body">
          {
            
          }
        </div>
        <button 
          className='btn--primary' 
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Agregar tarea
        </button>
      </div>
    </>
  )
}