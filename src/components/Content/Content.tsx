import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MenuTabs from "@components/MenuTabs/MenuTabs";
import { themeStore } from "../../store/theme";
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import PopularMovies from "@components/Movies/PopularMovies";
import Actor from "@components/Movies/Actor";
import ContinueWatching from "@components/Movies/ContinueWatching";
export default function Content() {
  const [centerWidth, setCenterWidth] = useState(25);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [popMovies, setPopMovies] = useState<any>([]);
  const [genres, setGenres] = useState<any>([]);
  const [ratedActors, setRatedActors] = useState<any>([]);
  const [ratedMovies, setRatedMovies] = useState<any>([]);
  const [ratedShows, setRatedShows] = useState<any>([]);
  const [tvShows, setTVShows] = useState<any>([]);

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
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    const movies = res.data;
    setRatedMovies(movies.results);
  };
  //Rated TV Shows
  const getRatedShows = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    const shows = res.data;
    setRatedShows(shows.results);
  };
  //Popular actors
  const getRatedActors = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const actors = res.data;
    setRatedActors(actors.results);
  };
  //TV On Air
  const getTVShows = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`
    );
    const shows = res.data;
    setTVShows(shows.results);
  };
  //Genre list
  const getGenre = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const genre = res.data;
    setGenres(genre.genres);
  };

  useEffect(() => {
    getPopMovies();
    getRatedActors();
    console.log(popMovies);
    console.log("e", import.meta.env.VITE_API_KEY);
    /*   getRatedMovies();
    getRatedShows();
   
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
      <div>
        {" "}
        {popMovies.length > 0 ? (
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay
            className="w-96 lg:w-full my-10"
          >
            {popMovies.slice(1, 8).map((movie: any) => {
              return (
                <PopularMovies
                  poster={movie.backdrop_path}
                  title={movie.original_title}
                  description={movie.overview}
                />
              );
            })}
          </Carousel>
        ) : null}
      </div>
      <div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          emulateTouch={true}
          centerMode={true}
          swipeable
          autoPlay
          centerSlidePercentage={centerWidth}
          className="w-96 lg:w-full mb-10"
        >
          {ratedActors.slice(9, 20).map((actor: any) => {
            return (
              <Actor
                name={actor.name}
                img={actor.profile_path}
                popularity={actor.popularity}
              />
            );
          })}
        </Carousel>
      </div>
      <div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          emulateTouch={true}
          centerMode={true}
          swipeable
          autoPlay
          centerSlidePercentage={40}
          className="w-96 lg:w-full mb-10"
        >
          {popMovies.slice(7, 14).map((movie: any) => {
            return (
              <ContinueWatching title={movie.title} img={movie.poster_path} />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
