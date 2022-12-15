import React, { useState, useEffect } from 'react'
import './show.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ModalHotel from "../../components/ModalHotel/ModalHotel";
import NewComment from "../NewComment/NewComment"
import commentAction from "../../redux/actions/commentAction";
function Show(props) {

  let { getAllComments ,deleteAction, editComment} = commentAction;
  const dispatch = useDispatch(); 
  let{name,idShow,image}=props
  console.log(idShow);
  const [idEdit, setIdEdit] = useState()
  const [comment, setComment] = useState('');
  const [mostrarOcultar, setMostrarOcultar] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  let { logged ,id,token } = useSelector(store => store.usuario)
  console.log(logged);
  let hide = () => {
    setMostrarOcultar(!mostrarOcultar)
  }

  async function getHotels(){

   let commentsID= await dispatch(getAllComments(idShow))
   setCommentsLocals(commentsID.payload)
   
  }
  
  let  [commentsLocals, setCommentsLocals] = useState()
  let  [reload, setReload] = useState(false)
  
  useEffect(()=>{
    
    getHotels()
  },[reload])
  console.log(commentsLocals);
  
  
  
  
  const handleDelete = async (idDelete) => {
    
    
    try {
      Swal.fire({
        title: "Comment deleted"
      
      })
      
     await dispatch(deleteAction({idDelete,token}))
     
  
      setReload(!reload)
      
    } catch (error) {
      console.log(error);
    }
 
        
        
          
      
   
    };
    let listenEdit = async (event) => {
      event.preventDefault()
  
      let data = {comment}
  console.log(data);
  
  if ( comment === ''  ) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You must complete all fields !',
    })
  } else {
      try {
        let res = await dispatch(editComment({idEdit, data,token}))
  
        if (res.payload.success){
          Swal.fire({
            title: ` Comment has been updated`,
            
         
          })
          setIsOpen(false)
         await dispatch(getAllComments(idShow))
         setReload(!reload)
        } 
        
        else {
          
        
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: res.payload.response,
            })
        }
  
      } catch(error) {
        console.log(error.message)
      }
    }}
   

     return (
       <>
    <div className='itinerary-container'>
    


      
       <h3>{name}</h3>
      <img className='messi-chiquito' src={image} alt="" />
      {
        mostrarOcultar ?
        (
          <>
        <p className='btn-show' onClick={hide}><img className='btn-img' src="https://cdn-icons-png.flaticon.com/512/130/130906.png" alt="" /></p>

          
        <NewComment reload={reload} setReload={setReload} idShow={idShow}></NewComment>      
         { 

         commentsLocals.comments.length == 0 ? <h2>Be the first comment!</h2>: 

         commentsLocals.comments.map((x)=>{

return(
  <div class="comments-app" ng-app="commentsApp" ng-controller="CommentsController as cmntCtrl">              
<div class="comments">

<div class="comment" ng-repeat="comment in cmntCtrl.comments | orderBy: '-date'">

  <div class="comment-avatar">
    <img />
  </div>




<div class="comment">
 {id === x?.userId ?  <div class="comment-avatare">
    <img src={x?.photo}/>
  </div> :   <div class="comment-avatar">
    <img src={x?.photo}/>
  </div>}
  

  <div class="comment-box">
    <div class="comment-text">{x?.comment}</div>
    <div class="comment-footer">
      <div class="comment-info">
       
        <span class="comment-date">{x?.date}</span>
        {id === x.userId ?<div class="comments-buttons">
  <button className='buttonsishos' onClick={() => handleDelete( x._id)}  ><img className='butoncio-deleted' src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" alt="" /></button>
  <button className='buttonsishos' onClick={() => (setIdEdit(x._id),(setIsOpen(true)))} ><img className='butoncio-deleted'  src="https://cdn-icons-png.flaticon.com/512/1250/1250615.png" alt="" /></button>
  </div>:<h2 className='display-none'>.</h2>}
      </div>

      
    </div>
  </div>
</div>

</div>
</div>
<ModalHotel  open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="edit-form-container">
            <input
              htmlFor="Comment"
              className="new-input"
              type="text"
              name="Comment"
              placeholder="Comment"
              onChange={(e) => setComment(e.target.value)}
            />
         
        
            <div className="edit-button">
              <button onClick={listenEdit}  type="submit">Edit</button>
            </div>
          </div>
        </ModalHotel>
</div>

)
}) 
     }
   
        
          </>
        ) :
        <p className='btn-show' onClick={hide}><img className='btn-img' src="https://cdn-icons-png.flaticon.com/512/3031/3031126.png"  /></p>
      } 





    </div>
      
    
    </>
    
  )
  
}

export default Show