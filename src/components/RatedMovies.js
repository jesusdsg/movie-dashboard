import React from "react";
import IMDBimg from "../assets/imdb.png";

const RatedMovies = ({ movie, genres, isDark }) => {
  let posterPath = movie.poster_path;
  let fullpath = process.env.REACT_APP_IMG_URI + posterPath;
  let genre1 = "";
  let genre2 = "";
  genres.forEach((entry) => {
    if (entry.id === movie.genre_ids[0]) {
      genre1 = entry.name;
    }
    if (entry.id === movie.genre_ids[1]) {
      genre2 = entry.name;
    }
  });
  return (
    <div className="grid grid-cols-2 mb-2 mt-4 gap-2">
      <div>
        <img src={fullpath} className="rated-movies__img" alt="Movie Cover" />
      </div>
      <div>
        <span className={`block text-sm w-32 overflow-ellipsis ${isDark ? 'txt-active-dark font-medium' : 'txt-active-light font-medium'}`}>
          {movie.title}{movie.name}
        </span>
        <span className="text-xs">
          {genre1} {genre2}
        </span>

        <span className={`flex gap-4 mt-4 text-sm ${isDark ? 'txt-active-dark font-medium' : 'txt-active-light font-medium'}`}>
          <img src={IMDBimg} className="h-6" alt="imdb" />
          {movie.vote_average}
        </span>
      </div>
    </div>
  );
};
export default RatedMovies;
