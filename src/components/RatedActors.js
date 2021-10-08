import React from "react";
import { BiPlus, BiStar } from "react-icons/bi";

const RatedActors = ({ actor }) => {
  let posterPath = actor.profile_path;
  let fullpath = process.env.REACT_APP_IMG_URI + posterPath;
  let movieNumber = 0;
  let showNumber = 0;
  let movies, shows;
  if (actor.known_for) {
    actor.known_for.forEach((entry) => {
      entry.media_type === "movie" && movieNumber++;
      entry.media_type === "tv" && showNumber++;
    });
    movies = movieNumber + " recent movies";
    shows = showNumber + " recent shows";
  }
  return (
    <div className="rated-actor__img-container">
      <div className="text-center">
        <div className="rated-actor__overlay">
          <button className="btn-secondary rated-actor__btn"><BiPlus /></button>
          <div className="rated-actor__info">
            <span className="text-l text-white">{actor.name}</span>
            <br />
            <span className="text-sm text-white">
              {movieNumber > 0 ? movies : shows}
            </span>
            <br />
            <div className="flex text-white text-sm ml-16 mt-2">
              <BiStar className="text-yellow-500 mt-1 mr-2" />{" "}
              {actor.popularity}
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

export default RatedActors;
