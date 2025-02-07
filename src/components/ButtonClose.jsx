function ButtonClose({ callback, context}) {
  const buttonClassName = 'btnClose ' + context ?? '' 
  return (
    <button className={buttonClassName} onClick={callback}>
      <span className="btnClose__symbol">
        ×
      </span>
    </button>
  )
}

export default ButtonClose
