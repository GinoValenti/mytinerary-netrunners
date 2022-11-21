import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import toDoActions from '../../redux/actions/toDoActions'
import MyCitiesCard from '../MyCitiesCard.jsx/MyCitiesCard'
import { useState } from 'react'
import './mycities.css'

function MyCities() {

  let { getCitiesUser, getAndDestroy } = toDoActions
  const dispatch = useDispatch()

  const { cities } = useSelector((state)=> state.cities)

  const [userId, setUserId] = useState('')

  let [id, setId]=useState("")



  let listenDeleted=(id, e)=>{

    console.log(id)
    
    setId(id)
    dispatch(getAndDestroy({cityId: id}))
    
    alert('ciudad destruidisima') 
    dispatch(getCitiesUser({userId:userId})) 
  }


  let listenInput=()=>{
    if (userId.length !== 24){
      alert('no se pudo')
    } else {
      dispatch(getCitiesUser({userId:userId}))
    }
  
  }
    
  return (
    <>
    <div className='inputSearch-mycities'>
    <input type="text" placeholder="CodeAdmin..." onChange={(e) => setUserId(e.target.value)} />
    <button type='submit'
        className='save-new-buttonn' onClick={listenInput}>
            send adminId
    </button>  
    </div>
    <div className='containerCardsHotel'>
      {cities.map(e=><MyCitiesCard key={e._id} event1={listenDeleted} id={e._id} name={e.title} img={e.image} ></MyCitiesCard>)}
    </div>
    
    </>
  )
}

export default MyCities