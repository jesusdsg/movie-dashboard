import React from "react";
import { BiPlus } from "react-icons/bi";

const PopularMovies = ({ movie, windowWidth }) => {
    let posterPath = movie.backdrop_path;
    let fullpath = process.env.REACT_APP_IMG_URI + posterPath;
  return (
    <div
      className="slider-popmovie__container"
      style={{          
        background:
        windowWidth >= 650 
        ? `linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url('${fullpath}') no-repeat 100% 30%`
        : `linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url('${fullpath}') no-repeat 25% 40%`,
      }}
    >
      <div className="slider-popmovie__info text-left">
      <span className="slider-popmovie__title">{movie.title}</span><br/>
      <p className="slider-popmovie__description h-12">{movie.overview}</p>
      <div className="slider-popmovie__buttons flex gap-4 w-40 text-center">
      <button className="btn-primary">Watch</button>
      <button className="btn-secondary"><BiPlus /></button>
      </div>
      </div>
    </div>
  );
};

export default PopularMovies;
