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
      <form className='modal' onSubmit={e => e.preventDefault()}>
        { children }
      </form>
    </div>
  )
}
