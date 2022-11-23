import React, { useState ,useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './newhotel.css'
import Swal from 'sweetalert2'
import {useDispatch} from "react-redux"
import hotelsAction from "../../redux/actions/hotelsAction"
import alertActions from '../../redux/actions/alertaHotel'

function NewHotel() {
  let dispatch = useDispatch()
  let {newHotel} = hotelsAction //se importa las acciones y desectrusturamos la accion que necesitamos
  let {alerta}=alertActions
  let navigate = useNavigate()
  let form = useRef()
  async function submit(event) {
    event.preventDefault()
    let data = {name,capacity,photo,citiId,userId}
    
    try{
      let res = await dispatch(newHotel(data))//llamo al dispatch y requiero la accion que necesito y la data del nuevo hotel
      if(res.payload.success){//la carga esta en res.payload que viene de la accion 
        //si es success que llame a la accion alerta de exito
        dispatch(alerta(Swal.fire({
          title: 'Congratulation!',
          text: 'Your hotel has been created',
          imageUrl: photo,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })))
        navigate(`/hotels/details/${res.payload.responseId}`)
        //uso el hook useNavigate para que luego de creado el hotel me redirija al details del mismo 
        //usando el res.payload.responseId que es una propiedad del objeto que retorna la accion
      }else{

        dispatch(alerta(Swal.fire({
          title: 'Error!',
          text: res.payload.response,
          icon: 'error',
          confirmButtonText: 'Cool'
        })))//si no es success dispara la alerta de error
        
      }
    }catch(error){
      console.log(error);
    }
  };
  
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [capacity, setCapacity] = useState('');
  const [citiId, setCitiId] = useState('');
  const [userId, setUserId] = useState('')





  return (
    <div className='new-container'>
      <div onSubmit={submit} className='form-container' ref={form}>
      <input htmlFor='name' className='new-input' name='name' type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter hotel name' />
        <input htmlFor='photo' className='new-input' name='photo' type="text"
        onChange={(e) => setPhoto(e.target.value)}
        placeholder='Enter hotel photo' />
        <input htmlFor='capacity' className='new-input' name='capacity' type="number" min="0"
        onChange={(e) => setCapacity(Number(e.target.value))}
        placeholder='Enter hotel capacity' />
        <input htmlFor='citiId' className='new-input' name='citiId' type="text"
        onChange={(e) => setCitiId(e.target.value)}
        placeholder='Enter city id' />
        <input htmlFor='userId' className='new-input' name='userId' type="text"
        onChange={(e) => setUserId(e.target.value)}
        placeholder='Enter admin id' />
        <button
        className='save-new-button' onClick={submit}>
            Save
            </button>
      </div>

    </div>
  )
}

export default NewHotel