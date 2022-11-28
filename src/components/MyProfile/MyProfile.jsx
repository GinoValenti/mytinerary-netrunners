import React from 'react'
import "./myprofile.css"
import { useSelector , useDispatch} from 'react-redux'
import Swal from "sweetalert2";
import ModalHotel from "../../components/ModalHotel/ModalHotel";
import { useState,useEffect } from 'react'
import userActions from '../../redux/actions/userAction'
import Logoutbtn from '../LogOutBtn/Logoutbtn';

function MyProfile(props) {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [isOpen, setIsOpen] = useState(false);

let{getOneUser,editUser}= userActions

let {id}= props
console.log(id);
let dispatch = useDispatch()


let { profile} = useSelector(store => store.usuario)
console.log(profile);

async function getUsers(){
  
  await dispatch(getOneUser(id))
}


useEffect((e)=>{
  
  getUsers()
},[])


let listenEdit = async (event) => {
  event.preventDefault()

  let data = {name,photo}
console.log(data);
  try {
    let res = await dispatch(editUser({id, data}))

    if (res.payload.success){
      Swal.fire({
        title: `${name} show has been updated`,
        imageUrl: photo,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'image',
      })
      dispatch(getOneUser(id))
    } else {
      dispatch((
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: res.payload.response,
/*             text: res.payload.response2  */
        })))
    }

  } catch(error) {
    console.log(error.message)
  }
}


  return (
<> 
<div className='full-height'>

<div class="content-profile-page">
   <div class="profile-user-page card">
      <div class="img-user-profile">
        <img class="profile-bgHome" src="https://37.media.tumblr.com/88cbce9265c55a70a753beb0d6ecc2cd/tumblr_n8gxzn78qH1st5lhmo1_1280.jpg" />

        <img class="avatar" src={profile[0]?.photo} alt="jofpin"/>
           </div>

          <div class="user-profile-data">
           
            <p>{profile[0]?.name}</p>
            <button onClick={() => (setIsOpen(true))}>Edit profile</button>
            <Logoutbtn/>
          </div> 
        
      
      </div>
    </div>
    <ModalHotel  open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="edit-form-container">
            <input
              htmlFor="name"
              className="new-input"
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              htmlFor="photo"
              type="text"
              className="new-input"
              name="photo"
              placeholder="Photo"
              onChange={(e) => setPhoto(e.target.value)}
            />
          
            <div className="edit-button">
              <button onClick={listenEdit}  type="submit">Edit</button>
            </div>
          </div>
          </ModalHotel>


</div>

 </>

  )
}
export default MyProfile