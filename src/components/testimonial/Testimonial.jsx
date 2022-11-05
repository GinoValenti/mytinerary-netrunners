import React from 'react'
import "./testimonial.css"
export default function Testimonial() {
  return (
    <>
<div className='bodyty'>
    <section className="testimonial">
        <div className='container' >
            <div className="row">
                <div className="col-lg-6 d-none d-lg-block">
                    <ol className="carousel-indicators tabs">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">
                            <figure>
                                <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png" className="img-fluid" alt=""></img>
                            </figure>
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1">
                            <figure className='borrada'>
                                <img  src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png" className="img-fluid" alt=""></img>
                            </figure>
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2">
                            <figure>
                                <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png" className="img-fluid" alt=""></img>
                            </figure>
                        </li>
                    </ol>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <div id="carouselExampleIndicators" data-interval="false" className="carousel slide" data-ride="carousel">
                  
                   
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="quote-wrapper">
                                    <h3>Oriana Urraco</h3>
                                    <p className='pedro'>
I had never experienced anything like it with any travel company, its speed and incredible prices make it unmatched.</p>
                                </div>
                            </div>
                            
                        </div>
                        <ol className="carousel-indicators indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
 </>
  )
}
