import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'




export default function ProtectedRoute() {

    

   if(localStorage.getItem('userInfo')){
     
    return(<Outlet/>) 

   } else{

        return (<Navigate to='/login'/>);
   }
   
  
}
