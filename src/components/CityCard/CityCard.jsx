import React, { useState } from 'react'
import citiesArr from '../citiesArray'
    
import './cityCard.css'



function CityCard() {


  const [cities, setCities] = useState(citiesArr)



  return (
    <>
    <div className='container-cities-cards'>
        {citiesArr.map((x)=>{
            return (
                <div className="cards container-cards">
                    <img className='card-img' src={x.photo} alt="" />
                    <p className="title">{x.name}</p>
                    <div className="overlay"></div>
                    <div className="button"><a href="#"> BUTTON </a></div>
                </div>                

            )
        })}
    </div>
 
    </>

    
  )
}

export default CityCard

{/*         <div className="cards container-cards">
            <img className='card-img' src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" alt="" />
            <p className="title">card title</p>
            <div className="overlay"></div>
            <div className="button"><a href="#"> BUTTON </a></div>
        </div> */}