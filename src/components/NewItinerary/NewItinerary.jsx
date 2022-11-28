import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import alertActions from '../../redux/actions/alertaCity'
import citiesActions from '../../redux/actions/citiesActions'
import itineraryAction from '../../redux/actions/itineraryAction'
import {useState, useEffect} from 'react'
import './newitinerary.css'
import Swal from 'sweetalert2'

function NewItinerary(props) {
  

  let dispatch = useDispatch()
  let {getCities}=citiesActions
  let {newItinerary} = itineraryAction
  let {alerta} = alertActions

  let { id } = useSelector(store => store.usuario)
  let userId = id

  console.log('El id del usuario ' + userId  )
    
  const { cities } = useSelector((state) => state.cities);

  useEffect(()=>{
    dispatch(getCities('cities'))
  },[])

  async function NewItineraryCreate(e) {
    e.preventDefault()

    let data = {  cityId, userId,  name, photo, description, price, duration }

    try {
      let res = await dispatch(newItinerary(data))
      console.log(res.payload.response)
      if (res.payload.success){
        Swal.fire({
          title: `${name} itinerary has been created`,
          imageUrl: photo,
          imageWidth: 300,
          imageHeight: 300,
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

    } catch(error) {
      console.log(error)
    }
  }

  function getCityId(e) {
    setCityId(e.target.value)
  }


  const [cityId, setCityId] = useState('')
  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [duration, setDuration] = useState('')

  return (
    <>
      <div className='new-itinerary-container'>
        <div className='new-itinerary-form'>
        <h2 className='new-itinerary-title'>Create a new Itinerary</h2>
        <select onClick={getCityId}>
          {
            cities.map(x => <option value={x._id} id={x._id} >{x.title}</option>)
          }
        </select>
        <input htmlFor='name' className='new-input' name='name' type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter name' />
        <input htmlFor='photo' className='new-input' name='photo' type="text"
          onChange={(e) => setPhoto(e.target.value)}
          placeholder='Enter photo' />
        <input htmlFor='description' className='new-input' name='description' type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter description' />
        <input htmlFor='price' className='new-input' name='price' type="text"
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder='Enter price' />
        <input htmlFor='duration' className='new-input' name='duration' type="text"
          onChange={(e) => setDuration(Number(e.target.value))}
          placeholder='Enter duration' />
        <button type='submit'
        className='save-itinerary-new-button' onClick={NewItineraryCreate}>
            Save
            </button>            
        </div>
      </div>
    </>
  )
}

export default NewItinerary