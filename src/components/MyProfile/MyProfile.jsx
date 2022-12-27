import React from 'react'
import "./myprofile.css"
import { useSelector , useDispatch} from 'react-redux'
import Swal from "sweetalert2";
import ModalHotel from "../../components/ModalHotel/ModalHotel";
import { useState,useEffect } from 'react'
import userActions from '../../redux/actions/userAction'
import Logoutbtn from '../LogOutBtn/Logoutbtn';
import MyReactions from '../MyReactions/MyReactions';
import reactionActions from '../../redux/actions/reactionAction'

import  CreateShow  from '../../components/createShow/CreateShow';
function MyProfile() {
  let { token,id} = useSelector(store => store.usuario)
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [lastName, setlastName] = useState('');
  const [isOpen, setIsOpen] = useState(false);

/*   const [reload, setReload] = useState(true)
 */
  let{getOneUser,editUser}= userActions



let dispatch = useDispatch()


let { namee,photoo} = useSelector(store => store.usuario)

console.log(namee);
async function getUsers(){
  
  await dispatch(getOneUser(id))
}


useEffect((e)=>{
  
  getUsers()
},[])


let listenEdit = async (event) => {
  event.preventDefault()

  let data = {name,photo,lastName}
console.log(data);
if (name === '' || photo === '' || photo === null  ) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'You must complete all fields !',
  })
} else {
  try {
    let res = await dispatch(editUser({id, data,token}))

    if (res.payload.success){
      Swal.fire({
        title: `${name} has been updated`,
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
}}


const { getUserReactions, deleteReaction } = reactionActions

async function userReactions() {

  let res = await dispatch(getUserReactions({userId: id,token:token }))
  
  console.log(res.payload);
}

useEffect(()=> {
  userReactions()
}, [])

let { reactionProfile } = useSelector(store=>store.reaction)




async function deleteReactionFx(e) {
  e.preventDefault()

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
          'Your reaction has been deleted !.',
          'success'
        )
        dispatch(deleteReaction({ id : e.target.name, token})) 
        dispatch(getUserReactions({userId: id,token:token }))
      }
      dispatch(getUserReactions({userId: id,token:token }))
    })  


}

useEffect(()=> {
  deleteReactionFx()
}, [])


  return (
<> 

<div className='full-height'>
<div class="content-profile-page">
   <div class="profile-user-page card">
      <div class="img-user-profile">
        <img class="profile-bgHome" src="https://37.media.tumblr.com/88cbce9265c55a70a753beb0d6ecc2cd/tumblr_n8gxzn78qH1st5lhmo1_1280.jpg" />

        <img class="avatar" src={photoo} alt="jofpin"/>
           </div>

          <div class="user-profile-data">
           
            <p>{namee }</p>
            <button onClick={() => (setIsOpen(true))}>Edit profile</button>
            <Logoutbtn/>
          </div>

          <div className='nosequeescribir-container'>

            {reactionProfile.length > 0 ? (

              reactionProfile.map(e=>{

                return (
                  <MyReactions name={e.itineraryId.name} iconName={e.name} icon={e.icon} id={e._id} deleteReaction={deleteReactionFx} photo={e.itineraryId.photo} />
                  
                  )
                })


              
            ) : <h2>You haven't reactioned to anything</h2> 
            
            }


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
                name="lastname"
                placeholder="Last Name"
                onChange={(e) => setlastName(e.target.value)}
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
              <button  onClick={listenEdit}  type="submit">Edit</button>
            </div>
          </div>
          </ModalHotel>


</div>

 </>

  )
}
export default MyProfile