import React from 'react'
import "./myprofile.css"
import { useSelector , useDispatch} from 'react-redux'

import { useState,useEffect } from 'react'
import userActions from '../../redux/actions/userAction'

function MyProfile(props) {
  


let{getOneUser}= userActions

let {id}= props
console.log(id);
let dispatch = useDispatch()


let { profile} = useSelector(store => store.usuario)
console.log(profile);

async function getUsers(){
  
  await dispatch(getOneUser(id))
}


useEffect( ()=>{

  getUsers()
},[])



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
          </div> 
        
      
      </div>
    </div>
</div>


 </>

  )
}
export default MyProfile