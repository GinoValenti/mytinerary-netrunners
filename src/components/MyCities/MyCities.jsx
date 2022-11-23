import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import citiesActions from '../../redux/actions/citiesActions'
import MyCitiesCard from '../MyCitiesCard.jsx/MyCitiesCard'
import { useState } from 'react'
import Swal from 'sweetalert2'
import Modal from '../Modal/Modal'
import './mycities.css'

function MyCities() {

  let { getCitiesUser, getAndDestroy, getAndEdit } = citiesActions
  const dispatch = useDispatch()

  const { citiesAdmin } = useSelector((state)=> state.cities)
  const [userId, setUserId] = useState('')

  let listenDeleted=(id, e)=>{
    console.log(userId)
    console.log(id)
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
/*           dispatch(getCitiesUser()) */
        }
      }
    })

  }



  let listenEdit = async () => {

    let data = { title,continent,image,population}

    if (title === '' || continent === '' || image === '' || image === null || population === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must complete all fields !',
      })
    } else {


    try {
      let res = await dispatch(getAndEdit({go, data}))
      console.log(res.payload.success)
      if (res.payload.success){
        Swal.fire({
          title: `${title} city has been updated`,
          imageUrl: image,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'image',
        })
        setIsOpen(false)
        dispatch(getCitiesUser({userId:userId}))
      } else {
        
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.payload.response,
/*             text: res.payload.response2  */
          })


      }

    } catch(error) {
      console.log(error.message)
    }
  }
  }


  const [go, setGo] = useState('')

  let listenEditGO = (id) => {
    setGo(id)
  }



  let listenInput=()=>{
    if (userId.length !== 24){
      alert('no se pudo')
    } else {
      dispatch(getCitiesUser({userId:userId}))
    }
  
  }

  const [isOpen, setIsOpen] = useState(false)

  const [title, setTitle] = useState('');
  const [continent,  setContinent] = useState('')
  const [image, setImage] = useState('');
  const [population, setPopulation] = useState('');

    
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
      {citiesAdmin === undefined ? <h2>Nothing to see here</h2> : citiesAdmin.map(e=><MyCitiesCard key={e._id} event1={listenDeleted} event2={()=> setIsOpen(true)} go={listenEditGO} id={e._id} name={e.title} img={e.image} ></MyCitiesCard>)}
    </div>
    <Modal editId={go} open={isOpen} onClose={()=> setIsOpen(false)}>
    <div className='edit-form-container' >
      <input htmlFor='title' className='new-input' name='title' type="text"
        placeholder='Enter city name' required 
        onChange={(e) => setTitle(e.target.value)} />
        
        <input htmlFor='image' className='new-input' name='image' type="text"
        placeholder='Enter city photo' required 
        onChange={(e) => setImage(e.target.value)} />
        <input htmlFor='continent' className='new-input' name='continent' type="text"
        placeholder='Enter city continent' required 
        onChange={(e) => setContinent(e.target.value)} />
        <input htmlFor='population' className='new-input' name='population' type="number" min="0"
        placeholder='Enter city population' required
        onChange={(e) => Number(setPopulation(e.target.value))} />
        <button type='submit'
        className='edit-new-button' onClick={listenEdit}>
            Save
            </button>  
      </div>
    </Modal>
    
    </>
  )
}

export default MyCities