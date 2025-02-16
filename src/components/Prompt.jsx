import { useState } from 'react'

export default function Prompt({ label, buttonText, hasValidation, callback }) {
  const [hasError, setHasError] = useState(false)
  const id = `input${label}`
  function handleClick () {
    const input = document.getElementById(id)
    if (input.value === '' && hasValidation) {
      setHasError(true)
    } else {
      const value = input.value
      input.value = ''
      input.focus()
      callback(value)
    }
  }

  return (
    <div className='prompt'>
      <label htmlFor={id} className="prompt__label">{label}:</label>
      <div className="prompt__inputContainer">
        <input id={id} 
                type='text' 
                placeholder={`Ingrese ${label.toLowerCase()}...`} 
                autoFocus
                onFocus={() => setHasError(false)}
        />
        {
          hasValidation && (
            <span 
              className="prompt__textValidation"
              style={ {display: hasError ? 'block' : 'none'} }
            >
              Valor incorrecto
            </span>
          )
        }
      </div>

      <button type='submit' onClick={handleClick} className='btn--cta prompt__btnCta'>
        {buttonText}
      </button>
    </div>
  )
}
