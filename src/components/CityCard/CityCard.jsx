import React ,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import citiesArr from '../citiesArray'
import './cityCard.css'

function CityCard() {

  const [cityFilter, setCityFilter] = useState("all") 
  const [cities, setCities] = useState(citiesArr) 




  useEffect(()=> {
    if (cityFilter === "all"){
      setCities(citiesArr)
    } else {
      const filteredContinent = citiesArr.filter(
        (continent) => continent.continent === cityFilter
      )
      setCities(filteredContinent)
    }

  }, [cityFilter])

  const checkboxFiltersValue = {
    all : "all",
    America: "America",
    Europe: "Europe",
    Asia: "Asia",
    Australia: "Australia"
  }

  const [search, setSearch] = useState('')
  console.log(search)
  

  console.log(cities)



  return (
    <div className='checkbox-container'>
      <main className='maino'> 
        <form action="" className="search-bar">
          <input onChange={(e)=> setSearch(e.target.value)} className="inputi" type="text" name="search"  required/>
          <button className="search-btn" type="submit"></button>
      </form>
    </main>
      <label>
        <input
          className='checkbox'
          type="checkbox"
          value={checkboxFiltersValue.all}
          checked={cityFilter === checkboxFiltersValue.all}
          onClick={({target})=> setCityFilter(target.value)}
        />
        All
      </label>
      <label>
        <input
          className='checkbox'
          type="checkbox"
          value={checkboxFiltersValue.America}
          checked={cityFilter === checkboxFiltersValue.America}
          onClick={({target})=> setCityFilter(target.value)}
        />
        America
      </label>
      <label>
        <input
          className='checkbox'
          type="checkbox"
          value={checkboxFiltersValue.Europe}
          checked={cityFilter === checkboxFiltersValue.Europe}
          onClick={({target})=> setCityFilter(target.value)}
        />
        Europe
      </label>
      <label>
        <input
          className='checkbox'
          type="checkbox"
          value={checkboxFiltersValue.Asia}
          checked={cityFilter === checkboxFiltersValue.Asia}
          onClick={({target})=> setCityFilter(target.value)}
        />
        Asia
      </label>
      <label>
        <input
          className='checkbox'
          type="checkbox"
          value={checkboxFiltersValue.Australia}
          checked={cityFilter === checkboxFiltersValue.Australia}
          onClick={({target})=> setCityFilter(target.value)}
        />
        Australia
      </label>
      <div className='containerCardsHotel'>
      {cities && cities.map((x)=> 
            <div key={x.id} className="cardsIndividual">
              <img className='imgCardHotel' src={x.image} alt="" />
              <Link to={`/cities/detailsCity/${x.id}`} > <h3 className="titleHotel">{x.title}</h3> </Link>
              <p className='descriptionHotel'>{x.continent}</p>
            </div>
     
      )}
      </div>   
    </div>

/*         <div className='containerCardsHotel'>
          {cities.map(x=>{
            return (
              <div className="cardsIndividual">
                <img className='imgCardHotel' src={x.image} alt="" />
                <h3 className="titleHotel">{x.title}</h3>
              </div>

            )
          })}

      </div> */
  )
}

export default CityCard