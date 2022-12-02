import React from 'react'
import MyShow from '../../components/MyShows/MyShow'

function MyShowPage(props) {
  let {id} = props
  return (
    <MyShow id={id}/>
  )
}

export default MyShowPage