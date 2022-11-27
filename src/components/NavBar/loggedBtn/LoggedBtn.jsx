import React from 'react'
import './loggedbtn.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'



function LoggedBtn() {

    let { logged , name , role , photo } = useSelector(store => store.usuario)
    console.log(photo)

  return (
    <>
      <NavLink to="/"><img className='user-logged-img' src={photo} alt={name} /></NavLink>
    </>

      
  )
}

export default LoggedBtn