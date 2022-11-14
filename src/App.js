import './App.css';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Hotels from './pages/Hotels/Hotels';
import Home from './pages/Home/Home';
import Cities from './pages/Cities/Cities';
import SignUpPage from './pages/SignUp/SignUpPage';
import SignInPage from './pages/SignIn/SignInPage';
import Footer from './components/footer/Footer';
import SingleHotels from './pages/DetailHotel/Hotel';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NewHotelPage from "./pages/NewHotelPage/NewHotelPage"
import DetailsCity from './pages/DetailsCity/DetailsCity';
import NewCityPage from './pages/NewCityPage/NewCityPage';



function App() {


  return (
    <>
    <ScrollToTop></ScrollToTop>
{/*     <NavBar></NavBar> */}

        <NavBar> </NavBar>
      <Routes>
        
        <Route path='/' element={<Home/> } ></Route>
        <Route path='/hotels' element={<Hotels/>} >
        </Route>
       <Route path='/hotels/details/:id' element={<SingleHotels></SingleHotels>} ></Route>
<Route path='/newhotel' element={<NewHotelPage></NewHotelPage>}> </Route>
        <Route path='/cities' element={<Cities/>}></Route>
        <Route path='/newcity' element={<NewCityPage/>} ></Route>
        <Route path='/cities/detailsCity/:cityId' element={<DetailsCity/>}></Route>
        <Route path='/signin' element={<SignInPage/>}></Route>
        <Route path='/signup' element={<SignUpPage/>} ></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
        <Footer></Footer>


    </>


  )
}

export default App;
