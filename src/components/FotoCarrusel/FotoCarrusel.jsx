import React from 'react'
import "../carousel/carousel.css"

function FotoCarrusel({foto, id}) {
  return (
    <img  src={foto} key={id} alt='Img' className='photo imgcarousel' />
  )
}

export default FotoCarrusel