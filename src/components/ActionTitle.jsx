import SvgEdit from './svg/SvgEdit.jsx'

export default function ActionTitle ({ children, callback }) {
  function handleClick () {
    callback()
  }
  return (
    <div className="titleWithButton">
      <h1 className="titleWithButton__title">
        { children }
      </h1>
      <button
        title="Cambiar nombre"
        className="titleWithButton__btn btn--cta"
        onClick={handleClick}>
        <SvgEdit />
      </button>
    </div>
  )
}
