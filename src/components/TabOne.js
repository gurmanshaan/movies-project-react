/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import { Link } from "react-router-dom";

function TabOne() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [content, setContent] = useState([]);
  const [show, setShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const searchHandler = async () => {
    try {
      const data = await axios.get(
        `https://www.omdbapi.com/?t=${movieTitle}&y=${movieYear}&plot=full&apikey=35d72fda`
      );
      setContent([data.data]);
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  const renderList = () =>
    content.map((res) => {
      if (content[0].Error === "Movie not found!") {
        return (
          <div className="movie-section">
            <h1>Movie not found!</h1>
          </div>
        );
      } else {
        return (
          <div className="movie-section" key={res.Title}>
            <div className="section-left">
              <div className="movie-title">{res.Title}</div>
              <div className="movie-plot">{res.Plot}</div>
              <div className="info">
                <button
                  id="infoBtn"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        );
      }
    });

  useEffect(() => {
    renderList();
  }, [searchHandler]);

  return (
    <div className="tabOne">
      <div className="heading">
        <Link to="/">
          <div className="logo">Movie App</div>
        </Link>
      </div>

      <div className="search">
        <div className="movieTitle">
          <label htmlFor="movieTitle">Movie Title: </label>
          <input
            type="text"
            placeholder="Search.."
            name="movieTitle"
            onChange={(e) => {
              setMovieTitle(e.target.value);
            }}
          />
        </div>
        <div className="movieYear">
          <label htmlFor="movieYear">Movie Year: </label>
          <input
            type="number"
            placeholder="Search.."
            name="movieYear"
            onChange={(e) => {
              setMovieYear(e.target.value);
            }}
          />
        </div>
        <div className="searchBtn">
          <button id="srch" onClick={searchHandler}>
            Search
          </button>
        </div>
      </div>
      <div className="output">
        {show ? movieTitle && movieYear && content && renderList() : null}

        {openModal && <Modal content={content} closeModal={setOpenModal} />}
      </div>
    </div>
  );
}

export default TabOne;
