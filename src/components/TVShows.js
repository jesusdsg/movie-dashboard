import React from "react";
import {
  BiCaretRight,
  BiGlobe
} from "react-icons/bi";

const TVShows = ({ show, genres, isDark }) => {
  let posterPath = show.poster_path;
  let fullpath = process.env.REACT_APP_IMG_URI + posterPath;
  let genre = "";
  genres.forEach((entry) => {
    if (entry.id === show.genre_ids[0]) {
      genre = entry.name;
    }
  });
  return (
    <div className="rated-actor__img-container">
      <div className="text-center">
        <div className="rated-actor__overlay">
          <button className="btn-secondary rated-actor__btn"><BiCaretRight /></button>
          <div className="rated-actor__info px-2">
            <span className="text-l text-white font-bold overflow-ellipsis">{show.name}</span><br />
            <span className="text-l text-gray-300 overflow-ellipsis">{genre}</span>
            <div className="flex text-white text-sm ml-16 mt-2">
              <BiGlobe className="text-white mr-2" size="20" />{" "}
              {show.origin_country[0]} {show.origin_country[1]}
            </div>
          </div>
        </div>
        <img
          src={fullpath}
          alt="Actor"
          className="rated-actor__img-container"
        />
      </div>
    </div>
  );
};
export default TVShows;
