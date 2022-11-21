import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import toDoActions from '../../redux/actions/toDoActions'

function MyCitiesCard(props) {


  let { name, img, id, event1} = props


  let listen=(e)=> {
    event1(id,e)
  }


  return (
    <div className="card-mycities">
      <div className="cardsIndividual cardsIndividual-mod">
        <h3 id={id} className='titleHotel titleHotel-mod'>{name} </h3>
        <img className='imgCardHotel' src={img} alt={name}/>
        <button onClick={listen} className='button-delete'>DELETE</button>
        <button className='button-edit'>EDIT</button>
      </div>
    </div>
  )
}

export default MyCitiesCard