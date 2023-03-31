const IMG_URI = import.meta.env.VITE_IMG_URI;
interface ContinueWatchingProps {
  title: string;
  img: string;
}

export default function ContinueWatching({
  title,
  img,
}: ContinueWatchingProps) {
  const num = Math.floor(Math.random() * 100) + 1;
  return (
    <div className="continue">
      <img src={IMG_URI + img} className="continue__img" />
      <div className="continue__bar" style={{ width: `${num}%` }}></div>
      <div className="continue__body">
        <h3 className="continue__title">{title}</h3>
      </div>
    </div>
  );
}
