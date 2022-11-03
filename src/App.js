import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Hotels from './pages/Hotels/Hotels';
import Home from './pages/Home/Home';
import Cities from './pages/Cities/Cities';
import Main from './components/Main/Main';


function App() {

  return (

    <>
      <NavBar></NavBar>
      <Main></Main>
      <Routes>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/hotels' element={<Hotels></Hotels>}></Route>
        <Route path='/cities' element={<Cities></Cities>}></Route>
      </Routes>
    </>
  );
}

export default App;
