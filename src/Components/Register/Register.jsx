import axios from 'axios';
import Joi from 'joi';
import React from 'react';
import {   useState} from 'react';
import { useNavigate } from 'react-router-dom';



// useEffect ,

export default function Register() {

const [userData, setuserData] = useState({
  first_name:"",
  last_name:"",
  email:"",
  password:""
});

const [error, seterror] = useState(''); // err from api

const [errorLsit, seterrorLsit] = useState([]); // err list from joi

const [loading , setloading] = useState(false); // button loading

const redirectRoute = useNavigate(); // redirect to login



function userINFO(e){

  let myUser = {...userData};

  myUser[e.target.name] = e.target.value;

  setuserData(myUser);

}


function validateForm(){

  let scheme = Joi.object({

    first_name: Joi.string().min(4).max(20).required(),
    last_name: Joi.string().min(4).max(20).required(),
    email: Joi.string().email({tlds: {allow:['com' , 'net' ,'org']}}).required(),
    password:Joi.string().pattern(new RegExp('^[A-Z][a-z][0-9]{2,4}$')),
     
  })

  return scheme.validate(userData , {abortEarly:false});
}



async function formSubmit(e){

  e.preventDefault();


  setloading(true);

  let validationFormResponse = validateForm();

  if(validationFormResponse.error){

    // console.log(validationFormResponse);

    seterrorLsit(validationFormResponse.error.details)

    setloading(false);

  } else{

    let {data} = await axios.post(`http://route-egypt-api.herokuapp.com/signup`,userData);

    if(data.message === 'success'){

      redirectRoute('/login')
   
     setloading(false);
   
   
    } else{
     seterror(data.message);
   
     setloading(false);
    }

  }
  
}



  return (
    <>
    <div className='w-75 mx-auto py-4'>
      <h1>Register Now</h1>

      <form onSubmit={formSubmit}>

        {error ? <div className='alert alert-danger'>
          {error.slice(26)}
            </div> : "" }


          {errorLsit.map((err , index)=>(

            <div key={index} className='alert alert-danger'>
              {err.type === 'string.pattern.base' ? 'invalid password:must start with capital and max 4 chars': err.message}
            </div>
          ) )}
          

           
     
        

        <div className='my-2'>
          <label htmlFor='first_name'>First Name:</label>
          <input type='text' onChange={userINFO} className='form-control' name='first_name' />
        </div>

        <div className='my-2'>
          <label htmlFor='last_name'>last Name:</label>
          <input type='text' onChange={userINFO} className='form-control' name='last_name' />
        </div>

        <div className='my-2'>
          <label htmlFor='email'>Email:</label>
          <input type='email' onChange={ userINFO}  className='form-control' name='email' />
        </div>

        <div className='my-2'>
          <label htmlFor='password'>Password:</label>
          <input type='password' onChange={userINFO} className='form-control' name='password' />
        </div>

        <button  type='submit' className='btn btn-info my-2'>
          {loading ? <i className='fas fa-spinner fa-spin'></i> : 'register'} 
          </button>
      </form>
    </div>
    </>
  )
}
