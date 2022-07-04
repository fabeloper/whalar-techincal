import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovies } from "../../api/movies";
import MovieCard from "../../components/MovieCard";
import SearchBar from "../../components/SearchBar";

import "./results.scss";

const Results = () => {
  const { searchValue: urlValue } = useParams();
  const [searchValue, setSearchValue] = useState(urlValue);
  const [moviesData, setMoviesData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(urlValue);
      setMoviesData(data);
    };
    getMovies();
  }, [urlValue]);

  const search = async (e) => {
    const newSearchData = await fetchMovies(e.target.value);
    setMoviesData(newSearchData);
  };

  return (
    <div className="results-container">
      <SearchBar
        value={searchValue}
        setValue={setSearchValue}
        onSearch={search}
      />

      <div className="movie-list">
        {!moviesData && <div>Loading...</div>}
        {moviesData &&
          (moviesData.length === 0 ? (
            <div className="no-data">No data available for "{searchValue}"</div>
          ) : (
            moviesData.map((movie, i) => (
              <MovieCard
                onClick={() => navigate(`/detail/${movie.url.split('/')[5]}`)}
                key={movie.episode_id}
                title={movie.title}
                episode={movie.episode_id}
                description={movie.opening_crawl}
                director={movie.director}
                date={movie.release_date}
              />
            ))
          ))}
      </div>
    </div>
  );
};

export default Results;
