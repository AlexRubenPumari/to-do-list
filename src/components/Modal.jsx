import CloseButton from './CloseButton.jsx'

export default function Modal({ 
                          isModalToClose, 
                          onClose,
                          children, 
                        }) {
  return (
    <div className='modal__overlay'>
			{isModalToClose && <CloseButton 
                          callback={onClose} 
                          classCSS='modal__btnClose' 
                       />
      }
      <div className='modal'>
        { children }
      </div>
    </div>
  )
}
