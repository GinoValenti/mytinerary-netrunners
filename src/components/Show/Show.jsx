import React, { useState } from 'react'
import './show.css'

function Show(props) {
  let{name,photo}=props
  const [mostrarOcultar, setMostrarOcultar] = useState(false)


  let hide = () => {
    setMostrarOcultar(!mostrarOcultar)
  }

  return (
    <>
    <div className='itinerary-container'>
       <h3>{name}</h3>
      <img className='messi-chiquito' src={photo} alt="" />
      {
        mostrarOcultar ?
        (
          <>
        <p className='btn-show' onClick={hide}>Hide comments</p>
        <div>
          <div className='user-comment-container'>
            <img className='user-img' src="https://img.a.transfermarkt.technology/portrait/big/28003-1631171950.jpg?lm=1" alt="Imagen usuario" />
            <p className='user-comment'>A life changing experience </p>
          </div>
        </div>
      <input className='comment-imput' placeholder='Leave your comment...'></input>          
          </>
        ) :
        <p className='btn-show' onClick={hide}>Show comments</p>
      } 





    </div>

    </>
  )
}

export default Show