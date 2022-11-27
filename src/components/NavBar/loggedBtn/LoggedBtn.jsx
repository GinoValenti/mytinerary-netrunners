import React from 'react'
import './loggedbtn.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'



function LoggedBtn() {

    let { logged , name , role , photo } = useSelector(store => store.usuario)
    console.log(photo)

  return (
    <>
      <Link to="/myprofile"><img className='user-logged-img' src={photo} alt={name} /></Link>
    </>

      
  )
}

export default LoggedBtn