import React,{useState} from 'react'
import "./hotelcards.css"
import SelectHotels from '../selectHotel/SelectHotels'
import "./searchbar.css"
import axios from "axios"
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react'



export default function HotelCards() {
  let [filter,setFilter]=useState([])
  let [searched,setSearched]=useState([])
  const [hotels, setHotels] = useState([]) 
  
  useEffect(()=>{
    axios.get("http://localhost:8000/api/hotels")
    .then (response =>setHotels(response.data.allhotels))
    
    
  }, [])
  
  function listen(value){
        
   

    if(value.target.type==="text"){
        setSearched(value.target.value)
    }
    
   
}
useEffect(()=>{
  axios.get(`http://localhost:8000/api/hotels?name=${searched}`)
  .then(response=>setFilter(response.data.allhotels))
},[searched])

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

<SelectHotels ></SelectHotels>
         
      
      
    

  
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
