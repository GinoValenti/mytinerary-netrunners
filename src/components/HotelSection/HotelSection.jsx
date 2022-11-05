import React from 'react'
import "./hotelsection.css"
export default function HotelSection() {
  return (
    <>
         <header>

<div className="BannerHotels">
  <h1 className='titular'>The best <span className="upspan">hotels. </span></h1>
  

  <div className="d-flex gap-3 justify-content-center flex-wrap checks" id="checkbox-container">

  </div>
</div>



</header>
    <h3 className='why'>Why us</h3>
<div className='benefits'>
<div>
    <img className='benefiImg' src="https://www.versantehotel.com/wp-content/uploads/2021/02/Wifi-Connection-Iconv2-03-copy-150x150.png" alt="" />
    <p>Free WI-FI
</p>
</div>
<div>
    <img className='benefiImg' src="https://www.versantehotel.com/wp-content/uploads/2021/01/Icon-Colour-Pet-Friendly-Versante-Hotel-Vancouver-Airport-150x148.png" alt="" />
    <p>Pet friendly</p>
</div>
<div>
    <img className='benefiImg' src="https://www.versantehotel.com/wp-content/uploads/2020/12/Icon-Colour-Airplane-Versante-Hotel-Vancouver-Airport-150x147.png" alt="" />
    <p>First Class</p>
</div>
<div>
    <img className='benefiImgDeleted' src="https://www.versantehotel.com/wp-content/uploads/2020/12/Icon-Colour-Room-Service-Versante-Hotel-Vancouver-Airport-150x145.png" alt="" />
    <p className='benefitsDeletedp'>World class dinnig</p>
</div>
</div>

 </>
  )
}
