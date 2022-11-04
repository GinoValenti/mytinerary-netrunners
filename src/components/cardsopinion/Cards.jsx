import React from 'react'
import './cards.css'

export default function Cards() {
  return (
    <ul class="cards">
  <li>
    <div  class="card">
      <img src="./img/hotelsimg/tokyo3.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://us.123rf.com/450wm/wachara/wachara1610/wachara161000250/67879524-bandera-de-jap%C3%B3n-jap%C3%B3n-bandera-nacional-de-la-ilustraci%C3%B3n-s%C3%ADmbolo-.jpg" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Tokyo, Japan</h3>            
            <span class="card__status">Hotel</span>
          </div>
        </div>
        <p class="card__description">If you want to relax and spend a beautiful vacation in a country as beautiful as Japan, this is your place.</p>
      </div>
    </div>      
  </li>
  <li>
    <div class="card">
      <img src="./img/hotelsimg/orlando1.jpg" class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Orlando, U.S.A</h3>
            <span class="card__status">Resort</span>
          </div>
        </div>
        <p class="card__description">
The Walt Disney World Resort, also known as Disney World, is a tourist complex famous for its theme parks and numerous hotels.</p>
      </div>
    </div>
  </li>
  <li>
    <div class="card">
      <img src="./img/hotelsimg/rosario1.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Rosario, Argentina</h3>
                   
            <span class="card__status">Casino</span>
          </div>
        </div>
        <p class="card__description">One of the best casinos in all of Latin America <br></br> come and visit it!</p>
      </div>
    </div>
  </li>   
</ul>
  )
}
