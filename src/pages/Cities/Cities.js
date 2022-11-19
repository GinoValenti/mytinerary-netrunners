import CityCard from '../../components/CityCard/CityCard'
import CitySection from '../../components/CitySection/CitySection'
import '../../components/CityCard/cityCard.css'
import '../../components/CityCard/searchBarcities.css'
import './cities.css'
import {useEffect, useState, React} from 'react'
import axios from 'axios'
import { BASE_URL } from '../../api/url'
import toDoActions from '../../redux/actions/toDoActions'
import { useDispatch, useSelector } from 'react-redux'


export default function Cities() {

    let {getCitiesFilter,getCities}=toDoActions
    const dispatch= useDispatch()
    
   const {cities} = useSelector((state) => state.cities);
   
   

    /* let [cities,setcities]=useState([]) */
    let [checked,setChecked]=useState([])
    let [searched,setSearched]=useState('')
    let check=[]
    
    useEffect(()=>{
        dispatch(getCitiesFilter({cities:'cities',search:searched,check:checked}))
    },[checked,searched])
    
    useEffect(()=>{
        dispatch(getCities('cities'))
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
            console.log()
        }
       
    }

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


    {(cities.length===0) ? <div className='carita'>🗿?</div> : cities.map(city=><CityCard key={city?._id} id={city?._id} name={city?.title} photo={city?.image} />) }
    </div>
    </>

  )
}
