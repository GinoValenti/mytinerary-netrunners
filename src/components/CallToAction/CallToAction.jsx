import React from 'react'
import { NavLink } from 'react-router-dom'
import './cta.css'

function CallToAction() {
  return (
    <>
      <div className='call-to-action-container'>
        <NavLink className='nav-link' to='/hotels'><button className='cta-button'>Hotels</button></NavLink>
        <NavLink className='nav-link' to='/cities'><button className='cta-button'>Cities</button></NavLink>
      </div>
        </>
  )
}

export default CallToAction