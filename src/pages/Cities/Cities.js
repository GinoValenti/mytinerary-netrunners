import CityCard from '../../components/CityCard/CityCard'
import CitySection from '../../components/CitySection/CitySection'
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
        if(value.target.checked){
            if(value.target.type==="checkbox"){
                setChecked(checked.concat("&continent="+value.target.value))
            }
        }else{
            setChecked(checked.filter(element=>element!=="&continent="+value.target.value))
        }

        if(value.target.type==="text"){
            setSearched(value.target.value)
        }
    }
    
    useEffect(()=>{
        axios.get(`${BASE_URL}/cities?name=${searched}${checked.join('')}`)
        .then(response=>setFilter(response.data.allcities))
    },[checked,searched])
    console.log(checked)
    console.log(filter)


    return (
    <>
    <CitySection></CitySection>
    <main className='maino'> 
        <form action="" className="search-bar">
          <input onChange={listen} className="inputi" type="text" placeholder='Search'  required/>
      </form>
    </main>
    {
        Array.from(new Set(cities.map(city=> city.continent))).map(element => {
            return (
                <label key={element}>
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
    <div className='containerCardsHotel'>


    {filter.map(city=><CityCard key={city?._id} name={city?.title} photo={city?.image} />)}
    </div>
    </>

  )
}
