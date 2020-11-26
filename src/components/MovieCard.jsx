import React from 'react';
import './MovieCard.css';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

//Composant affichant les informations d'un film sous forme de card
export function MovieCard(movie) {

  let title = movie.original_title;
  if(movie.original_title.length > 25){
    title = movie.original_title.substring(0,25)+'...';
  }

  //Changement du format de la date (dd/mm/yyyy)
  let formated_date = '';
  if(movie.release_date){
    formated_date = movie.release_date.split("-").reverse().join("/");
  }
  
  return (
    <article className="card_movie">
      <header className="card_thumb">
        <img src={IMAGE_URL+movie.poster_path} alt=""/>
      </header>
      <div className="movie_vote">
        <span> {movie.vote_average} </span>
      </div>

      <div className="card_body">
        <h3 className="movie_title"> {title} </h3>
        <p className="movie_date"> Sorti le {formated_date} </p>
      </div>

      <div className="card_text">
        <h3> Résumé </h3>
        <p>{movie.overview}</p>
      </div>
    </article>
  );
}
