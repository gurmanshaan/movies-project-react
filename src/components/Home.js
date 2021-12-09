/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";
import Pagination from "./Pagination";

function Home() {
  const [movieTitle, setMovieTitle] = useState("");
  const [selectedMovie, onMovieSelect] = useState();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const getMovieRequest = async (movieTitle, currentPage) => {
    if (movieTitle.length > 2) {
      const url = `https://www.omdbapi.com/?s=${movieTitle}&apikey=35d72fda&page=${currentPage}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      if (responseJson.Search) {
        setCurrentPage(currentPage);
        setMovies(responseJson);
        setTotalResults(responseJson.totalResults);
      } else {
        setMovies([]);
        setTotalResults(0);
      }
    } else {
      setMovies([]);
      setTotalResults(0);
    }
  };

  const nextPage = (pageNumber) => {
    getMovieRequest(movieTitle, pageNumber);
  };

  const numberOfPages = Math.floor(totalResults / 10);

  const handleKeyDown = (e) => {
    if (e.key === " " && movieTitle.length === 0) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
    getMovieRequest(movieTitle, currentPage);
  }, [movieTitle, currentPage]);

  return (
    <div className="home">
      <div className="header">
        <div className="heading">
          <div className="logo">MOVIE APP</div>
        </div>
        <Link to="/search">
          <div className="tab">
            <button className="tabBtn">Search</button>
          </div>
        </Link>
      </div>
      <div className="tabOne">
        <div className="search">
          <div className="movieTitle">
            <label htmlFor="movieTitle">Movie Title: </label>
            <input
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="Search Movie Title"
              name="movieTitle"
              autoComplete="off"
              onChange={(e) => {
                setMovieTitle(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="container">    
          {selectedMovie && (
            <Modal
              selectedMovie={selectedMovie}
              onMovieSelect={onMovieSelect}
            />
          )}
          <div className="movielistcontainer">
            <MovieList movies={movies} onMovieSelect={onMovieSelect} />
          </div>
          {totalResults > 10 ? (
            <Pagination
              data={movies}
              pages={numberOfPages}
              nextPage={nextPage}
              currentPage={currentPage}
              pageLimit={0}
              dataLimit={10}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
