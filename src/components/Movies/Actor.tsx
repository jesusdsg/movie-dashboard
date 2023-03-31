const IMG_URI = import.meta.env.VITE_IMG_URI;
import { BiStar } from "react-icons/bi";
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
      <img src={IMG_URI + img} className="actor__img" />
      <div className="actor__info">
        <h3 className="actor__name">{name}</h3>
        <div className="actor__ranking">
          <BiStar style={{ fill: "yellow" }} />
          {popularity}
        </div>
      </div>
    </div>
  );
}
