import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "../notavailable.jpeg";

function Modal(props) {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=35d72fda`)
      .then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <div className="modal">
      <div className="overlay">
      <div className="movie-section">
      {movieInfo ? (
        <>
             <div className="close">
            <button
              id="closeBtn"
              className="close-modal"
              onClick={() => props.onMovieSelect()}
            >
              X
            </button>
            </div>
            <div className="section-right">
          <img
            src={movieInfo.Poster === "N/A" ? image : movieInfo.Poster}
           
            alt={movieInfo.Title}/>
          </div>
          <div className="section-left">
            <div className="movie-title">{movieInfo.Title}</div>
            <div className="movie-rating">
              <span>IMDB Rating : {movieInfo.imdbRating}</span>
              <span>IMDB Votes :{movieInfo.imdbVotes}</span>
              <span>Runtime : {movieInfo.Runtime}</span>
              <span>Year : {movieInfo.Year}</span>
            </div>
            <div className="movie-plot">{movieInfo.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director :</span>
                <span>{movieInfo.Director}</span>
              </div>
              <div>
                <span>Stars :</span>
                <span>{movieInfo.Actors}</span>
              </div>
              <div>
                <span>Generes :</span>
                <span>{movieInfo.Genre}</span>
              </div>
              <div>
                <span>Languages :</span>
                <span>{movieInfo.Language}</span>
              </div>
              <div>
                <span>Awards : </span>
                <span>{movieInfo.Awards}</span>
              </div>
              <div>
                <span>Box Office : </span>
                <span>{movieInfo.imdbRating > 7 ? "HIT" : "FLOP"}</span>
              </div>
            </div>
            </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
      </div>
    </div>
  );
}

export default Modal;
