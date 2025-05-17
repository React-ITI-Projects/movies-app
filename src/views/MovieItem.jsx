import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const MovieItem = ({ movie }) => {
  return (
    <Link
      to={`/moviedetails/${movie.id}`}
      className={styles["movieItemContainer"]}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>{movie.relase_date}</p>
      <p>{movie.vote_average}</p>
    </Link>
  );
};

export default MovieItem;
