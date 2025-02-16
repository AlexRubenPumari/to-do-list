export default function CloseButton ({ classCSS = '', callback }) {
  const buttonClassName = 'btnClose ' + classCSS
  return (
    <button className={buttonClassName} onClick={callback}>
      <span className="btnClose__symbol">
        ×
      </span>
    </button>
  )
}

