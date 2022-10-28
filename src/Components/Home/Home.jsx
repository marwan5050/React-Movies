import React, { useContext } from 'react';
import { MoviesContext } from '../../MoviesContext';
// import axios from 'axios';
// import { useState , useEffect } from 'react';





export default function Home() {

  let {trendingMovies , trendingTv ,trendingActors } = useContext(MoviesContext);

  let myImage = 'https://image.tmdb.org/t/p/w500';

  // const [trendingMovies, setTrendingMovies] = useState([]);

  // const [trendingTv, settrendingTv] = useState([]);

  // const [trendingActors, settrendingActors] = useState([]);






//  async function getTrendingMedia(mediaType , callback){

//     let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=996182bcb963c6a701f2a4ba679a46c2`);

//     callback(data.results.slice(0,10));
//   }

  

  // useEffect(() => {
    
  //   getTrendingMedia('movie' ,setTrendingMovies );
  //   getTrendingMedia('tv' ,settrendingTv );
  //   getTrendingMedia('person' ,settrendingActors );
    
  // }, [])
  

  
  

  return (
 <>

  <div className='row mb-5'>
      
      <div className='col-md-4 d-flex align-items-center'>
        <div>
          <div className='w-25 my-3 brdr'></div>
          <h2 className='h3 text-capitalize'>Trending movies<br/>
           watch <br/>
            All now
          </h2>
          <div className='brdr my-3'></div>
        </div>
      </div>
      
        {trendingMovies.map((movie , index)=> <div key={index} className='col-md-2'>

            <div className='movie my-3 position-relative'>
              <div className='position-absolute top-0 start-100 translate-middle'><div className="badge text-center text-bg-primary p-2" style={{fontSize:'15px'}}>{movie.vote_average.toFixed(1)}</div></div>
              <div>
              <img className='w-100' src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="pic"/>
              <h2 className='h6 my-2 text-center'style={{fontSize:'17px' , fontStyle:'italic' , fontWeight:'600' , color:'#F0FFFF'}} >{movie.title}</h2>
              </div>
            </div>
        </div> )}



 </div>


 

 <div className='row my-5'>
      
      <div className='col-md-4 d-flex align-items-center'>
        <div>
          <div className='w-25 my-3 brdr'></div>
          <h2 className='h3 text-capitalize'>Trending Tv<br/>
           watch <br/>
            All now
          </h2>
          <div className='brdr my-3'></div>
        </div>
      </div>
      
        {trendingTv.map((movie , index)=> <div key={index} className='col-md-2'>

            <div className='movie my-3 position-relative'>
              <div className='position-absolute top-0 start-100 translate-middle'><div className="badge text-center text-bg-primary p-2" style={{fontSize:'15px'}}>{movie.vote_average.toFixed(1)}</div></div>
              <div>
              <img className='w-100' src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="pic"/>
              <h2 className='h6 my-2 text-center'style={{fontSize:'17px' , fontStyle:'italic' , fontWeight:'600' , color:'#F0FFFF'}} >{movie.name}</h2>
              </div>
            </div>
        </div> )}


        
 </div>


 <div className='row '>
      
      <div className='col-md-4 d-flex align-items-center'>
        <div>
          <div className='w-25 my-3 brdr'></div>
          <h2 className='h3 text-capitalize'>Trending actors<br/>
           watch <br/>
            All now
          </h2>
          <div className='brdr my-3'></div>
        </div>
      </div>
      
        {trendingActors.map((movie , index)=> <div key={index} className='col-md-2'>

            <div className='movie my-3 position-relative'>
              <div className='position-absolute top-0 start-100 translate-middle'><div className="badge text-center text-bg-primary p-2" style={{fontSize:'15px'}}>{movie.vote_average}</div></div>
              <div>
              <img className='w-100' src={myImage + movie.profile_path} alt="pic"/>
              <h2 className='h6 my-2 text-center'style={{fontSize:'17px' , fontStyle:'italic' , fontWeight:'600' , color:'#F0FFFF'}} >{movie.name}</h2>
              </div>
            </div>
        </div> )}



 </div>


</>
  )
}
