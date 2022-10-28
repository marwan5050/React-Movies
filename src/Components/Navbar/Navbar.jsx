import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../images/logo-dark.webp'

export default function Navbar(props) {
  return (
    <>
    <nav className='d-flex justify-content-between p-3 align-items-center'>

      <ul className='list-unstyled d-flex '>
      <li className='px-2'><NavLink to='/home'>
        <img src={Logo} alt='logo'/>
        </NavLink></li>

        {props.loginUser !== null ? <>
          <li className='px-2'><NavLink to='/home'>Home</NavLink></li>
        <li className='px-2'><NavLink to='/tv'>Tv</NavLink></li>
        
        <li className='px-2'><NavLink to='/movies'>Movies</NavLink></li>
        </> : ""}

        

      </ul>

      <ul className='list-unstyled d-flex '>

        <li className='px-2'><a href='http://facebook.com'><i className='fab fa-facebook'></i></a></li>
        <li className='px-2'><a href='http://inestagram.com'><i className='fab fa-instagram'></i></a></li>
        <li className='px-2'><a href='http://twitter.com'><i className='fab fa-twitter'></i></a></li>


       

        {props.loginUser !== null ? <>
          <li onClick={props.logout} className='px-2'>Logout</li>
          <li  className='px-2 defaultcursor'> Hi {props.loginUser.first_name}</li>
        </> : <>
        <li className='px-2'><NavLink to='/register'>Register</NavLink></li>
        <li className='px-2'><NavLink to='/login'>Login</NavLink></li>
        </>}
        
        
      </ul>

    </nav>
    </>
  )
}
