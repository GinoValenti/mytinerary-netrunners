import './App.css';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SingIn from './components/SingIn/SingIn';
import Home from "./pages/Home/Home"
import Footer from './components/footer/Footer';



function App() {


  return (
    <>
   

        <NavBar> </NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/hotels'></Route>
        <Route path='/cities'></Route>
        <Route path='/signIn' element={<SingIn></SingIn>}></Route>
        <Route path='/signUp'></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
        <Footer></Footer>


    </>

    
  )
}

export default App;
