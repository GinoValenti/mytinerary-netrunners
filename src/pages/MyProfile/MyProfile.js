import React from 'react'
import MyProfile from '../../components/MyProfile/MyProfile'

function MyProfilePage(props) {



  let {id} = props
  return (
    <MyProfile id={id}/>
  )
}

export default MyProfilePage