import React from 'react'
import './modal.css'

function Modal({open , children, onClose, editId}) {


  if (!open) return null

  return (
    <>
        <div className='overlay-modal'>
            <div className='modal'>
                <h2 className='modal-title'>Edit City</h2>
                <button className='modal-button' onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    </>
  )
}

export default Modal