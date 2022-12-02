import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Reaction from '../../components/Reaction/Reaction'
import './itinerary.css'
import reactionActions from '../../redux/actions/reactionAction'
import { useEffect } from 'react'

function Itinerary(props) {

  let dispatch = useDispatch()

  let { getReactionItinerary } = reactionActions

  async function getReactions(){
    await dispatch(getReactionItinerary(itineraryId))
  }

  useEffect(()=>{
    getReactions()
  },[])

  const [mostrarOcultar, setMostrarOcultar] = useState(false)

  let {title, photo, description,price,duration, itineraryId} = props

  console.log(itineraryId)
  let hide = () => {
    setMostrarOcultar(!mostrarOcultar)
  }

  

  return (
    <>

    <div className='itinerary-container'>
      <h1>{title} </h1>
      <h2>{price}</h2>
      <h2>{duration} </h2>
      <img className='messi-chiquito' src={photo} alt="" />
      {
        <Reaction idItinerary={itineraryId} />
      }
      {
        mostrarOcultar ?
        (
          <>
        <p className='btn-show' onClick={hide}>Hide comments</p>
        <div>
          <div className='user-comment-container'>
            <img className='user-img' src="https://img.a.transfermarkt.technology/portrait/big/28003-1631171950.jpg?lm=1" alt="Imagen usuario" />
            <p className='user-comment'> {description} </p>
          </div>
          <input className='comment-imput' placeholder='Leave your comment...'></input>   
        </div>
       
          </>
        ) :
        <p className='btn-show' onClick={hide}>Show comments</p>
      } 






    </div>

    </>
  )
}

export default Itinerary