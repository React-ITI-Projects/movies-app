import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieController from "../../controllers/MovieController";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    MovieController.fetchMovieById(id).then((movie) => {
      setMovie(movie);
    });
  }, [id]);

  return (
    <div>
      <h1>Movie Details</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Movie ID: {id}</p>
      <p>Movie Title: {movie.title}</p>
      <p>Movie Overview: {movie.overview}</p>
      <p>Movie Release Date: {movie.release_date}</p>
      <p>Movie Vote Average: {movie.vote_average}</p>
      <p>Movie Runtime: {movie.runtime} minutes</p>
    </div>
  );
};

export default MovieDetails;
