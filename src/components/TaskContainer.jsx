import { useState } from 'react'
import Modal from './Modal.jsx'
import Prompt from './Prompt.jsx'
import Task from './Task.jsx'

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
      <section className="taskContainer">
        <div className="taskContainer__body">
          {
            tasks.map(task => (<Task key={task}>{task}</Task>))
          }
        </div>
        <button 
          className='btn--cta' 
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Agregar tarea
        </button>
      </section>
    </>
  )
}