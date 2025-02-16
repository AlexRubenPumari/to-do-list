
import TasksMenu from './TasksMenu.jsx'
import { useState, useEffect } from "react"

export default function Task({ 
                          children, 
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
    const isAnySelectedTask = !!document.querySelector('.task.selected')
    if (!isTask || isMarked || (isAnySelectedTask && !isSelected)) return

    setIsSelected(!isSelected)
  }
  function handleEditBtn () {
    const modalEdit = {
      label: 'Nueva tarea',
      buttonText: 'Guardar',
      function: (editedTask, tasks) => {
        const newTasks = [...tasks]
        const selectedTask = document.querySelector('.task.selected').innerText
        const index = newTasks.indexOf(selectedTask)
        newTasks[index] = editedTask
        setTasks(newTasks)
        setIsModalOpen(false)
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
        { children }
        { (isSelected && !isMarked) && 
            <TasksMenu
              markTask={handleDblClick}
              editTask={handleEditBtn}
              deleteTask={handleClick_btnDelete}
            />
        }
      </div>
    </>
  )
}
