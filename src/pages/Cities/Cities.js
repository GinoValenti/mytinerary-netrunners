import CityCard from '../../components/CityCard/CityCard'
import CitySection from '../../components/CitySection/CitySection'
import '../../components/CityCard/cityCard.css'
import '../../components/CityCard/searchBarcities.css'
import './cities.css'
import {useEffect, useState, React} from 'react'
import axios from 'axios'
import { BASE_URL } from '../../api/url'


export default function Cities() {
  
    let [cities, setCities]=useState([])
    let [checked, setChecked]= useState([])
    let [searched, setSearched]= useState([])
    let [filter, setFilter] = useState([])
 
    useEffect(()=>{
        axios.get(`${BASE_URL}/cities`)
        .then(response=>setCities(response.data.allcities))
    },[])

    function listen(value){

        
        if(value.target.type==="text"){
            setSearched(value.target.value)
            console.log(searched)
        }
        

        if(value.target.checked){
            if(value.target.type==="checkbox"){
                setChecked(checked.concat("&continent="+value.target.value))
            }
        }else{
            setChecked(checked.filter(element=>element!=="&continent="+value.target.value))
        }

    }
    console.log(checked)

    useEffect(()=>{
        axios.get(`${BASE_URL}/cities?title=${searched}${checked.join('')}`)
        .then(response=>setFilter(response.data.allcities))
    },[searched,checked])
    console.log(checked)
    console.log(filter)


    return (
    <>
    <CitySection></CitySection>
    <main className='maino'> 
        <form action="" className="search-bar">
          <input onChange={listen} className="inputi" type="text"/>
          <button className="search-btn" >

</button>
      </form>	
    </main>
    <div className='checkbox-container'>
    {
        Array.from(new Set(cities.map(city=> city.continent))).map(element => {
            return (


                <label className='kid-of-checkbox'  key={element}>
                <input
                id={element}
                value={element}
                onClick={listen}
                className='checkbox'
                type="checkbox"
                />
                {element}
            </label>
            )
        })

    }
    </div>
    <div className='containerCardsHotel'>


    {(filter.length===0) ? <div className='carita'>🗿?</div> : filter.map(city=><CityCard key={city?._id} id={city?._id} name={city?.title} photo={city?.image} />) }
    </div>
    </>

  )
}
