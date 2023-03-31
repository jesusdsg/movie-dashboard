import Sidebar from "@components/Sidebar/Sidebar";
import { themeStore } from "../store/theme";
import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import Content from "@components/Content/Content";
import Tops from "@components/Movies/Tops";
import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
import { BiSearchAlt } from "react-icons/bi";

export default function Dashboard() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [ratedMovies, setRatedMovies] = useState<any>([]);
  const [ratedShows, setRatedShows] = useState<any>([]);
  const [centerWidth, setCenterWidth] = useState(25);
  const getRatedMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    const movies = res.data;
    setRatedMovies(movies.results);
  };
  const getRatedShows = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    const shows = res.data;
    setRatedShows(shows.results);
  };
  useEffect(() => {
    getRatedMovies();
    getRatedShows();
    themeStore.subscribe((state: any) => {
      setDarkMode(state.darkMode);
    });
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
    <div className="dashboard">
      <div className="dashboard__left-panel">
        <Sidebar darkMode={darkMode} />
      </div>
      <div className="dashboard__mid-panel">
        <Content />
      </div>
      <div
        className={
          darkMode
            ? "dashboard__right-panel dashboard__right-panel--dark"
            : "dashboard__right-panel"
        }
      >
        <div className="search__container">
          <BiSearchAlt size="1.2rem" className="search__icon" />
          <input
            type="text"
            placeholder="Search..."
            className="search__input"
          />
        </div>
        <Tops title={"Popular Movies"} movies={ratedMovies} />
        <Tops title={"Popular TV Shows"} movies={ratedShows} />
      </div>
    </div>
  );
}
