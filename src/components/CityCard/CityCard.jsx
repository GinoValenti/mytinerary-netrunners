import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './cityCard.css'

function CityCard(props) {

  let {id,name,description,photo}= props

  

  return (


            <div className="cardsIndividual-cities">
              <NavLink to={`/details/:${id}`} ><h3 className='titleHotel'>{name} </h3></NavLink>
              <NavLink to={`/details/:${id}`}> <img className='imgCardHotel' src={photo} alt={name} /></NavLink>
            </div>
 

/*         <div className='containerCardsHotel'>
          {cities.map(x=>{
            return (
              <div className="cardsIndividual">
                <img className='imgCardHotel' src={x.image} alt="" />
                <h3 className="titleHotel">{x.title}</h3>
              </div>
            )
          })}
      </div> */
  )
}


export default CityCard