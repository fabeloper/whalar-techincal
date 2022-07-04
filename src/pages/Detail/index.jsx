import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovie } from "../../api/movies";
import MovieCard from "../../components/MovieCard";

import './detail.scss';

const Detail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovie(movieId);
      setMovie(data);
    };
    getMovies();
  }, [movieId]);

  return (
    <div className="detail-container">
      <div onClick={() => navigate(-1)}>{" <-- Return to results"}</div>
      {movie && (
        <MovieCard
          title={movie.title}
          episode={movie.episode_id}
          description={movie.opening_crawl}
          director={movie.director}
          date={movie.release_date}
          isDetail
        />
      )}
    </div>
  );
};

export default Detail;
