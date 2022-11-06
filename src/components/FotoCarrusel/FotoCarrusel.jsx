import React from 'react'
import "../carousel/carousel.css"

function FotoCarrusel({foto, id, name}) {
  return (
    <>
    <div>
      <h2 className='absolute'> {name} </h2>
      <img  src={foto} key={id} alt='Img' className='photo imgcarousel' />
    </div>

    </>

  )
}

export default FotoCarrusel