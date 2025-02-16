import ButtonClose from './ButtonClose.jsx'

export default function Modal({ 
                                isModalToClose, 
                                onClose,
                                children 
                              }) {
  return (
    <div className='modal__overlay'>
			{isModalToClose && <ButtonClose 
                          callback={onClose} 
                          context='modal__btnClose' 
                       />
      }
      <form className='modal' onSubmit={e => e.preventDefault()}>
        { children }
      </form>
    </div>
  )
}
