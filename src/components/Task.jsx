import SvgCheck from './svg/SvgCheck.jsx'
import SvgEdit from './svg/SvgEdit.jsx'
import SvgDelete from './svg/SvgDelete.jsx'
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
            <div
              className="task__menu"
            >
              <button 
                className="task__btn btn--circle"
                title="Marcar como completado"
                onClick={handleDblClick}
              >
                <SvgCheck />
              </button> 
              {/* <button 
                className="task__btn btn--circle"
                title="Editar"
                onClick={onOpenModal}
              >
                <SvgEdit />
              </button> */}
              <button 
                className="task__btn btn--circle"
                title="Eliminar"
                onClick={handleClick_btnDelete}
              >
                <SvgDelete />
              </button>
            </div>
          )
        }
      </div>
    </>
  )
}
