import React from 'react'
import './myhotel.css'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect,useState } from 'react'
import hotelsAction from '../../redux/actions/hotelsAction'

function MyHotel() {

    let [userIdSearch,setUserId]=useState('')
    let {getHotelsByUserId}=hotelsAction
    const dispatch= useDispatch()
    const {hotelsUser} = useSelector((state) => state.hotels); 



    function listen(){
   if(userIdSearch.length!== 24){
    alert("??")
}else{
        dispatch(getHotelsByUserId({userId:userIdSearch})) 
   }
  }
  
 return(
    <> 



    <main className='maino'> 
    <div className="search-bar">
	<input onChange={e=>setUserId(e.target.value)}     type="text"  pattern=".*\S.*" required/>
	<button onClick={listen} >
send
	</button>
</div>
</main>
<h3>
find your own hotels by searching for your id</h3>
    
          
         <div className='containerCardsHotel'> 
        
     
           {hotelsUser.map((x)=>{
            return(
                <div  className="cardsIndividual">
                <img className='imgCardHotel' src={x.photo[0]} alt="" />
               <h3 className="titleHotel">{x.name}</h3> 
                  <p className="descriptionHotel">This hotel has a capacity of <span className='Capacity'>{x.capacity}</span></p>
                  <div className='buttonContainer'>
  
                  <button className='deleteButton'>
  DELETE HOTEL
  </button>
  <button className='editButton'>
  EDIT HOTEL
  </button>
                  </div>
                </div>
            )
           })}
            
         
  </div>

  </>
 )
}

export default MyHotel