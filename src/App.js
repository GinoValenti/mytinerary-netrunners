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
import MyCities from './components/MyCities/MyCities';
import MyProfilePage from './pages/MyProfile/MyProfile';
import MyItineraries from './components/MyItineraries/MyItineraries';
import MyHotelPage from './pages/MyHotel/MyHotel';
import MyShowPage from './pages/MyShow/MyShow';
import NewItineraryPage from './pages/NewItineraryPage/NewItineraryPage';
import ProtectedRoute from "./components/ProtectedRoute"
import { useDispatch, useSelector } from "react-redux";
import userActions from './redux/actions/userAction';
import { useEffect } from 'react';
function App() {
let {enterAgain}= userActions
let dispatch = useDispatch()


let { logged,role,id} = useSelector(store => store.usuario)
console.log(id);

async function enterAgainToken(){
  let token = JSON.parse(localStorage.getItem("token"))
  if (token){
   await dispatch(enterAgain(token.token.user))
    
  }
}
  useEffect(  ()=>{
 enterAgainToken()
  },[])


  return (
    <>
    <ScrollToTop></ScrollToTop>

{        <NavBar> </NavBar>}
<Routes>

        <Route path='/' element={<Home/> } ></Route>
        <Route path='/hotels' element={<Hotels/>} ></Route>
        <Route path='/hotels/details/:id' element={<SingleHotels></SingleHotels>} ></Route>
        <Route path='/cities' element={<Cities/>}></Route>
        <Route path='/details/:id' element={<DetailsCity/>}></Route>
        <Route path='/signin' element={logged?<Home></Home>:<SignInPage/> }></Route>
        <Route path='/signup' element={logged?<Home></Home>:<SignUpPage/> }></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>

        <Route element={<ProtectedRoute isAllowed={logged ? true : false} reDirect={"/"} />}>
          <Route path='/myitineraries' element={<MyItineraries id={id} />}></Route>
          <Route path='/newitinerary' element={<NewItineraryPage />} ></Route>
          <Route path='/myshow' element={<MyShowPage/>} ></Route>
          <Route path='/myprofile' element={<MyProfilePage id={id}/>} ></Route>
        </Route>


        <Route path='/myhotel' element={
          <ProtectedRoute isAllowed={!!logged && role === "admin"} reDirect={"/"}> <MyHotelPage/> </ProtectedRoute>
       }
        ></Route>
        <Route path='/mycities' element={
          <ProtectedRoute isAllowed={!!logged && role === "admin"} reDirect={"/"}> <MyCities id={id} /> </ProtectedRoute>}
        ></Route>
        <Route path='/newcity' element={
          <ProtectedRoute isAllowed={!!logged && role === "admin"} reDirect={"/"}> <NewCityPage/> </ProtectedRoute>} 
        ></Route>
        <Route path='/newhotel' element={
          <ProtectedRoute isAllowed={!!logged && role === "admin"} reDirect={"/"}> <NewHotelPage/> </ProtectedRoute>}
        ></Route>

      </Routes>
        <Footer></Footer>


    </>


  )
}

export default App;
