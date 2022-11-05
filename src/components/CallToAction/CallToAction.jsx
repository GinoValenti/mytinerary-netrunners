import React from 'react'
import { NavLink } from 'react-router-dom'
import './cta.css'

function CallToAction() {
  return (
    <>
      <div className='call-to-action-container'>
        <NavLink className='nav-link' to='/hotels'><button>
    <span class="box">
        Hotels
    </span>
</button></NavLink>
        <NavLink className='nav-link' to='/cities'><button>
    <span class="box">
        Cities
    </span>
</button></NavLink>
      </div>
        </>
  )
}

export default CallToAction