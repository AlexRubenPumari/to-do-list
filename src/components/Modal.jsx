import { useState } from 'react'
import ButtonClose from './ButtonClose.jsx'



export default function Modal({ 
                                isModalToClose, 
                                toggleModal, 
                                children 
                              }) {
  return (
    <div className='modal__overlay'>
			{isModalToClose && <ButtonClose 
                          callback={toggleModal} 
                          context='modal__btnClose' 
                       />
      }
      <div className='modal'>
        { children }
      </div>
    </div>
  )
}
