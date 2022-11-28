import React from 'react'
import MyHotel from '../../components/MyHotel/MyHotel'

function MyHotelPage(props) {
  let {id}= props
  return (
    <MyHotel id={id}/>
  )
}

export default MyHotelPage