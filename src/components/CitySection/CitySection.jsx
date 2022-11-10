import React from 'react'
import './citysection.css'

function CitySection() {
  return (
    <header>
        <div className="BannerHotels">
            <h1 className='titular'>Wonderful <span className="upspan">cities. </span></h1>
            <div className="d-flex gap-3 justify-content-center flex-wrap checks" id="checkbox-container">
            </div>
        </div>
    </header>
  )
}

export default CitySection