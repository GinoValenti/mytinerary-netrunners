import React from 'react'
import { useEffect, useState } from 'react'
export default function AutoToTop() {

    const [backToTopButton,setBackToTopButton ]= useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY> 100){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    }, [])
    const scrollUp = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return <div className='App'>
    {backToTopButton && (
        <button className='buttonScroll' onClick={scrollUp}>^</button>
    )} 

  </div>
}
