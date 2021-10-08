import "../styles/App.scss";
import Logo from "../assets/logo.png";
import LogoLight from "../assets/logolight.png";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import PopularMovies from "./PopularMovies";
import RatedMovies from "./RatedMovies";
import RatedActors from "./RatedActors";
import TVShows from "./TVShows";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  BiBuildingHouse,
  BiHomeAlt,
  BiCompass,
  BiCog,
  BiExit,
  BiUser,
  BiGroup,
  BiRadioCircleMarked,
  BiSearch,
  BiSun,
  BiMoon,
} from "react-icons/bi";
import {FaGithub} from 'react-icons/fa';
import axios from "axios";

function Dashboard({ isDark, setIsDark }) {
  //Media Query
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [popMovies, setPopMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [ratedActors, setRatedActors] = useState([]);
  const [ratedMovies, setRatedMovies] = useState([]);
  const [ratedShows, setRatedShows] = useState([]);
  const [tvShows, setTVShows] = useState([]);
  const [centerWidth, setCenterWidth] = useState(25);
  const history = useHistory();
  //const [isDark, setIsDark] = useState(true);
  //Popular Movies
  const getPopMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    const movies = res.data;
    setPopMovies(movies.results);
  };
  //Rated Movies
  const getRatedMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    const movies = res.data;
    setRatedMovies(movies.results);
  };
  //Rated TV Shows
  const getRatedShows = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    const shows = res.data;
    setRatedShows(shows.results);
  };
  //Popular actors
  const getRatedActors = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    const actors = res.data;
    setRatedActors(actors.results);
  };
  //TV On Air
  const getTVShows = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    const shows = res.data;
    setTVShows(shows.results);
  };
  //Genre list
  const getGenre = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const genre = res.data;
    setGenres(genre.genres);
  };



  const handleLogout = () => {
    history.push("/");
  };

  const toggleTheme = () => {
    isDark === true && setIsDark(false);
    isDark === false && setIsDark(true);
    if (isDark === true) {
      document.body.classList.add("bg-main-light");
      document.body.classList.remove("bg-main-dark");
    } else {
      document.body.classList.add("bg-main-dark");
      document.body.classList.remove("bg-main-light");
    }
  };

  useEffect(() => {
    getPopMovies();
    getRatedMovies();
    getGenre();
    getRatedShows();
    getRatedActors();
    getTVShows();
    const handleScreenChange = () => {
      windowWidth >= 650 && setCenterWidth(25);
      windowWidth < 650 && setCenterWidth(60);
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
    <Router>
      <div className="relative min-h-screen md:flex" data-dev-hint="container">
        <input type="checkbox" id="menu-open" className="hidden" />
        <label
          htmlFor="menu-open"
          className={`absolute right-2 bottom-2 shadow-lg rounded-full p-2 ${
            isDark
              ? "bg-main-dark txt-main-dark"
              : "bg-main-light txt-main-light"
          } hidden`}
          data-dev-hint="floating action button"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        <header
          className={`text-gray-100 flex justify-between md:hidden ${
            isDark ? "bg-main-dark" : "bg-main-light"
          }`}
          data-dev-hint="mobile menu bar"
        >
          <Link
            to="/"
            className="block p-4 text-white font-bold whitespace-nowrap truncate"
          >
            <img
              src={`${isDark ? Logo : LogoLight}`}
              className="w-28"
              alt="logo"
            />
          </Link>

          <label
            htmlFor="menu-open"
            id="mobile-menu-button"
            className={`m-2 p-2 focus:outline-none ${
              isDark
                ? "bg-main-dark txt-main-dark"
                : "bg-main-light txt-main-light"
            } rounded-md`}
          >
            <svg
              id="menu-open-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              id="menu-close-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </header>
        <aside
          id="sidebar"
          className={`md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
          data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation ${
            isDark
              ? "bg-main-dark txt-main-dark leftside-dark"
              : "bg-main-light txt-main-light leftside-light"
          }`}
        >
          <div
            className="flex flex-col space-y-6"
            data-dev-hint="optional div for having an extra footer navigation"
          >
            <Link
              to="/dashboard"
              className="text-white flex items-center space-x-2 py-2 px-6"
            >
              <img
                src={`${isDark ? Logo : LogoLight}`}
                className="w-28"
                alt="logo"
              />
            </Link>

            <nav data-dev-hint="main navigation">
              <label
                className={`ml-4 mb-5 mt-2 text-l uppercase nav-title ${
                  isDark ? "nav-title-dark" : "nav-title-light"
                }`}
              >
                Menu
              </label>
              <div className="py-6 ml-2">
                <Link
                  to="/dashboard"
                  className={`flex items-center space-x-2 py-2 px-4 transition duration-200 nav-item nav-active ${
                    isDark
                      ? "nav-item-dark nav-active-dark"
                      : "nav-item-light nav-active-light"
                  }`}
                >
                  <BiHomeAlt size="20" />
                  <span>Home</span>
                </Link>
                <Link
                  to="/dashboard"
                  className={`flex items-center space-x-2 py-2 px-4 transition duration-200 nav-item ${
                    isDark ? "nav-item-dark" : "nav-item-light"
                  }`}
                >
                  <BiBuildingHouse size="20" />
                  <span>Community</span>
                </Link>
                <Link
                  to="/dashboard"
                  className={`flex items-center space-x-2 py-2 px-4 transition duration-200 nav-item ${
                    isDark ? "nav-item-dark" : "nav-item-light"
                  }`}
                >
                  <BiCompass size="20" />
                  <span>Discover</span>
                </Link>
              </div>
              <label
                className={`ml-4 mb-5 mt-2 text-l uppercase nav-title ${
                  isDark ? "nav-title-dark" : "nav-title-light"
                }`}
              >
                Social
              </label>
              <div className="py-6 ml-2">
                <Link
                  to="/dashboard"
                  className={`flex items-center space-x-2 py-2 px-4 transition duration-200 nav-item ${
                    isDark ? "nav-item-dark" : "nav-item-light"
                  }`}
                >
                  <BiUser size="20" />
                  <span>Friends</span>
                </Link>
                <Link
                  to="/dashboard"
                  className={`flex items-center space-x-2 py-2 px-4 transition duration-200 nav-item ${
                    isDark ? "nav-item-dark" : "nav-item-light"
                  }`}
                >
                  <BiGroup size="20" />
                  <span>Party</span>
                </Link>
                <Link
                  to="/dashboard"
                  className={`flex items-center space-x-2 py-2 px-4 transition duration-200 nav-item ${
                    isDark ? "nav-item-dark" : "nav-item-light"
                  }`}
                >
                  <BiRadioCircleMarked size="20" />
                  <span>Media</span>
                </Link>
              </div>
              <label
                className={`ml-4 mb-5 mt-2 text-l uppercase nav-title ${
                  isDark ? "nav-title-dark" : "nav-title-light"
                }`}
              >
                General
              </label>
              <div className="py-6 ml-2">
                <Link
                  to="/dashboard"
                  className={`flex items-center space-x-2 py-2 px-4 transition duration-200 nav-item ${
                    isDark ? "nav-item-dark" : "nav-item-light"
                  }`}
                >
                  <BiCog size="20" />
                  <span>Settings</span>
                </Link>
                <Link
                  to="/"
                  className={`flex items-center space-x-2 py-2 px-4 transition duration-200 nav-item ${
                    isDark ? "nav-item-dark" : "nav-item-light"
                  }`}
                  onClick={() => handleLogout()}
                >
                  <BiExit size="20" />
                  <span>Log Out</span>
                </Link>
              </div>
            </nav>
          </div>
        </aside>

        <main
          id="content"
          className={`flex-1 mx-6 duration-200 ease-in-out  ${
            isDark
              ? "bg-main-dark txt-main-dark"
              : "bg-main-light txt-main-light"
          }`}
        >
          <div className="grid lg:grid-cols-10 gap-4 sm:grid-cols-1">
            <div className="col-span-8 center-content">
              <ul className="flex m-8">
                <li className="mr-6">
                  <Link
                    to="/dashboard"
                    className={`${isDark ? "nav-item-dark" : "nav-item-light"}`}
                  >
                    TV Series
                  </Link>
                </li>
                <li className="mr-6">
                  <Link
                    to="/dashboard"
                    className={`${
                      isDark
                        ? "nav-item-dark nav-active-dark font-bold"
                        : "nav-item-light nav-active-light font-bold"
                    }`}
                    href="#"
                  >
                    Movies
                  </Link>
                </li>
                <li className="mr-6">
                  <Link
                    to="/dashboard"
                    className={`${isDark ? "nav-item-dark" : "nav-item-light"}`}
                    href="#"
                  >
                    Anime
                  </Link>
                </li>
                <li className="mr-6">
                  <button
                    id="btn-toggle-theme"
                    className={`${isDark ? "nav-item-dark" : "nav-item-light"}`}
                    onClick={() => toggleTheme()}
                  >
                    {isDark ? <BiSun size="25" /> : <BiMoon size="25" />}
                  </button>
                </li>
              </ul>
              {/* Main Slider */}
              <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                autoPlay
                className="w-96 lg:w-full my-10"
              >
                {popMovies.slice(1, 6).map((movie, i) => {
                  return (
                    <PopularMovies
                      key={i}
                      movie={movie}
                      windowWidth={windowWidth}
                    />
                  );
                })}
              </Carousel>
              {/* Actors Slider */}
              <label
                className={`ml-4 mb-5 mt-2 text-l nav-title ${
                  isDark
                    ? "txt-active-dark font-bold"
                    : "txt-active-light font-bold"
                }`}
              >
                Best Artist
              </label>
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
                {ratedActors.slice(9, 20).map((actor, i) => {
                  return <RatedActors key={i} actor={actor} />;
                })}
              </Carousel>

              {/* TV Shows Slider */}
              <label
                className={`ml-4 mb-5 mt-2 text-l nav-title ${
                  isDark
                    ? "txt-active-dark font-bold"
                    : "txt-active-light font-bold"
                }`}
              >
                TV On Air
              </label>
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
                {tvShows.slice(0, 19).map((show, i) => {
                  return <TVShows key={i} show={show} genres={genres} />;
                })}
              </Carousel>

              <footer className="p-0">
                <div className={`w-full text-center h-10 lg:h-20 p-5 ${isDark ? "footer-dark" : "footer-light"}`}>
                  <span className="text-sm">Developed by Jesus Salcedo</span>
                  <a  href="https://github.com/jesusdsg"><FaGithub size="20" className="w-10 m-auto m-2"/></a>
                </div>
              </footer>
            </div>

            <div
              className={`hidden lg:block sm:visible p-4 ${
                isDark ? "rightside-dark" : "rightside-light"
              }`}
            >
              <div className="w-100 mt-lg-4 mb-lg-4 py-6">
                <BiSearch size="20" className="searchIcon" />
                <input
                  type="text"
                  placeholder="Search"
                  className="searchInput"
                ></input>
              </div>
              <div className="text-left w-60">
                {/* Popular Movies */}
                <label
                  className={`ml-4 mb-5 mt-2 text-l ${
                    isDark
                      ? "txt-active-dark font-bold"
                      : "txt-active-light font-bold"
                  }`}
                >
                  Popular Movies
                </label>
                <div className="w-40 ml-4 mr-4 mb-10">
                  {ratedMovies.slice(1, 4).map((movie, i) => {
                    return (
                      <RatedMovies
                        key={i}
                        movie={movie}
                        genres={genres}
                        isDark={isDark}
                      />
                    );
                  })}
                  <div className="w-52">
                    <button className="btn-primary">See More</button>
                  </div>
                </div>
                {/* Favorite TV */}
                <label
                  className={`ml-4 mb-5 mt-2 text-l ${
                    isDark
                      ? "txt-active-dark font-bold"
                      : "txt-active-light font-bold"
                  }`}
                >
                  TV Shows
                </label>
                <div className="w-40 ml-4 mr-4">
                  {ratedShows.slice(3, 6).map((show, i) => {
                    return (
                      <RatedMovies
                        key={i}
                        movie={show}
                        genres={genres}
                        isDark={isDark}
                      />
                    );
                  })}
                  <div className="w-52">
                    <button className="btn-primary">See More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default Dashboard;
