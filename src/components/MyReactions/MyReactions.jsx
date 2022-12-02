import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './myreactions.css'


function MyReactions(props) {
    
    let { name, icon, id, deleteReaction, photo } = props
    
    return (
       <div className='my-reaction-card-container'>
        <div>
            <hr className='hr-reaction' />
            <img src={icon} alt={name} width='30px' />
            <div className='user-reaction-container'>
            <img className='my-reaction-img' src={photo} alt={name} />
            <h4>{name}</h4>
          <div className=''>
             <img className='delete-reactions' name={id} src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" width='40px' onClick={deleteReaction} />
          </div>
            </div>
        </div>

       </div>
    )
 }


export default MyReactions