import React, { useState } from 'react'
import './newhotel.css'

function NewHotel() {


  const [inputText, setInputText] = useState({
    name: "",
    capacity:"",
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

    const {name, file, capacity} = inputText

    localStorage.setItem("newHotel", JSON.stringify([...data, inputText]))
  }


  return (
    <div className='new-container'>
      <div className='form-container'> 
        <input htmlFor='name' className='new-input' name='name' type="text"
        onChange={getNewHotel}
        placeholder='Enter hotel name' />
         <input htmlFor='capacity' className='new-input' name='capacity' type="text"
        onChange={getNewHotel}
        placeholder='Enter the capacity'/>
        <input htmlFor='file' className='new-input' name='file' type="text"
        onChange={getNewHotel}
        placeholder='Enter hotel photo' />
          <button
    className='save-new-button' onClick={addNewHotel}>
        Save
        </button>
        </div>
  
    </div>
  )
}

export default NewHotel