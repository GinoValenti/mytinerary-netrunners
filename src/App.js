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
import Text from './components/text/Text';
import Carousel from './components/carousel/Carousel';
import AutoToTop from './components/AutoToTop/AutoToTop';
import "./components/AutoToTop/AutoToTop.css"

import NotFoundPage from './pages/NotFound/NotFoundPage';

import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Hotels from './pages/Hotels/Hotels';
import Home from './pages/Home/Home';
import Cities from './pages/Cities/Cities';
import Main from './components/Main/Main';
import Userbtn from './components/UserBtn/Userbtn';


function App() {


  return (
    <>
      <NavBar></NavBar>

      <Routes>
        
        <Route path='/' element={<><Main></Main><Text></Text><Carousel></Carousel><Banner></Banner><Cards></Cards> </> } ></Route>
        <Route path='/hotels'></Route>
        <Route path='/cities'></Route>
        <Route path='/signIn'></Route>
        <Route path='/signUp'></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>

      <Footer></Footer>
    </>

    
  )
}

export default App;
