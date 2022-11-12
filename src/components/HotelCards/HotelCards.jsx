import React,{useState} from 'react'
import "./hotelcards.css"
import SelectHotels from '../selectHotel/SelectHotels'
import "./searchbar.css"
import axios from "axios"
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react'
import { BASE_URL } from '../../api/url'



export default function HotelCards() {
  let [filter,setFilter]=useState([])
  let [searched,setSearched]=useState([])
  let [select, setSelect]=useState([])
  const [hotels, setHotels] = useState([]) 
  
  useEffect(()=>{
    axios.get(`${BASE_URL}/hotels`)
    .then (response =>setHotels(response.data.allhotels))
    
    
  }, [])
  
  function listen(value){
    
      if(value.target.value === "asc"){
        setSelect("&order="+value.target.value)
      }if(value.target.value === "desc") {
        setSelect("&order="+value.target.value)
      }

    console.log(select)

    if(value.target.type==="text"){
        setSearched(value.target.value)
        console.log(setSearched)
    }
    if(value.target.type==="text"){
      setSearched(value.target.value)
      console.log(setSearched)
  }
   
}
useEffect(()=>{
  axios.get(`${BASE_URL}/hotels?name=${searched}${select}`)
  .then(response=>setFilter(response.data.allhotels))
},[searched, select])

console.log(filter)

      return (
        <>
         <main className='maino'> 
    <form action="" className="search-bar">
	<input onChange={listen} className="inputi"   type="text"  pattern=".*\S.*" required/>
	<button className="search-btn" type="submit">

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
    {filter.map((x)=>{
      return(
        
     
<div key={x._id} className="cardsIndividual">
<img className='imgCardHotel' src={x.photo[0]} alt="" />
<Link to={`/hotels/details/${x._id}`}>  <h3 className="titleHotel">{x.name}</h3>  </Link>
  <p className="descriptionHotel">This hotel has a capacity of <span className='Capacity'>{x.capacity}</span></p>
</div>
    


        )
    })}
  </div>

  </>)
}