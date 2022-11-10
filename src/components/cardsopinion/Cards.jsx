import React from 'react'
import "./cards.css"
export default function Cards() {
  return (
    <ul className="cards">
  <li>
    <div  className="card">
      <img src="https://pix10.agoda.net/hotelImages/97518/-1/a162cc963abb35f95dbfb038e7d8fa56.jpg?ca=8&ce=1&s=1024x768" class="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://us.123rf.com/450wm/wachara/wachara1610/wachara161000250/67879524-bandera-de-jap%C3%B3n-jap%C3%B3n-bandera-nacional-de-la-ilustraci%C3%B3n-s%C3%ADmbolo-.jpg" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">Tokyo, Japan</h3>            
            <span className="card__status">Hotel</span>
          </div>
        </div>
        <p className="card__description">If you want to relax and spend a beautiful vacation in a country as beautiful as Japan, this is your place.</p>
      </div>
    </div>      
  </li>
  <li>
    <div className="card">
      <img src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/10/59/1059330_v4.jpeg" class="card__image" alt="" />
      <div className="card__overlay">        
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img className="card__thumb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">Orlando, U.S.A</h3>
            <span className="card__status">Resort</span>
          </div>
        </div>
        <p className="card__description">
The Walt Disney World Resort, also known as Disney World, is a tourist complex famous for its theme parks and numerous hotels.</p>
      </div>
    </div>
  </li>
  <li>
    <div className="card">
      <img src="https://citycenter-rosario.com.ar/assets/images/home/portada/FachadaDIA_PG_4.jpg" class="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">Rosario, Argentina</h3>
                   
            <span className="card__status">Casino</span>
          </div>
        </div>
        <p className="card__description">One of the best casinos in all of Latin America <br></br> come and visit it!</p>
      </div>
    </div>
  </li>   
</ul>
  )
}
