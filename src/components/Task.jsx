
import TasksMenu from './TasksMenu.jsx'
import { useState, useEffect } from "react"

export default function Task({ children, 
                               tasks, 
                               setTasks,
                               setModal,
                               setIsModalOpen,
                            }) {
  const [isMarked, setIsMarked] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  useEffect(
    () => {
      if (isMarked) setIsSelected(false)
  }, [isMarked])
  

  function handleClick_btnDelete () {
    const newTasks = [...tasks]
    const index = newTasks.indexOf(children)
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }
  function handleDblClick () {
    setIsMarked(!isMarked)
  }
  function handleClick (e) {
    const isTask = !!e.target.classList.contains('task')
    if (!isTask) return
    if (isMarked) return

    setIsSelected(!isSelected)
    const isAnySelectedTask = !!document.querySelector('.task.selected')
    if (isAnySelectedTask) setIsSelected(false)
  }
  function handleEditBtn () {
    const modalEdit = {
      label: 'Nueva tarea',
      buttonText: 'Guardar',
      function: (editedTask, tasks) => {
        console.log(editedTask, tasks)
        const newTasks = [...tasks]
        const selectedTask = document.querySelector('.task.selected').innerText
        console.log(selectedTask)
        const index = newTasks.indexOf(selectedTask)
        console.log(index)
        newTasks[index] = editedTask
        setTasks(newTasks)
      },
    }
    setModal(modalEdit)
    setIsModalOpen(true)
  }
  return (
    <>
      <div 
        className={`task ${isMarked ? 'marked' : ''}${isSelected ? 'selected' : ''}`}
        onDoubleClick={handleDblClick}
        onClick={handleClick}
      >
        {
          children
        }
        {
          (isSelected && !isMarked) && (
            <TasksMenu
              handleDblClick={handleDblClick}
              handleClick_btnDelete={handleClick_btnDelete}
              handleClick_btnEdit={handleEditBtn}
            />
          )
        }
      </div>
    </>
  )
}
