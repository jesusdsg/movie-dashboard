const IMG_URI = import.meta.env.VITE_IMG_URI;
import { BiPlus } from "react-icons/bi";
import {AiFillStar} from "react-icons/ai"
interface ActorProps {
  name: string;
  img: string;
  popularity?: number;
  bio?: string;
  location?: string;
}

export default function Actor({ name, img, popularity }: ActorProps) {
  return (
    <div className="actor">
      <button className="actor__float-btn btn btn--transparent"><BiPlus size="1.5rem" /></button>
      <img src={IMG_URI + img} className="actor__img" />
      <div className="actor__info">
        <h3 className="actor__name">{name}</h3>
        <div className="actor__ranking-container">
          <div className="actor__ranking">
          <AiFillStar size="1.2rem" style={{ fill: "yellow" }} />
          {popularity}
        </div>
        </div>
        
      </div>
    </div>
  );
}
