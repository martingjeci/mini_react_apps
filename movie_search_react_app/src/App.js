import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//API Key = 2dee2a78
const API_URL = "http://www.omdbapi.com?apikey=2dee2a78";

//functional component
const App = () => {
    const[movies , setMovies] = useState([]);
    const[searchTerm, setSearchTerm] = useState("");

    const searchMovies = async(title) => {
        //call the API
        const response = await fetch (`${API_URL}&s=${title}`);
        //get the data from the API
        const data = await response.json();

        setMovies(data.Search);

    }

    

    return (
      <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={()=> searchMovies(searchTerm)}
          />
        </div>

        
        {movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie = {movie}/>
              ))}
            </div>
          ): (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )} 

      </div>
    ); 
}

//export the app component
export default App;
