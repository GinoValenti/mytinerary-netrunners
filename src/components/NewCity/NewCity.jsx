import axios from 'axios';
import React, { useState } from 'react'
import './newcity.css'


function NewCity() {


  const [title, setTitle] = useState('');
  const [continent,  setContinent] = useState('')
  const [image, setImage] = useState('');
  const [population, setPopulation] = useState('');
  const [userId, setUserId] = useState('')


    const submit = async () => {
        if (title === "" || continent === "" || image === "" || population === "" || userId === "") {
            alert("Complete all fields");
        } else {
            let newCity = {title,continent,image,population, userId}
            console.log(newCity)
            axios.post(('http://localhost:8000/api/cities'), newCity)
        }
        alert('A city has been created')
    };


  return (
    <div className='new-container'>
      <div className='form-container'>
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
        <button
        className='save-new-button' onClick={submit}>
            Save
            </button>  
      </div>
  
    </div>
  )
}

export default NewCity