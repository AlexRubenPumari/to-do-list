import { useState } from 'react'

export default function Prompt({ 
                          label, 
                          buttonText, 
                          hasValidation, 
                          tasks, 
                          callback,
                        }) {
  const [hasError, setHasError] = useState(false)
  const inputId = `input${label}`
  function handleClick () {
    const input = document.getElementById(inputId)
    const task = input.value
    
    if (hasValidation && task === '') {
      setHasError(true)
    } else {
      callback(task, tasks)
    }
    input.value = ''
    input.focus()
  }

  return (
    <div className='prompt'>
      <label htmlFor={inputId} className="prompt__label">{label}:</label>
      <div className="prompt__inputContainer">
        <input id={inputId} 
                type='text' 
                placeholder={`Ingrese ${label.toLowerCase()}...`} 
                autoFocus
                onFocus={() => setHasError(false)}
                onChange={() => setHasError(false)}
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
