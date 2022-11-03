import './App.css';
import "./components/carousel/Carousel"
import "./components/carousel/carousel.css"
import "./components/cardsopinion/Cards"
import "./components/cardsopinion/cards.css"
import Footer from "./components/footer/Footer"
import "./components/footer/footer.css"
import Cards from './components/cardsopinion/Cards';
import Banner from './components/banner/Banner';
import "./components/banner/banner.css";
import Carousel from './components/carousel/Carousel';
import AutoToTop from './components/AutoToTop/AutoToTop';
import "./components/AutoToTop/AutoToTop.css"


import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Hotels from './pages/Hotels/Hotels';
import Home from './pages/Home/Home';
import Cities from './pages/Cities/Cities';
import Main from './components/Main/Main';


function App() {


  return (

<main className='main'> 
<Banner></Banner>
<Carousel></Carousel>
  <p className='opinion'>Some of the options most chosen by the public</p>
  <Cards></Cards>
  <AutoToTop></AutoToTop>
  <Footer></Footer>
</main>
  )
}

export default App;
