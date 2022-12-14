import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import alertActions from '../../redux/actions/alertaHotel'
import SignInPage from '../../pages/SignIn/SignInPage';
import commentAction from "../../redux/actions/commentAction";
function NewComment (props) {
    const [comment, setComment] = useState('');
  let {reload, setReload} = props
    let form = useRef()
    let { token} = useSelector(store => store.usuario)
    let { id,logged,photoo} = useSelector(store => store.usuario)
    let photo=photoo
    let userId = id
    
    let {postComments,getAllComments}= commentAction
    let {idShow} = props
    let showId = idShow

    let dispatch = useDispatch()
    const dateNow = new Date()
    let date = dateNow.toLocaleDateString(	"en-us")

    async function Submit(event){
        event.preventDefault()
        console.log(event.target.value);
        let data = {comment,showId,date,userId,photo}
        


        try {
          
          
          let res =  await dispatch(postComments({data,token}))
          
         if (res.payload.success){
          

          Swal.fire({
            title: "Comment sent"
          
          })
        
         }else{
          Swal.fire({
            title: res.payload.response,
            text: res.payload.response,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
         }
       
           setReload(!reload)
    } catch (error) {
        console.log(error);
    }  

    }

  return (

    <>
{ logged === false ? <Link className='signInashe' to="/signin">Sing In to send a comment</Link>:
 <div onSubmit={Submit} ref={form} class="comments-app" ng-app="commentsApp" ng-controller="CommentsController as cmntCtrl">
 
  

 <div class="comment-form">
 

 
   <form class="form" name="form" ng-submit="form.$valid && cmntCtrl.addComment()"  novalidate>
     <div class="form-row">
     <div class="group">
  
  <input   onChange={(e) => setComment(e.target.value)} placeholder="Search" type="search" class="input"/>
</div>
  
     </div>
 

 
 
 
     <div class="form-row">
       <input type="submit" value="Add Comment" onClick={Submit}/>
     
     </div>
   </form>
 </div>
 
 
 </div>}
         </>
    
  )
}
export default NewComment