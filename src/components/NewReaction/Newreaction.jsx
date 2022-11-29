import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import itineraryAction from '../../redux/actions/itineraryAction'
import reactionActions from '../../redux/actions/reactionAction'
import alertActions from '../../redux/actions/alertaCity'
import Swal from 'sweetalert2'
import './newreaction.css'
import { useEffect } from 'react'

function Newreaction() {

    const dispatch = useDispatch()
    let { newReaction } = reactionActions
    let { getAllItineraries } = itineraryAction
    let { alerta } = alertActions

    const { itinerary } = useSelector((state) => state.itinerary)
    let { id, token } = useSelector(store => store.usuario)
    
    let userId = id

    useEffect(()=>{
        dispatch(getAllItineraries())
      },[])

    console.log(itinerary);

    function NewReactionCreate(e) {
        e.preventDefault()

        let data = { userId ,name, icon, iconBack, itineraryId }
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, create it!'
          })
          .then(async(result) => {
            if (result.isConfirmed){
                try {
                    let res = await dispatch(newReaction({data,token}))
                    if (res.payload.success){
                        Swal.fire({
                            title: `${name} city has been updated`,
                            imageUrl: icon,
                            imageWidth: 400,
                            imageHeight: 200,
                            imageAlt: 'image',
                        })
                    } else {
                        dispatch(alerta(
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: res.payload.response,
                              })
                        ))
                    }
                } catch (error) {
                    console.log(error.message)
                }
            }
          })

    }

    function getItineraryId(e){
        setItineraryId(e.target.value)
    }

    const [itineraryId, setItineraryId] = useState('')
    const [name, setName] = useState('')
    const [icon, setIcon] = useState('')
    const [iconBack, setIconBack] = useState('')


  return (
    <div className='reaction-container'>
        <div className='reaction-form-container'>
            <select onClick={getItineraryId}>
                {
                    itinerary.map(x=> <option value={x._id}>{x.name} </option>)
                }
            </select>
            <input onChange={(e)=> setName(e.target.value)} htmlFor='icon' name='name' type="text" placeholder='name'/>
            <input onChange={(e)=> setIcon(e.target.value)} htmlFor='name' name='icon' type="text" placeholder='icon'/>
            <input onChange={(e)=> setIconBack(e.target.value)} htmlFor='name' name='iconBack' type="text" placeholder='icon-back'/>
            <button onClick={NewReactionCreate} className='save-new-reaction-button' type='submit'>
                NEW REACTION GO
            </button>
        </div>
    </div>
  )
}

export default Newreaction