import React from "react";
import image from "../notavailable.jpeg";

const MovieItem = ({movie}) => {
  return (
    <>
      {movie.map((res) => {
        if (movie[0].Error === "Movie not found!") {
          return (
            <div className="movie-section" key={res.Error}>
              <h1>Movie not found!</h1>
            </div>
          );
        } else {
          return (
            <div className="movie-section" key={res.Title}>
              <div className="section-right">
                <img
                  src={res.Poster === "N/A" ? image : res.Poster}
                  alt={res.Title}
                />
              </div>
              <div className="section-left">
                <div className="movie-title">{res.Title}</div>
                <div className="movie-rating">
                  <span>IMDB Rating : {res.imdbRating}</span>
                  <span>IMDB Votes :{res.imdbVotes}</span>
                  <span>Runtime : {res.Runtime}</span>
                  <span>Year : {res.Year}</span>
                </div>
                <div className="movie-plot">{res.Plot}</div>
                <div className="movie-info">
                  <div>
                    <span>Director : {res.Director}</span>
                  </div>
                  <div>
                    <span>Stars : {res.Actors}</span>
                  </div>
                  <div>
                    <span>Generes : {res.Genre}</span>
                  </div>
                  <div>
                    <span>Languages : {res.Language}</span>
                  </div>
                  <div>
                    <span>Awards : {res.Awards} </span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default MovieItem;
