import React, { useState, useEffect } from 'react'
import './show.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NewComment from "../NewComment/NewComment"
import commentAction from "../../redux/actions/commentAction";
function Show(props) {

  let { getAllComments } = commentAction;
  const dispatch = useDispatch(); 
  let{name,idShow,image}=props
  console.log(idShow);

  const [mostrarOcultar, setMostrarOcultar] = useState(false)
  let { comments} = useSelector(store => store.comments)

  let { logged ,id } = useSelector(store => store.usuario)
  console.log(logged);
  let hide = () => {
    setMostrarOcultar(!mostrarOcultar)
  }

  async function getHotels(){

    await dispatch(getAllComments(idShow))

    
  }
     useEffect(()=>{
      getHotels()
     },[])
    console.log(comments);
     return (
       <>
    <div className='itinerary-container'>
    


      
       <h3>{name}</h3>
      <img className='messi-chiquito' src={image} alt="" />
      {
        mostrarOcultar ?
        (
          <>
        <p className='btn-show' onClick={hide}>Hide comments</p>

          
        <NewComment idShow={idShow}></NewComment>      
         {logged === false ? <Link className='signInashe' to="/signin">Sing In to see the comments</Link>:

      

     comments.map((x)=>{

return(
  <div class="comments-app" ng-app="commentsApp" ng-controller="CommentsController as cmntCtrl">              
<div class="comments">

<div class="comment" ng-repeat="comment in cmntCtrl.comments | orderBy: '-date'">

  <div class="comment-avatar">
    <img />
  </div>




<div class="comment">
 {id === x.userId ?  <div class="comment-avatare">
    <img src={x.photo}/>
  </div> :   <div class="comment-avatar">
    <img src={x.photo}/>
  </div>}
  

  <div class="comment-box">
    <div class="comment-text">{x.comment}</div>
    <div class="comment-footer">
      <div class="comment-info">
       
        <span class="comment-date">{x.date}</span>
        {id === x.userId ?<div class="comments-buttons">
  <button className='buttonsishos'  >Delete</button>
  <button className='buttonsishos'>Edit</button>
  </div>:<h2 className='display-none'>.</h2>}
      </div>

      
    </div>
  </div>
</div>

</div>
</div>
</div>
)
}) 
     }
   
        
          </>
        ) :
        <p className='btn-show' onClick={hide}>Show comments</p>
      } 





    </div>

    </>
  )
}

export default Show