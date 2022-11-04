import React from 'react'
import Main from '../../components/Main/Main'
import NavBar from '../../components/NavBar/NavBar'
import Text from '../../components/text/Text'
import Carousel from '../../components/carousel/Carousel'
import Testimonial from '../../components/testimonial/Testimonial'
import Banner from '../../components/banner/Banner'
import Cards from '../../components/cardsopinion/Cards'
import Footer from '../../components/footer/Footer'
import { Route, Routes } from 'react-router-dom';
function Home() {
  return (
    <>
  <Main></Main>
  <Text></Text>
  <Carousel></Carousel>
  <Testimonial></Testimonial>
  <Banner></Banner>
  <Cards></Cards>
   
    </>
  )
}

export default Home