import React,{useState} from 'react'
import "./hotelcards.css"
import SelectHotels from '../selectHotel/SelectHotels'
import HotelsData from '../HotelsData'
import "./searchbar.css"



export default function HotelCards() {
let [filterTextvalue,updateFilterText]=useState("all")
let filteredHotelList = HotelsData.filter((x)=>{

  if(filterTextvalue==="higher"){
    return x.capacity>=5000
  }else if(filterTextvalue === "lower"){
    return x.capacity <=5000
  }else{
    return HotelsData
  }
}
)
  function onFilterValueSelected(filterValue){
    updateFilterText(filterValue);
  }
  
  const[HotelsArray,setHotelArray ]= useState([filteredHotelList])
  const [users,setUsers ]= useState([])
  const [search,setSearch ]= useState("")
  
  //funcion busqueda
  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value);
  
    }

    //metodo de filtrado
    let results = []
    if(!search){
        results = filteredHotelList
        console.log(results);

    }else{
        results = filteredHotelList.filter((dato)=>
        dato.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
    }if (results.length === 0) {
      //Si no encuentra la ciudad que ingresamos en el input
      return (
        <>
         <main className='maino'> 
    <form action="" className="search-bar">
	<input className="inputi"  value={search} onChange={searcher} type="search" name="search" pattern=".*\S.*" required/>
	<button className="search-btn" type="submit">

	</button>
</form>
</main>
<SelectHotels></SelectHotels>
          <h3 className="noCities">
            Oops! We didn't found this place. Try other!
          </h3>
        </>
      );
    }
    
  return (
    <> 
    <main className='maino'> 
    <form action="" className="search-bar">
	<input className="inputi"  value={search} onChange={searcher} type="search" name="search" pattern=".*\S.*" required/>
	<button className="search-btn" type="submit">

	</button>
</form>
</main>
    <SelectHotels filterValueSelected={onFilterValueSelected}></SelectHotels>
    <div className='containerCardsHotel'> 
    {results.map((x)=>{
        return(
       
<div className="cardsIndividual">
<img className='imgCardHotel' src={x.photo[0]} alt="" />
  <h3 className="titleHotel">{x.name}</h3>
  <p className="descriptionHotel">This hotel has a capacity of <span className='Capacity'>{x.capacity}</span></p>
</div>


        )
    })}
  </div>
  </>
  )
}
