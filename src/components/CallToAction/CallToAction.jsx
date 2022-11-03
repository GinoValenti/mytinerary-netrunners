import React from 'react'
import { NavLink } from 'react-router-dom'
import './cta.css'

function CallToAction() {
  return (
    <>
      <div>
        <button className='cta-button'><NavLink className='nav-link' to='/hotels'>Hotels</NavLink></button>
        <button className='cta-button'><NavLink className='nav-link' to='/cities'>Cities</NavLink></button>
      </div>
        </>
  )
}

export default CallToAction