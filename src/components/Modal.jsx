import ButtonClose from './ButtonClose.jsx'

export default function Modal({ 
                                isModalToClose, 
                                onClose,
                                isOpen, 
                                children 
                              }) {
  if (!isOpen) return null
  return (
    <div className='modal__overlay'>
			{isModalToClose && <ButtonClose 
                          callback={onClose} 
                          context='modal__btnClose' 
                       />
      }
      <div className='modal'>
        { children }
      </div>
    </div>
  )
}
