import React from 'react'
import './myhotel.css'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect,useState } from 'react'
import hotelsAction from '../../redux/actions/hotelsAction'
import Swal from 'sweetalert2'
function MyHotel() {

    let [userIdSearch,setUserId]=useState('')
    let {getHotelsByUserId,deleteHotel}=hotelsAction
    const dispatch= useDispatch()
    const {hotelsUser} = useSelector((state) => state.hotels); 



    function listen(){
   if(userIdSearch.length!== 24){
    alert("??")
}else{
        dispatch(getHotelsByUserId({userId:userIdSearch})) 
   }
  }

const handleDelete = (id) =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your city has been deleted.',
            'success'
          )
          console.log(id)
      
          dispatch(deleteHotel({id:id}))
          dispatch(getHotelsByUserId({userId:userIdSearch}))
    
        }
      })
          
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
  
                  <button className='deleteButton' onClick={()=>handleDelete(x._id)}>
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