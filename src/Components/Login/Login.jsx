import React, { useState } from 'react'
import Joi from 'joi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Login(props) {


  const [userData, setuserData] = useState({
    email:'',
    password:''
  });

  const [loadin, setloadin] = useState(false);

  const [error, seterror] = useState('');

  const [errorList, seterrorList] = useState([]);

  const redirectRoute = useNavigate();



  function userINFO(e){

    let myuser = {...userData};

    myuser[e.target.name] = e.target.value;

    setuserData(myuser);

  }


  function validateForm(){

    let scheme = Joi.object({

      email:Joi.string().email({tlds:{allow:['com' , 'net' , 'org']}}).required(),
      password:Joi.string().pattern(new RegExp('^[A-Z][a-z][0-9]{2,8}$')).required()
    })

    return scheme.validate(userData , {abortEarly:false});

  }


async  function formSubmit(e){

    e.preventDefault();

    setloadin(true);

    let validationFormResponse = validateForm();

    if(validationFormResponse.error){

      seterrorList(validationFormResponse.error.details);

      setloadin(false);

    }else{

      let {data} = await axios.post(`http://route-egypt-api.herokuapp.com/signin`, userData);

      if(data.message === "success"){

        localStorage.setItem('userInfo' , data.token);

        props.info();

        redirectRoute('/home');

        setloadin(false);

      } else{

        seterror(data.message);

        setloadin(false);
      }
    }
    
  }



  return (
    <>
    
<div className='w-75 mx-auto py-4'>

    <h1>Login</h1>
    

    <div className='my-2'>

        <form onSubmit={formSubmit}>

          {error ? <div className='alert alert-danger'>
            {error.slice(26)}
          </div> : ""}

          {errorList.map((err , index)=> (

            <div key={index} className='alert alert-danger'>
              {err.type === 'string.pattern.base' ? 'invalid password' : err.message}
            </div>
          ))}

          <div>
          <label htmlFor='email'>Email:</label>
            <input type="email" onChange={userINFO} className='form-control' name='email' />
          </div>

          <div>
          <label htmlFor='password'>Password:</label>
            <input type="password" onChange={userINFO} className='form-control' name='password' />
          </div>

          <button type='submit' className='btn btn-info my-2'>
            {loadin ? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
          </button>

        </form>

     </div>



</div>




    </>
  )
}
