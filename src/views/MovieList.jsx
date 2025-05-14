import MovieItem from "./MovieItem";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import MovieController from "../controllers/MovieController";
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    MovieController.fetchMovies()
      .then((movies) => {
        setMovies(movies);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* <h1 className={styles["pageTitle"]}>Movies List</h1> */}
      <nav className={styles["navWrapper"]}>
        <div className={styles["Logo"]}>WATCH.mov</div>
        <ul className={styles["navTabs"]}>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Categories</a>
          </li>
          <li>
            <a>Live</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
        <div className={styles["registersContainer"]}>
          <button className={styles["loginBtn"]}>Login</button>
          <button className={styles["registerBtn"]}>Register</button>
        </div>
      </nav>
      <h1>Movies Browse</h1>
      <div className={styles["moviesWrapper"]}>
        {movies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </div>
    </>
  );
};

export default MovieList;
