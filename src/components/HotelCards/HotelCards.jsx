import React,{useState} from 'react'
import "./hotelcards.css"
import SelectHotels from '../selectHotel/SelectHotels'
import "./searchbar.css"
import axios from "axios"
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react'

import { useDispatch,useSelector } from 'react-redux';
import hotelsAction from '../../redux/actions/hotelsAction'



export default function HotelCards() {
  let [searched,setSearched]=useState('')
  let [select, setSelect]=useState('')
  
  let {getHotels}=hotelsAction
  const dispatch= useDispatch()
  
  const {hotels} = useSelector((state) => state.hotels); 

  useEffect(()=>{
    dispatch(getHotels({string:'hotels',valueSearch:searched,valueSelect:select}))
  },[searched,select])

  function listen(value){
    
      if(value.target.value === "asc"){
        setSelect("&order="+value.target.value)
      }if(value.target.value === "desc") {
        setSelect("&order="+value.target.value)
      }

    if(value.target.type==="text"){
        setSearched(value.target.value)
    }
}

console.log(hotels)

/* useEffect(()=>{
  axios.get(`${BASE_URL}/hotels?name=${searched}${select}`)
  .then(response=>setFilter(response.data.allhotels))
},[searched, select])

console.log(filter) */

      return (
        <>
         <main className='maino'> 
    <form action="" className="search-bar">
	<input onChange={listen} className="inputi"   type="text"  pattern=".*\S.*" required/>
	<button className="search-btn" >

	</button>
</form>
</main>

<div className="filter-area">
            <select onChange={listen} className="select" name="isAvailable">
                <option value="desc">Capacidad Ascendendente</option>
                <option value="asc">Capacidad Descendiente</option>
            </select>
        </div>
         
    <div className='containerCardsHotel'> 
    {hotels.map((x)=>{
      return(
        
     
              <div key={x._id} className="cardsIndividual">
              <img className='imgCardHotel' src={x.photo[0]} alt="" />
              <Link to={`/hotels/details/${x._id}`}>  <h3 className="titleHotel">{x.name}</h3>  </Link>
                <p className="descriptionHotel">This hotel has a capacity of <span className='Capacity'>{x.capacity}</span></p>
              </div>
            
            )})}
  </div>

  </>)
}