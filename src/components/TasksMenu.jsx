import SvgCheck from './svg/SvgCheck.jsx'
import SvgEdit from './svg/SvgEdit.jsx'
import SvgDelete from './svg/SvgDelete.jsx'
export default function TasksMenu({ 
                          markTask, 
                          editTask,
                          deleteTask,
                        }) {
  return (
    <div className="task__menu">
      <button
        className="task__btn btn--circle"
        title="Marcar como completado"
        onClick={markTask}>
        <SvgCheck />
      </button>
      <button
        className="task__btn btn--circle"
        title="Editar"
        onClick={editTask}>
        <SvgEdit />
      </button>
      <button
        className="task__btn btn--circle"
        title="Eliminar"
        onClick={deleteTask}>
        <SvgDelete />
      </button>
    </div>
  )
}
