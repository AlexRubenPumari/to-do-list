import { useState } from 'react'
import Modal from './Modal.jsx'
import Prompt from './Prompt.jsx'

export default function TaskContainer() {
  const [tasks, setTasks] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  function addTask (taskInput) {
    const newTasks = [...tasks, taskInput.value]
    setTasks(newTasks)

    taskInput.value = ''
    taskInput.focus()
  }

  return (
    <>
      {
        isModalOpen && (
          <Modal 
            isModalToClose
            toggleModal={() => setIsModalOpen(!isModalOpen)}
          >
            <Prompt label='Tarea' 
                    buttonText='Agregar' 
                    callback={addTask} 
            />
          </Modal>
        )
      }
      <div className="taskContainer">
        <div className="taskContainer__body">
          {
            tasks.map(task => (<section key={task}>{task}</section>))
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