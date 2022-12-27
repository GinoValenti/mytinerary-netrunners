import React from 'react'
import './loggedbtn.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { Link } from 'react-router-dom'



function LoggedBtn() {

    let { logged , name , role , photoo } = useSelector(store => store.usuario)
    console.log(photoo)

  return (
    <>
    
      <a href="/myprofile"><img className='user-logged-img' src={photoo} alt={name} /></a>
    </>

      
  )
}

export default LoggedBtn