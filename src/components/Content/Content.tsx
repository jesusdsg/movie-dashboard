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

interface ContentProps {
  darkMode: boolean;
}

export default function Content({ darkMode }: ContentProps) {
  const [centerWidth, setCenterWidth] = useState(25);
  const [popMovies, setPopMovies] = useState<any>([]);
  const [ratedActors, setRatedActors] = useState<any>([]);

  const API_KEY = import.meta.env.VITE_API_KEY;

  // popular movies
  const getPopMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const movies = res.data;
    setPopMovies(movies.results);
  };

  // popular actors
  const getRatedActors = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const actors = res.data;
    setRatedActors(actors.results);
  };

  useEffect(() => {
    getPopMovies();
    getRatedActors();
  }, []);

  return (
    <div>
      <MenuTabs darkMode={darkMode} />
      <h3 className="content__title">Most Popular Movies</h3>
      <div>
        {popMovies.length > 0 ? (
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay
            className="carousel__container"
          >
            {popMovies.slice(1, 8).map((movie: any) => {
              return (
                <PopularMovies
                  key={movie.id}
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
        <h3 className="content__title">Most Rated Actors</h3>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          emulateTouch={true}
          centerMode={true}
          swipeable
          centerSlidePercentage={centerWidth}
          className="carousel__container"
        >
          {ratedActors.slice(9, 20).map((actor: any) => {
            return (
              <Actor
                key={actor.id}
                name={actor.name}
                img={actor.profile_path}
                popularity={actor.popularity}
              />
            );
          })}
        </Carousel>
      </div>
      <div>
        <h3 className="content__title">Continue Watching</h3>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          emulateTouch={true}
          centerMode={true}
          swipeable
          autoPlay
          centerSlidePercentage={40}
          className="carousel__container"
        >
          {popMovies.slice(7, 14).map((movie: any) => {
            return (
              <ContinueWatching
                darkMode={darkMode}
                key={movie.id}
                title={movie.title}
                img={movie.poster_path}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
