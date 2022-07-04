/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./moviecard.scss";

const MovieCard = ({
  title,
  episode,
  description,
  director,
  date,
  isDetail,
  onClick
}) => {
  return (
    <div className="movie-card">
      <div className="title">{title}</div>
      <div className="details">
        <span>Episode: {episode}</span>
        <span>{director}</span>
        <span>{date}</span>
      </div>
      <div className="description">{description}</div>
      {!isDetail && (
        <div onClick={onClick} className="button">
          <span>See detail</span>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
