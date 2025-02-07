import { useState } from 'react'

import ButtonClose from './ButtonClose.jsx'




export default function Modal({ isModalToClose, initialIsOpen, callback }) {
  const [isOpen, setIsOpen] = useState(initialIsOpen)

  if (!isOpen) return null
  return (
    <div className='modal__overlay'>
			{isModalToClose && <ButtonClose 
                          callback={() => setIsOpen(!isOpen)} 
                          context='modal__btnClose' 
                       />
      }
      <div className='modal'>
        <div className='modal__content'>
          <label htmlFor=''>Nombre:</label>
          <input id='inputName' type='text' placeholder='Ingrese su nombre...' autoFocus/>
          <button onClick={changeName} className='btn--cta modal__btnCta'>Continuar</button>
        </div>
      </div>
    </div>
  )
  function changeName() {
    const newName = document.querySelector('.modal__content input').value
    callback(newName === '' ? 'Invitado' : newName)
    setIsOpen(!isOpen)
  }
}
