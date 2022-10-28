import axios from "axios";

const { createContext, useState, useEffect } = require("react");


export let MoviesContext = createContext([]);



export function MoviesContextProvider(props){


    
  const [trendingMovies, setTrendingMovies] = useState([]);

  const [trendingTv, settrendingTv] = useState([]);

  const [trendingActors, settrendingActors] = useState([]);






 async function getTrendingMedia(mediaType , callback){

    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=996182bcb963c6a701f2a4ba679a46c2`);

    callback(data.results.slice(0,10));
  }

 

  useEffect(() => {
    
    getTrendingMedia('movie' ,setTrendingMovies );
    getTrendingMedia('tv' ,settrendingTv );
    getTrendingMedia('person' ,settrendingActors );
    
  }, [])
  

  
  



    return(

       <MoviesContext.Provider value={{trendingMovies , trendingTv ,trendingActors }}>
            {props.children}
       </MoviesContext.Provider>
    )

}