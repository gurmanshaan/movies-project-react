/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieItem from "./MovieItem";

function Search() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movie,setMovie]= useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  
  const getMovieRequest = async (movieTitle,movieYear) =>{
    if(movieTitle) {
    const url = `https://www.omdbapi.com/?t=${movieTitle}&y=${movieYear}&apikey=35d72fda`;
  const response = await fetch(url);
  const responseJson = await response.json();
  setValid(true);
  setMovie([responseJson]);
  }
  setSubmitted(true);
  }


const handleKeyDown = (e)=>{
  if(e.key === " " && movieTitle.length === 0){
    e.preventDefault();
  }
}

const handleNumber = (e)=>{
  if(!((e.keyCode > 95 && e.keyCode <106)|| (e.key === "Backspace") || (e.keyCode > 47 && e.keyCode < 58) )){
    e.preventDefault();
  }
}

  useEffect(() => {
  },[movieTitle,movieYear]);

  return (
    <div className="tabTwo">
     <div className="header">
        <div className="heading">
          <div className="logo">MOVIE APP</div>
        </div>
        <Link to="/">
          <div className="tab">
            <button className="tabBtn">HOME</button>
          </div>
        </Link>   
      </div>
      <div className="search">
        <div className="movieTitle">
        <label htmlFor="movieTitle">Movie Title: </label>
        <input
        onKeyDown={handleKeyDown}
          type="text"
          value={movieTitle}
          placeholder="Search Movie Title"
          name="movieTitle"
          autoComplete="off"
          onChange={(e) => {
            setMovieTitle(e.target.value);
          }}
          />
  {submitted && !movieTitle ? <p>Please fill Movie Title</p>:null}
          </div>
          <div className="movieYear">
        <label htmlFor="movieYear">Movie Year: </label>
        <input
        min="1"
        step="1"
          type="number"
           onKeyDown={handleNumber}
          value={movieYear}
          placeholder="Search Movie Year"
          name="movieYear"
          onChange={(e) => {
            setMovieYear(e.target.value) ;
            
          }}
          />
          </div>
          <div className="searchBtn">
        <button id="srch" onClick={()=>{getMovieRequest(movieTitle,movieYear)}}>Search</button>
          </div>
      </div>
      <div className="output">
     {submitted && valid ? <MovieItem movie={movie}/>: null}     
      </div>
    </div>
  );
}

export default Search;
