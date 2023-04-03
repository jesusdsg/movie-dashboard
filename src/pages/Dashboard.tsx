import Sidebar from "@components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import "./Dashboard.scss";
import Content from "@components/Content/Content";
import Tops from "@components/Movies/Tops";
import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
import { BiSearch } from "react-icons/bi";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { userStore } from "@stores/user";

interface DashboardProps {
  darkMode: boolean;
  menu: boolean;
}

export default function Dashboard({ darkMode, menu }: DashboardProps) {
  const isLogged = userStore((store: any) => store.isLogged);
  const navigate = useNavigate();
  const [ratedMovies, setRatedMovies] = useState<any>([]);
  const [ratedShows, setRatedShows] = useState<any>([]);
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
    checkLoggedUser();
    getRatedMovies();
    getRatedShows();
  }, []);

  const checkLoggedUser = () => {
    if (!isLogged) {
      navigate("/");
    }
  };

  const leftPanelClass = classNames("dashboard__left-panel", {
    "dashboard__left-panel--toggled": menu,
    "dashboard__left-panel--dark": darkMode,
    "dashboard__left-panel--light": !darkMode,
  });

  return (
    <div
      className={
        darkMode ? "dashboard dashboard--dark" : "dashboard dashboard--light"
      }
    >
      {/* Left panel where menu is located */}
      <div className={leftPanelClass}>
        <Sidebar darkMode={darkMode} />
      </div>

      {/* Mid panel with the main content */}
      <div className="dashboard__mid-panel">
        <Content darkMode={darkMode} />
      </div>

      {/* Right panel, extras and search */}
      <div
        className={
          darkMode
            ? "dashboard__right-panel dashboard__right-panel--dark"
            : "dashboard__right-panel dashboard__right-panel--light"
        }
      >
        <div className="search__container">
          <BiSearch
            size="1.2rem"
            className={
              darkMode
                ? "search__icon search__icon--dark"
                : "search__icon search__icon--light"
            }
          />
          <input
            type="text"
            placeholder="Search..."
            className={
              darkMode
                ? "search__input search__input--dark"
                : "search__input search__input--light"
            }
          />
        </div>
        <Tops title={"Popular Movies"} movies={ratedMovies} />
        <Tops title={"Popular TV Shows"} movies={ratedShows} />
        <br></br>
      </div>
    </div>
  );
}
