import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import itineraryAction from '../../redux/actions/itineraryAction'
import alertActions from '../../redux/actions/alertaCity';
import MyItinerariesCard from '../MyItinerariesCard/MyItinerariesCard'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import Modal from '../Modal/Modal'

function MyItineraries(props) {

  let { id  } = props
  let { token } = useSelector(store => store.usuario)

  let { getItinerariesUser, getAndDestroy, getAndEdit } = itineraryAction
  const dispatch = useDispatch()

  console.log(id)



  const { itineraryAdmin } = useSelector((state)=> state.itinerary)

  let { alerta } = alertActions

  let listenDeleted=(idItinerary, e)=>{

    console.log(idItinerary)
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
        console.log(idItinerary)
        dispatch(getAndDestroy({itineraryId : idItinerary, token: token}))
        dispatch(getItinerariesUser({userId: id}))
      }
      dispatch(getItinerariesUser({userId: id}))
    })

  }


  let listenEdit = async (event) => {
    event.preventDefault()

    let data = { name, cityIdGo ,photo, duration, price, description}
    console.log(data)
    if (name === '' || photo === '' || photo === null || description === '' || price === '' || duration === '' ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must complete all fields !',
      })
    } else {


    try {
      let res = await dispatch(getAndEdit({go, data, token}))
      console.log(res.payload.success)
      if (res.payload.success){
        Swal.fire({
          title: `${name} city has been updated`,
          imageUrl: photo,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'image',
        })
        setIsOpen(false)
        dispatch(getItinerariesUser({userId:id}))
      } else {
        dispatch(alerta(
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.payload.response,
          })))


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
  
  const [cityIdGo, setCityIdGo] = useState('')

  let cityIdGO = (cityId) => {
    setCityIdGo(cityId)
  }

  async function getLoggedItineraries() {
    await dispatch(getItinerariesUser({userId: id}))
  }

  useEffect(()=> {
    getLoggedItineraries()
  },[])


  const [isOpen, setIsOpen] = useState(false)

  const [name, setName] = useState('');
  const [price,  setPrice] = useState('')
  const [photo, setPhoto] = useState('');
  const [duration, setDuration] = useState('')
  const [description, setDescription] = useState('');

    
  return (
    <>
{/*     <div className='inputSearch-mycities'>
    <input type="text" placeholder="CodeAdmin..." onChange={(e) => setUserId(e.target.value)} />
    <button type='submit'
        className='save-new-buttonn' onClick={listenInput}>
            send adminId
    </button>  
    </div> */}
    <div className='containerCardsHotel'>
      {itineraryAdmin === undefined ? <h2>Nothing to see here</h2> : itineraryAdmin.map(e=><MyItinerariesCard key={e._id} event1={listenDeleted} event2={()=> setIsOpen(true)} go={listenEditGO} cityIdGO={cityIdGO} cityId={e.cityId} id={e._id} name={e.name} img={e.photo} ></MyItinerariesCard>)}
    </div>
    <Modal editId={go} open={isOpen} onClose={()=> setIsOpen(false)}>
    <div className='edit-form-container' >
        <input htmlFor='title' className='new-input' name='title' type="text"
        placeholder='Enter itinerary name' required 
        onChange={(e) => setName(e.target.value)} />
{/*         <input htmlFor='cityId' className='new-input' name='title' type="text"
        placeholder='Enter city Id' required 
        onChange={(e) => setCityId(e.target.value)} /> */}
        <input htmlFor='photo' className='new-input' name='photo' type="text"
        placeholder='Enter itinerary photo' required 
        onChange={(e) => setPhoto(e.target.value)} />
        <input htmlFor='duration' className='new-input' name='duration' type="number" min="0"
        placeholder='Enter itinerary duration' required 
        onChange={(e) => Number(setDuration(e.target.value))} />
        <input htmlFor='price' className='new-input' name='price' type="number" min="0"
        placeholder='Enter itinerary price' required
        onChange={(e) => Number(setPrice(e.target.value))} />
        <input htmlFor='description' className='new-input' name='description' type="text"
        placeholder='Enter itinerary description' required
        onChange={(e) => setDescription(e.target.value)} />
        <button type='submit'
        className='edit-new-button' onClick={listenEdit}>
            Save
            </button>  
      </div>
    </Modal>
    </>
  )
}

export default MyItineraries