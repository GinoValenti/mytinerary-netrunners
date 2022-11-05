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
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import DetailsCity from './pages/DetailsCity/DetailsCity';



function App() {


  return (
    <>
    <ScrollToTop></ScrollToTop>
    <NavBar></NavBar>

        <NavBar> </NavBar>
      <Routes>
        
        <Route path='/' element={<Home/> } ></Route>
        <Route path='/hotels' element={<Hotels/>} ></Route>
        <Route path='/cities' element={<Cities/>}></Route>
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
