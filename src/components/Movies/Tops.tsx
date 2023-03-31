import { useEffect, useState } from "react";
import axios from "axios";
const IMG_URI = import.meta.env.VITE_IMG_URI;
const API_KEY = import.meta.env.VITE_API_KEY;
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
    let outputList: any = null;
    inputList.forEach((id: number) => {
      const genre: any = getGenreName(id);
      outputList.concat(...genre.name);
    });
    console.log("Aqui", outputList);
    return outputList;
  };

  return (
    <div className="tops">
      <h3 className="tops__title">{title}</h3>
      <div className="tops__movie-container">
        {movies.slice(3, 6).map(
          (movie: any) => (
            console.log("Gener", genres),
            console.log("Movie", movie),
            (
              <div className="tops__movie" key={movie.id}>
                <img
                  src={IMG_URI + movie.poster_path}
                  title={movie.original_title}
                />
                <div className="tops__movie-info">
                  <h4 className="tops__movie-title">{movie.original_title}</h4>
                  <p className="tops__movie-gnre">
                    {getGenresList(movie.genre_ids)}
                  </p>
                  <p className="tops__movie-year">{movie.release_date}</p>
                </div>
              </div>
            )
          )
        )}
        <button type="button" className="btn btn--main">
          See more
        </button>
      </div>
    </div>
  );
}
