import { useState } from 'react'
import Modal from './Modal.jsx'
import Prompt from './Prompt.jsx'
import Task from './Task.jsx'

export default function TaskContainer() {
  const [tasks, setTasks] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  function addTask (task) {
    const newTasks = [...tasks, task]
    setTasks(newTasks)
  }

  return (
    <>
      { isModalOpen && (
          <Modal
            isModalToClose
            onClose={() => setIsModalOpen(false)}
          >
            <Prompt 
              hasValidation
              label='Tarea' 
              buttonText='Agregar' 
              callback={addTask} 
            />
          </Modal> 
        )
      }

      <section className="taskContainer">
        <div className="taskContainer__body">
          {
            tasks.map(task => (
                <Task 
                  key={task}
                  onOpenModal={() => setIsModalOpen(true)}
                  tasks={tasks}
                  setTasks={setTasks}
                >
                  {task}
                </Task>
              )
            )
          }
        </div>
        <button 
          className='btn--cta' 
          onClick={() => setIsModalOpen(true)}
        >
          Agregar tarea
        </button>
      </section>
    </>
  )
}