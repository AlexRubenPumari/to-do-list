import { useState } from 'react'
import Modal from './Modal.jsx'
import Prompt from './Prompt.jsx'
import Task from './Task.jsx'

export default function TaskContainer() {
  const modalAdd = {
    label: 'Tarea',
    buttonText: 'Añadir',
    function: addTask,
  }
  const [tasks, setTasks] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modal, setModal] = useState(modalAdd)

  function addTask(task, tasks) {
    const newTasks = [...tasks, task]
    setTasks(newTasks)
  }
  function handleClick_btnModal() {
    setModal(modalAdd)
    setIsModalOpen(true)
  }
  return (
    <>
      {isModalOpen && (
        <Modal isModalToClose onClose={() => setIsModalOpen(false)}>
          <Prompt
            hasValidation
            label={modal.label}
            buttonText={modal.buttonText}
            callback={modal.function}
            tasks={tasks}
          />
        </Modal>
      )}

      <section className="taskContainer">
        <div className="taskContainer__body">
          {tasks.map(task => (
            <Task
              key={task}
              onOpenModal={() => setIsModalOpen(true)}
              tasks={tasks}
              setTasks={setTasks}
              setModal={setModal}
              setIsModalOpen={setIsModalOpen}  
            >
              {task}
            </Task>
          ))}
        </div>
        <button className="btn--cta" onClick={handleClick_btnModal}>
          Agregar tarea
        </button>
      </section>
    </>
  )
}
