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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [actorsCenterSlide, setActorsCenterSlide] = useState(20);
  const [continueCenterSlide, setContinueCenterSlide] = useState(40);
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
    const handleScreenChange = () => {
      windowWidth >= 650 && setActorsCenterSlide(25), setContinueCenterSlide(60);
      windowWidth < 650 && setActorsCenterSlide(40), setContinueCenterSlide(40);
    };
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    handleScreenChange();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <div>
      <MenuTabs darkMode={darkMode} />
      <h3 className="content__title">Movies in Premiere</h3>
      <div>
        {popMovies.length > 0 ? (
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay
            className={darkMode ? "carousel__container carousel__container--dark" : "carousel__container carousel__container--light" }
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
          centerSlidePercentage={actorsCenterSlide}
          className={darkMode ? "carousel__container carousel__container--dark" : "carousel__container carousel__container--light" }
        >
          {ratedActors.slice(9, 20).map((actor: any) => {
            console.log('Actor is', actor)
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
          centerSlidePercentage={continueCenterSlide}
          className={darkMode ? "carousel__container carousel__container--dark" : "carousel__container carousel__container--light" }
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
