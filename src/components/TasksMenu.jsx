import SvgCheck from './svg/SvgCheck.jsx'
import SvgEdit from './svg/SvgEdit.jsx'
import SvgDelete from './svg/SvgDelete.jsx'
export default function TasksMenu({handleDblClick, handleClick_btnDelete}) {
  return (
    <div className="task__menu">
      <button
        className="task__btn btn--circle"
        title="Marcar como completado"
        onClick={handleDblClick}>
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
        onClick={handleClick_btnDelete}>
        <SvgDelete />
      </button>
    </div>
  )
}
