import React from 'react'
import CallToAction from '../CallToAction/CallToAction'
import './main.css'
import videoBg from "../Main/video.mp4"

function Main() {
  return (
    <>
    <div className='main'>
        <h1>MyTinerary</h1>
        <video src={videoBg} autoPlay loop muted/>
        <CallToAction></CallToAction>
    </div>
    
    <div className='main-2'></div>
    </>

  )
}

export default Main