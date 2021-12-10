import React from "react";
import image from "../notavailable.jpeg";

const MovieList = (props) => {
	return (
    <>
      { props.movies.Search && props.movies.Search.map((movie,index) => (
		<div className="moviecontainer" key={index} onClick={()=>{props.onMovieSelect(movie.imdbID)}}>
      <img src={movie.Poster === "N/A"  ? image :  movie.Poster} alt={movie.Title} className="coverimage" />
        <div className="moviename">  {movie.Title} </div>
       <div className="infocolumn">
         <span className="movieinfo">Year : {movie.Year}</span>
         <span className="movieinfo">Type : {movie.Type}</span>
       </div>
       </div>
      ))
	}	

    </>
  );
};

export default MovieList;
