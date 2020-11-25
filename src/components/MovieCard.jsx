import React from 'react';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';


export function MovieCard(movie) {

  return (
    <article className="card_movie">
      <header className="card_thumb">
        <img src={IMAGE_URL+movie.poster_path} alt=""/>
      </header>
      <div className="movie_vote">
        <span> {movie.vote_average} </span>
      </div>

      <div className="card_body">
        <h3 className="movie_title"> {movie.name} </h3>
        <p className="movie_date"> Sorti le {movie.first_air_date} </p>
      </div>

      <div className="card_text">
        <h3> Résumé </h3>
        <p>{movie.overview}</p>
      </div>
    </article>
  );
}
