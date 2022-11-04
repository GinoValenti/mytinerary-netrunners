import React,{useState} from 'react'
import "./hotelcards.css"
import HotelsData from '../HotelsData'
export default function HotelCards() {
 
    const[HotelsArray,setHotelArray ]= useState([HotelsData])
  return (
    <div className='supremo'> 
    {HotelsData.map((x)=>{
        return(
       
<div class="container">
<img className='imgCard' src={x.photo[0]} alt="" />
  <p class="title">{x.name}</p>
  <div class="overlay"></div>
  <div class="button"><a href="#"> BUTTON </a></div>
</div>


        )
    })}
  </div>
  )
}
