import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MenuTabs from "@components/MenuTabs/MenuTabs";
import { themeStore } from "../../store/theme";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomCarousel from "@components/Carousel/CustomCarousel";
export default function Content() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [popMovies, setPopMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [ratedActors, setRatedActors] = useState([]);
  const [ratedMovies, setRatedMovies] = useState([]);
  const [ratedShows, setRatedShows] = useState([]);
  const [tvShows, setTVShows] = useState([]);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const getPopMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const movies = res.data;
    setPopMovies(movies.results);
  };
  //Rated Movies
  const getRatedMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const movies = res.data;
    setRatedMovies(movies.results);
  };
  //Rated TV Shows
  const getRatedShows = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const shows = res.data;
    setRatedShows(shows.results);
  };
  //Popular actors
  const getRatedActors = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const actors = res.data;
    setRatedActors(actors.results);
  };
  //TV On Air
  const getTVShows = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const shows = res.data;
    setTVShows(shows.results);
  };
  //Genre list
  const getGenre = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );
    const genre = res.data;
    setGenres(genre.genres);
  };

  useEffect(() => {
    getPopMovies();
    console.log(popMovies);
    console.log("e", import.meta.env.VITE_API_KEY);
    /*   getRatedMovies();
    getRatedShows();
    getRatedActors();
    getTVShows();
    getGenre(); */
    themeStore.subscribe((state: any) => {
      setDarkMode(state.darkMode);
    });
  }, []);

  /*  useEffect(
    () => 
      ,
    []
  ); */
  return (
    <div>
      <MenuTabs darkMode={darkMode} />
      {popMovies.length > 0 ? (
        <CustomCarousel>
          {popMovies.slice(1, 6).map((movie: any) => {
            movie.original_title;
          })}
        </CustomCarousel>
      ) : null}
    </div>
  );
}
