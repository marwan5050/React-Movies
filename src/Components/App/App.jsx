import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Tv from '../Tv/Tv';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { MoviesContextProvider } from '../../MoviesContext';




export default function App() {

  const [loginData, setloginData] = useState(null);

  const redirectLogout = useNavigate();
  
  function tokenInfo(){

    let encodedToken = localStorage.getItem("userInfo");

    let decodedToken = jwtDecode(encodedToken);

    setloginData(decodedToken);

  }

useEffect(() => {
  if(localStorage.getItem('userInfo')){
    tokenInfo();
  }
}, []);

  function out(){

    localStorage.clear('userInfo');

    setloginData(null);

    redirectLogout('/login');
  }



  return (
   <>
   <Navbar loginUser={loginData} logout={out} />

    <MoviesContextProvider>
      
    


   <div className='container'>
    <Routes>

      <Route  element={<ProtectedRoute/>}>
        
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<Home/>}/>
        <Route path='/tv' element={<Tv/>}/>
        <Route path='/movies' element={<Movies/>}/>
        

      </Route>
     
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login info={tokenInfo} />}/>
      
      
       <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
   </MoviesContextProvider>
   </>
  )
}
