import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import toDoActions from '../../redux/actions/toDoActions'
import MyCitiesCard from '../MyCitiesCard.jsx/MyCitiesCard'
import { useState } from 'react'
import Swal from 'sweetalert2'
import './mycities.css'

function MyCities() {

  let { getCitiesUser, getAndDestroy } = toDoActions
  const dispatch = useDispatch()

  const { citiesAdmin } = useSelector((state)=> state.cities)

  const [userId, setUserId] = useState('')

  let [id, setId]=useState("")



  let listenDeleted=(id, e)=>{

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
    
        dispatch(getAndDestroy({cityId: id}))

        dispatch(getCitiesUser({userId:userId}))
        if (userId.length !== 24){
          alert('el admind id es invalido')
          dispatch(getCitiesUser())
        }
      }
    })

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
      {citiesAdmin.map(e=><MyCitiesCard key={e._id} event1={listenDeleted} id={e._id} name={e.title} img={e.image} ></MyCitiesCard>)}
    </div>
    
    </>
  )
}

export default MyCities