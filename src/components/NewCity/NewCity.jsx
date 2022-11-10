import React, { useState } from 'react'
import './newcity.css'

function NewCity() {


  const [inputText, setInputText] = useState({
    name: "",
    file: "",
    continent: "",
    population: ""
  })

  const [data, setData] = useState([])

  const getNewCity = (e) => {
    const {value, name} = e.target

    setInputText(()=> {
      return {
        ...inputText,
        [name]:value
      }
    })
  }

  const addNewCity = (e)=> {
    e.preventDefault()

    localStorage.setItem("newCity", JSON.stringify([...data, inputText]))
  }


  return (
    <div className='new-container'>
      <div className='form-container'>
      <input htmlFor='name' className='new-input' name='name' type="text"
        onChange={getNewCity}
        placeholder='Enter city name' />
        <input htmlFor='file' className='new-input' name='file' type="text"
        onChange={getNewCity}
        placeholder='Enter city photo' />
        <input htmlFor='continent' className='new-input' name='continent' type="text"
        onChange={getNewCity}
        placeholder='Enter city continent' />
        <input htmlFor='population' className='new-input' name='population' type="number" min="0"
        onChange={getNewCity}
        placeholder='Enter city population' />
        <button
        className='save-new-button' onClick={addNewCity}>
            Save
            </button>  
      </div>
  
    </div>
  )
}

export default NewCity