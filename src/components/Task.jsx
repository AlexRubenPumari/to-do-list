
import TasksMenu from './TasksMenu.jsx'
import { useState, useEffect } from "react"

export default function Task({ children, onOpenModal, tasks, setTasks }) {
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
  function handleClick () {
    setIsSelected(!isSelected)
    const isAnySelectedTask = !!document.querySelector('.task.selected')
    if (isAnySelectedTask) setIsSelected(false)
  }
  return (
    <>
      <div 
        className={`task ${isMarked ? 'marked' : ''} ${isSelected ? 'selected' : ''}`}
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
            />
          )
        }
      </div>
    </>
  )
}
