import SvgCheck from './svg/SvgCheck.jsx'
import SvgEdit from './svg/SvgEdit.jsx'
import SvgDelete from './svg/SvgDelete.jsx'
import { useState, useEffect } from "react"

export default function Task({ children }) {
  const [isMarked, setIsMarked] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  useEffect(
    () => {
      if (isMarked) setIsSelected(false)
  }, [isMarked])
  function handleClickMark () {
    setIsMarked(!isMarked)
  }
  if (isDeleted) return null

  return (
    <div 
      className={`task ${isMarked ? 'marked' : ''} ${isSelected ? 'selected' : ''}`}
      onDoubleClick={handleClickMark}
      onClick={() => setIsSelected(!isSelected)}
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
              onClick={handleClickMark}>
              <SvgCheck />
            </button> 
            <button 
              className="task__btn btn--circle"
              title="Editar">
              <SvgEdit />
            </button>
            <button 
              className="task__btn btn--circle"
              title="Eliminar"
              onClick={() => setIsDeleted(true)}>
              <SvgDelete />
            </button>
          </div>
        )
      }
    </div>
  )
}
