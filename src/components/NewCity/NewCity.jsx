import React, { useState } from 'react'
import './newcity.css'

function NewCity() {


  const [name, setName] = useState('');
  const [continent,  setContinent] = useState('')
  const [photo, setPhoto] = useState('');
  const [population, setPopulation] = useState('');
  const [adminId, setAdminId] = useState('')


    const submit = () => {
        if (name === "" || continent === "" || photo === "" || population === "" || adminId === "") {
            alert("Complete all fields");
        } else {
            let newCity = JSON.stringify({name,continent,photo,population, adminId})
            console.log(newCity)
        }
    };


  return (
    <div className='new-container'>
      <div className='form-container'>
      <input htmlFor='title' className='new-input' name='title' type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter city name' />
        <input htmlFor='image' className='new-input' name='image' type="text"
        onChange={(e) => setPhoto(e.target.value)}
        placeholder='Enter city photo' />
        <input htmlFor='continent' className='new-input' name='continent' type="text"
        onChange={(e) => setContinent(e.target.value)}
        placeholder='Enter city continent' />
        <input htmlFor='population' className='new-input' name='population' type="number" min="0"
        onChange={(e) => setPopulation(Number(e.target.value))}
        placeholder='Enter city population' />
        <input htmlFor='userId' className='new-input' name='userId' type="text"
        onChange={(e) => setAdminId(e.target.value)}
        placeholder='Enter admin id' />        
        <button
        className='save-new-button' onClick={submit}>
            Save
            </button>  
      </div>
  
    </div>
  )
}

export default NewCity