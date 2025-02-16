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
  const [modal, setModal] = useState(modalAdd)
  const [tasks, setTasks] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  function addTask(task, tasks) {
    const newTasks = [...tasks, task]
    setTasks(newTasks)
  }
  function handleClick_btnModal() {
    setModal(modalAdd)
    openModal()
  }
  return (
    <>
      {isModalOpen && (
        <Modal 
          isModalToClose 
          onClose={closeModal}
        >
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
              onOpenModal={openModal}
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
