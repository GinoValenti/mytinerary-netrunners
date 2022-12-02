import React from 'react'
import './modal.css'

function Modal({open , children, onClose, editId}) {


  if (!open) return null

  return (
    <>

<div class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content shadow">
                <div class="modal-header">
                    <h5 class="modal-title">Please tell us your name</h5>
                    <button type="button" onClick={onClose} id="close" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            
                {children}
            </div>
        </div>
    </div>
       
    </>
  )
}

export default Modal