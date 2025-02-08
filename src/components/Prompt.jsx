export default function Prompt({ label, buttonText, callback }) {
  const id = `input${label}`
  function handleClick () {
    const input = document.getElementById(id)
    console.log(input)
    callback(input)
  }

  return (
    <div className='modal__content'>
      <label htmlFor={id}>{label}:</label>
      <input id={id} 
             type='text' 
             placeholder={`Ingrese ${label.toLowerCase()}...`} 
             autoFocus 
      />
      <button onClick={handleClick} className='btn--cta modal__btnCta'>
        {buttonText}
      </button>
    </div>
  )
}
