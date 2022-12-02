import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../api/url'
import Itinerary from '../../components/Itinerary/Itinerary'
import reactionActions from '../../redux/actions/reactionAction'
import '../../components/Itinerary/itinerary.css'
import { useDispatch } from 'react-redux'

function DetailsCity() {

  

  let a=useParams()
  let [filter, setFilter]= useState([])
  let [itineraries,setItineraries]=useState([])
  console.log(a)
  a=(a.id).slice(1)

  useEffect(()=>{
    axios.get(`${BASE_URL}/cities`)
    .then(response=>setFilter(response.data.allcities.find((x)=>x._id === a))) 
  },[])

  let {title, continent, image, population, userId, } = filter

  console.log(filter)
  useEffect(()=>{
    axios.get(`${BASE_URL}/itinerary`)
    .then(response=>setItineraries(response.data.itineraries))
  },[])

  console.log(itineraries)

  let itinerarie = itineraries.filter(e=>e.cityId==a)
  console.log(itineraries.name)



  return (
    <>{
      <div>
        <div className='city-details-container'>
{            <div className='city-details-banner'>
                <img className='city-details-banner-img' src={image} alt="" />
            </div>}
            <div class="card">
            <div class="card__title">
              <div class="icon">
                <a href="#"><i class="fa fa-arrow-left"></i></a>
              </div>
              <h3>City</h3>
            </div>
            <div class="card__body">
              <div class="half">
                <div class="featured_text">
                  <h1>{title}</h1>
                </div>
               
              <div class="half">
                <span class="stock"><i class="fa fa-pen"></i>Population</span>
                <div class="reviews">
                  <ul class="stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star-o"></i></li>
                  </ul>
                  <span>{population} Persons</span>
                </div>
              </div>
              </div>
            </div>
            <div class="card__footer">
              <div class="recommend">
                <p>Recommended by</p>
                <h3>Gino Valenti & Gaston Zappulla</h3>
              </div>
              
            </div>
          </div>
            <div>
                <div className='info-details'>
                <h2 className='popular-itineraries'>Popular Itinerarys in your city</h2>
                </div>

                <div className='itinerary-container'>
                    
                    <article className='itinerary-article'>
                    </article>
                </div>
            </div>
        </div>
      </div>
      
    }
    {
        (itinerarie.length!=0)?itinerarie.map(e=><Itinerary itineraryId={e?._id} name={e?.title} photo={e?.photo[0]} description={e?.description} />):<h2 className='text-center'>No itineraries were found in this city</h2>
    }  
    </>


  )
}

export default DetailsCity