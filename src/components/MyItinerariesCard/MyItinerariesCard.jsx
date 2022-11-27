import React from 'react'

function MyItineariesCard(props) {


  let { name, img, id, event1 , event2, go, cityIdGO, cityId  } = props


  let listen=(e)=> {
    event1(id,e)
  }

  let listenEdit=(e)=>{
    event2(id,e)
    go(id)
    cityIdGO(cityId)
  }




  return (
    <div className="card-mycities">
      <div className="cardsIndividual cardsIndividual-mod">
        <h3 id={id} className='titleHotel titleHotel-mod'>{name} </h3>
        <img className='imgCardHotel' src={img} alt={name}/>
        <button onClick={listen} className='button-delete'>DELETE</button>
        <button value={id} onClick={listenEdit} className='button-edit'>EDIT</button>
      </div>
    </div>
  )
}

export default MyItineariesCard