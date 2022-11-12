import React from 'react'
import './cityCard.css'

function CityCard(props) {

  let {name,description,photo}= props



  return (

      <div className='containerCardsHotel'>
            <div className="cardsIndividual">
              <h2>{name} </h2>
              <img className='imgCardHotel' src={photo} alt={name} />
              <p className='descriptionHotel'>{description}</p>
            </div>
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