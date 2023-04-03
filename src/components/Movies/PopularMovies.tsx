const IMG_URI = import.meta.env.VITE_IMG_URI;
import { BiPlus } from "react-icons/bi";
export default function PopularMovies({ poster, title, description }: any) {
  return (
    <div className="movies">
      <div className="movies__overlay">
        <div className="movies__info-container">
          <h2 className="movies__title">{title}</h2>
          <p className="movies__description">{description}</p>
          <br />
          <div className="movies__btn-container">
            <button className="btn btn--main">Watch</button>
            <button className="btn btn--transparent">
              <BiPlus size="1.5rem" />
            </button>
          </div>
        </div>
      </div>

      <img src={IMG_URI + poster} className="movies__img" />
    </div>
  );
}
