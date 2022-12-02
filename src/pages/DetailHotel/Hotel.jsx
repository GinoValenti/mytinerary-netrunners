
import Show from '../../components/Show/Show';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import { BASE_URL } from '../../api/url'
import React,{useState} from 'react'
import "./detail.css"
import axios from "axios"

const SingleHotels = () => {




  
    let a=useParams()
    let [filter,setFilter]=useState([])
    let [shows,setShows]=useState([])
   

    a=(a.id)
    console.log(a);
    useEffect(()=>{
        axios.get(`${BASE_URL}/hotels`)
        .then(response=>setFilter(response.data.allhotels?.find((x) => x._id === a)))
    },[])

    useEffect (()=>{
        axios.get(`${BASE_URL}/show`)
        .then(response=>setShows(response.data.show))
    },[])
    let show=shows.filter(e=>e.hotelId==a)
    console.log(show);
    let {name,photo,capacity}=filter
console.log(filter);
  
    return (
    <>
        <div className='city-details-container'>
            <div className='city-details-banner'>
                <img className='city-details-banner-img' src={photo} />
          
            </div>
            <div>
            <div class="card">
            <div class="card__title">
              <div class="icon">
                <a href="#"><i class="fa fa-arrow-left"></i></a>
              </div>
              <h3>Hotel</h3>
            </div>
            <div class="card__body">
              <div class="half">
                <div class="featured_text">
                  <h1>{name}</h1>
                  <p class="sub">The best Hotel ever</p>
                  
                </div>
               
              <div class="half">
                <div class="description">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni.</p>
                </div>
                <span class="stock"><i class="fa fa-pen"></i> Capacity</span>
                <div class="reviews">
                  <ul class="stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star-o"></i></li>
                  </ul>
                  <span>{capacity} Persons</span>
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

                <div className='itinerary-container'>
              
                    
         {(show.length==0)? <h2 className='ShowError'>
Coming soon new shows at the hotel, stay tuned</h2>:show.map(e=><Show  name={e?.name} image={e?.photo} description={e?.description} idShow= {e?._id}/>) }           
       
     
        
        
                    
                </div>
            </div>
        </div>

    </>
  );
}; 

export default SingleHotels;