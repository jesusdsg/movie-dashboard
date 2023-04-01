import { useEffect, useState } from "react";
import axios from "axios";
const IMG_URI = import.meta.env.VITE_IMG_URI;
const API_KEY = import.meta.env.VITE_API_KEY;
import imdbLogo from '@assets/imdb.png'
export default function Tops({ title, movies }: any) {
  const [genres, setGenres] = useState<any>([]);
  //Genre list
  const getGenre = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const genre = res.data;
    setGenres(genre.genres);
  };
  useEffect(() => {
    getGenre();
  }, []);

  const getGenreName = (id: number) => {
    return genres.find((x: any) => x.id == id);
  };

  const getGenresList = (inputList: any) => {
    let outputList: any = [];
    inputList.forEach((id: number) => {
      const genre: any = getGenreName(id);
      if (!!genre){
        outputList.push(` ${genre.name}`)
      }
      
    });
    return outputList;
  };

  return (
    <div className="tops">
      <h3 className="tops__title">{title}</h3>
      <div className="tops__movie-container">
        {movies.slice(3, 6).map(
          (movie: any) => {
            const genreList = getGenresList(movie.genre_ids);
            return (
              <div className="tops__movie" key={movie.id}>
                <img
                  src={IMG_URI + movie.poster_path}
                  title={movie.original_title}
                />
                <div className="tops__movie-info">
                  <h4 className="tops__movie-title">{movie.original_title || movie.original_name}</h4>
                  <p className="tops__movie-gnre">
                    {genreList}
                  </p>
                  <p className="tops__movie-year">{movie.release_date || movie.first_air_date}</p>
                  <div className="top__imdb-container"><img src={imdbLogo} /><span>{movie.vote_average}</span></div>
                  
                </div>
              </div>
            )
            }
        )}
        <button type="button" className="btn btn--main">
          See more
        </button>
      </div>
    </div>
  );
}
