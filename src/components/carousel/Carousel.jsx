import React, { useState,useEffect } from 'react'
import "../carousel/carousel.css"
import carrusel from '../carrusel'
import FotoCarrusel from '../FotoCarrusel/FotoCarrusel'

function Carousel() {

  let [numero, setNumero] = useState(0)
  let [id, setId] = useState(0)

  useEffect(
    ()=>{  
      let idInterval = setInterval(
        //primer parametro la funcion que se va a ejecutar en cada intervalo de tiempo
        ()=> {
            next()
            console.log('pasaron 5 segundos')
        },
        //segundo parametro es el intervalo en milisengudos
        5000
        //retorna un id asociado al intervalo (que es un numero)
        //acepta una funcion que resetea el intervalo/contador con ese id
      )
      setId(idInterval)
      return clearInterval(id)
      // eslint-disable-next-line
    },[numero])

  function next() {

    if (numero<carrusel.length-4){
      setNumero(numero+4)
    } else {
      setNumero(0)
    }
  }

  function prev() {
    if (numero>3) {
      setNumero(numero-4)
    } else {
      setNumero(carrusel.length-4)
    }
  }
 

  return (
    <>
    <div className='carousel'>
      <FotoCarrusel foto={carrusel[numero].foto} ></FotoCarrusel>
      <FotoCarrusel foto={carrusel[numero+1].foto} ></FotoCarrusel>
      <FotoCarrusel foto={carrusel[numero+2].foto} ></FotoCarrusel>
      <FotoCarrusel foto={carrusel[numero+3].foto} ></FotoCarrusel>
    </div>
    <div className='btn-container'>
        <span className='arrow' onClick={prev}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAK1JREFUSEvtlNsNgzAQBIcO0gkpgZSQSmgh6SgdQAnQSUpAJ4F0imLfGsMf/rZmbtePhpNXczKfSxA2XFLRDeiBd0h1G1SBwQfgvgpeqkQRePgMdMD3KEEV3IbIJaiG5wSHwFMCD1erTg77ryITjEBbQk/VnToDL5mAR8nN8YNFh7wl2S2J3kF1kkhgaaskiuBX8gQ+6gVQBZvEvgkZHr1kdcjsvpIEu4SXIKxtAb+eIBmkl/3TAAAAAElFTkSuQmCC"/></span>
        <span className='arrow' onClick={next}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKZJREFUSEvtlMENwjAQBMcd0AmUkHRAR6EEOqGEUAJ0QgdE90NRZN8uOC/8tmbkvfUVOp/Smc9f0EzYiegCXIFXkw7yDAI+AQ9gzEjUFxyAO3DMSlRBpCJJHIEkcQVpSU3wzrTk487m4H8peALDulnfRjQDJ2ATHq9zBdGkJtwVpOGOQII7gjNwq2W+bp4zg5DEuuiy7MSv4bcoLXIiSsOdIUvwXQQLDaAoGREMQ18AAAAASUVORK5CYII="/></span>
    </div>
    
    </>

  )
}

export default Carousel