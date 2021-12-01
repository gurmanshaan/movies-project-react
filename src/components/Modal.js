import React from "react";
import image from "../notavailable.jpeg";

function Modal({ content, closeModal }) {
  return (
    <div className="modal">
      <div className="overlay">
        <div className="movie-section">
          <div className="close">
            <button
              id="closeBtn"
              className="close-modal"
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="section-right">
            <img
              src={content[0].Poster === "N/A" ? image : content[0].Poster}
              alt={content[0].Title}
            />
          </div>
          <div className="section-left">
            <div className="movie-title">{content[0].Title}</div>
            <div className="movie-rating">
              <span>IMDB Rating : {content[0].imdbRating}</span>
              <span>IMDB Votes :{content[0].imdbVotes}</span>
              <span>Runtime : {content[0].Runtime}</span>
              <span>Year : {content[0].Year}</span>
            </div>
            <div className="movie-plot">{content[0].Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director :</span>
                <span>{content[0].Director}</span>
              </div>
              <div>
                <span>Stars :</span>
                <span>{content[0].Actors}</span>
              </div>
              <div>
                <span>Generes :</span>
                <span>{content[0].Genre}</span>
              </div>
              <div>
                <span>Languages :</span>
                <span>{content[0].Language}</span>
              </div>
              <div>
                <span>Awards : </span>
                <span>{content[0].Awards}</span>
              </div>
              <div>
                <span>Box Office : </span>
                <span>{content[0].imdbRating > 7 ? "HIT" : "FLOP"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
