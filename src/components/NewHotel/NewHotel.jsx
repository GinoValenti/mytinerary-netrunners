import React, { useState } from 'react'
import './newhotel.css'

function NewHotel() {


  const [inputText, setInputText] = useState({
    name: "",
    file: ""
  })

  const [data, setData] = useState([])

  const getNewHotel = (e) => {
    const {value, name} = e.target

    setInputText(()=> {
      return {
        ...inputText,
        [name]:value
      }
    })
  }

  const addNewHotel = (e)=> {
    e.preventDefault()

    const {name, file} = inputText

    localStorage.setItem("newHotel", JSON.stringify([...data, inputText]))
  }


  return (
    <div className='new-container'>
        <input htmlFor='name' className='new-input' name='name' type="text"
        onChange={getNewHotel}
        placeholder='Enter hotel name' />
        <input htmlFor='file' className='new-input' name='file' type="text"
        onChange={getNewHotel}
        placeholder='Enter hotel photo' />
    <button
    className='save-new-button' onClick={addNewHotel}>
        Save
        </button>
    </div>
  )
}

export default NewHotel