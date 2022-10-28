// import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
// import { useEffect ,useState } from 'react';
import { MoviesContext } from '../../MoviesContext';




export default function Movies() {


  let {trendingMovies} = useContext(MoviesContext);

 

// ========= another way for calling data from api===========

// const [trendingMovies, settrendingMovies] = useState([])


// async function getMovies(){

//   let {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=996182bcb963c6a701f2a4ba679a46c2`);

//   settrendingMovies(data.results.slice(0,18));
// }




// useEffect(() => {
    
//   getMovies();
  
// }, [])


  return (
 <>
  <div className='container'>
    <h2 className='text-center text-capitalize my-5 ' style={{fontStyle:'italic' , color:'#F0FFFF'}}>weekly trending movies</h2>
    <div className='row'>

      {trendingMovies.map((movie , index)=> <div key={index} className='col-md-2 '>

        <div className='movie my-3 position-relative'>
          <div className='position-absolute top-0 start-100 translate-middle'><div className="badge text-center text-bg-primary p-2" style={{fontSize:'15px'}}>{movie.vote_average.toFixed(1)}</div></div>
          <div>
          <img className='w-100' src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="pic"/>
          <h2 className='h6 my-2 text-center'style={{fontSize:'17px' , fontStyle:'italic' , fontWeight:'600' , color:'#F0FFFF'}} >{movie.title}</h2>
          </div>
        </div>
        </div> )}

         
    </div>
  </div>
  </>
  )
}
