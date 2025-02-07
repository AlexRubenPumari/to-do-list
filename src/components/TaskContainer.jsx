import { useState } from 'react'

function TaskContainer() {
  const [tasks, setTasks] = useState(null)
  const [isModalActive, setIsModalActive] = useState(false) 

  return (
    <div className="taskContainer">
      <div className="taskContainer__body">
        {

        }
      </div>
      <button className='btn--primary'>Agregar tarea</button>
    </div>
  )
}

export default TaskContainer
