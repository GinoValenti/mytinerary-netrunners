import React from 'react'
import { useDispatch } from 'react-redux'
import { useState, useRef } from 'react'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'
import showsAction from '../../redux/actions/showsAction'
import hotelsAction from '../../redux/actions/hotelsAction'
import { useEffect } from 'react'
import "./createshow.css"
function CreateShow()  {
const {getOnlyHotels}= hotelsAction
let { token} = useSelector(store => store.usuario)
    const {hotels} = useSelector((state) => state.hotels); 
    console.log(hotels);
    let { id } = useSelector(store => store.usuario)
    let userId = id
    let {newShow} = showsAction
    
let dispatch = useDispatch()

useEffect( ()=>{

    dispatch(getOnlyHotels())
  },[])

async function submit(event) {
    event.preventDefault()
    let data = {hotelId,name,description,photo,price,date,userId}
    console.log(data);

    if (name === '' || photo === '' || photo === null || description === '' || price === '' || date === '' ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must complete all fields !',
      })
    } else {
    try{
      let res = await dispatch(newShow({data,token}))
      if(res.payload.success){
        
        dispatch((Swal.fire({
          title: 'Congratulation!',
          text: 'Your show has been created',
          imageUrl: photo,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })))
       
        
      }else{

        dispatch((Swal.fire({
          title: 'Error!',
          text: res.payload.response,
          icon: 'error',
          confirmButtonText: 'Cool'
        })))
        
      }
    }catch(error){
      console.log(error);
    }
  }}
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [hotelId, setHotelId] = useState('')
  const [date, setDate] = useState('')
function getHotelId(e){
    setHotelId(e.target.value)
}

  return (

 
    <div className='new-itinerary-container'>
    <div className='new-itinerary-form' >
        <select onChange={getHotelId}  name="" id="">


            {hotels.map((x)=><option value={x._id}>{x.name}</option>)}

        </select>
    <input htmlFor='name' className='' name='name' type="text"
      onChange={(e) => setName(e.target.value)}
      placeholder='Enter show name' />
      <input htmlFor='photo' className='' name='photo' type="text"
      onChange={(e) => setPhoto(e.target.value)}
      placeholder='Enter show photo' />
      <input htmlFor='capacity' className='' name='capacity' type="text" min="0"
      onChange={(e) => setDescription(e.target.value)}
      placeholder='Enter show description' />
       <input htmlFor='date' className='' name='date' type="date" min="0"
      onChange={(e) => setDate(e.target.value)}
      placeholder='Enter show date' />
         <input htmlFor='capacity' className='' name='capacity' type="number" min="0"
      onChange={(e) => setPrice(e.target.value)}
      placeholder='Enter show price' />

      <button
      className='save-itinerary-new-button' onClick={submit}>
          Save
          </button>
    </div>

  </div>

  )
}
export default CreateShow