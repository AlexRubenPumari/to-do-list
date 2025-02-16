import { useState } from 'react'

export default function Prompt({ 
                          label, 
                          buttonText, 
                          hasValidation, 
                          tasks, 
                          callback,
                        }) {
  const [hasError, setHasError] = useState(false)
  function handleSubmit (e) {
    e.preventDefault()
    const input = e.target.input
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
    <form className='prompt' onSubmit={handleSubmit}>
      <label htmlFor='input' className="prompt__label">{label}:</label>
      <div className="prompt__inputContainer">
        <input 
          id='input'
          name='input'
          placeholder={`Ingrese ${label.toLowerCase()}...`} 
          onFocus={() => setHasError(false)}
          onChange={() => setHasError(false)}
          autoFocus
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

      <button type='submit' className='btn--cta prompt__btnCta'>
        {buttonText}
      </button>
    </form>
  )
}
