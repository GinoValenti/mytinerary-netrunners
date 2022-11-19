import React from 'react'
import './citydetails.css'
import Itinerary from '../Itinerary/Itinerary'
import { useParams } from 'react-router-dom'
import citiesArr from '../citiesArray'

function City(props) {

    let {title, image, description, price, duration, userId} = props

  return (
    <>
        <div className='city-details-container'>
            <div className='city-details-banner'>
                <img className='city-details-banner-img' src={image} alt="" />
                <h2 className='details-title'>{title} </h2>
            </div>
            <div>
                <div className='info-details'>
                <p>{title} is one of the greates citys in the world</p>

                <h2>Popular Itinerarys in your city</h2>
                </div>

                <div className='itinerary-container'>
                    
                    <article className='itinerary-article'>
                    <h2>{description}</h2>
                    <h3>{price}</h3>
                    <h3>{duration}</h3>
                    <img src={image} ></img>
                    </article>
                </div>
            </div>
        </div>

    </>
  )
}

export default City