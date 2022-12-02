import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './myreactions.css'


function MyReactions(props) {
    
    let { name, icon, id, iconName , deleteReaction, photo } = props

    let color = 'border-' + iconName
    
    return (
       <div className='my-reaction-card-container '>
        <div className={color}>
            <img className='reaction-icon' src={icon} alt={name} width='30px' />
            <div className='user-reaction-container'>
            <img className='my-reaction-img' src={photo} alt={name} />
            <h4 className='reaction-title'>{name}</h4>
               <div className=''>
                  <img className='delete-reactions' name={id} src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" width='40px' onClick={deleteReaction} />
               </div>
            </div>
        </div>

       </div>
    )
 }


export default MyReactions