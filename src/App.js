import './App.css';
import React, { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';


const API_URL = "http://www.omdbapi.com?apikey=3528245f";
const movie1 =
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}



function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')


  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
   setMovies(data.Search);
  };
  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className="search">
    <input
      placeholder = "search for movies"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    
    />
    <img
          src={SearchIcon}
          alt="search"
          onClick = {() => searchMovies(searchTerm)}
        />
    </div>
         {
           movies?.length > 0
           ?(<div className='container'>
          {
            movies.map((movie) => (
               <MovieCard movie = {movie}/>
            ))
          }
          </div>):(
            <div>
              <h2>No movies Found</h2>
            </div>

          )
         }



      </div>
    
     
  );
}

export default App;
