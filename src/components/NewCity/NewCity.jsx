import axios from 'axios';
import React, { useState  , useRef } from 'react'
import { useDispatch } from 'react-redux';
import alertActions from '../../redux/actions/alertaCity';
import toDoActions from '../../redux/actions/toDoActions';
/* import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content' */
import './newcity.css'



function NewCity() {

/*   const MySwal = withReactContent(Swal) */

  let form = useRef()
  let dispatch = useDispatch()
  let { alerta } = alertActions
  let { newCity } = toDoActions 


  async function newCityCreate(event) {
    event.preventDefault()
    let data = {title,continent,image,population,userId}

    try {
      let res = await dispatch(newCity(data))
      console.log(res)
      if (res.payload.success){
        alert('se creo la ciudad')
      } else {
        dispatch(alerta(res.payload.response))
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const [title, setTitle] = useState('');
  const [continent,  setContinent] = useState('')
  const [image, setImage] = useState('');
  const [population, setPopulation] = useState('');
  const [userId, setUserId] = useState('')


  return (
    <div className='new-container'>
      <div onSubmit={newCityCreate} className='form-container' ref={form}>
      <input htmlFor='title' className='new-input' name='title' type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Enter city name' />
        <input htmlFor='image' className='new-input' name='image' type="text"
        onChange={(e) => setImage(e.target.value)}
        placeholder='Enter city photo' />
        <input htmlFor='continent' className='new-input' name='continent' type="text"
        onChange={(e) => setContinent(e.target.value)}
        placeholder='Enter city continent' />
        <input htmlFor='population' className='new-input' name='population' type="number" min="0"
        onChange={(e) => setPopulation(Number(e.target.value))}
        placeholder='Enter city population' />
        <input htmlFor='userId' className='new-input' name='userId' type="text"
        onChange={(e) => setUserId(e.target.value)}
        placeholder='Enter admin id' />        
        <button type='submit'
        className='save-new-button' onClick={newCityCreate}>
            Save
            </button>  
      </div>
  
    </div>
  )
}

export default NewCity