import React, { useState } from 'react'
import './newcity.css'

function NewCity() {


  const [inputText, setInputText] = useState({
    name: "",
    file: ""
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

    const {name, file} = inputText

    localStorage.setItem("newCity", JSON.stringify([...data, inputText]))
  }


  return (
    <div className='new-container'>
        <input htmlFor='name' className='new-input' name='name' type="text"
        onChange={getNewCity}
        placeholder='Enter city name' />
        <input htmlFor='file' className='new-input' name='file' type="text"
        onChange={getNewCity}
        placeholder='Enter city photo' />
    <button
    className='save-new-button' onClick={addNewCity}>
        Save
        </button>    
    </div>
  )
}

export default NewCity