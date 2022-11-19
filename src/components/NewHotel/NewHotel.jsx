import React, { useState } from 'react'
import './newhotel.css'
import axios from "axios"

function NewHotel() {


  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [capacity, setCapacity] = useState('');
  const [citiId, setCitiId] = useState('');
  const [userId, setUserId] = useState('')


    const submit = async () => {
        if (name === "" || photo === "" || capacity === "" || citiId === ""  || userId === "") {
            alert("Complete all fields");
        } else {
            let newHotel = {name,photo,capacity,citiId, userId}
            console.log(newHotel)
            axios.post(("http://localhost:8000/api/hotels"),newHotel)
        }
    };


  return (
    <div className='new-container'>
      <div className='form-container'>
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