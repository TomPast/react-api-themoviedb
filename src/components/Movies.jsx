import React from 'react';
import { MovieCard } from './MovieCard';
import './Movies.css';

//Composant qui gère les erreurs, le chargement et la création de MovieCard par film
export function Movies({error, isLoading, movies}) {


  if(error) {
    return <h3> Erreur de chargement, veuillez réessayer </h3>;
  }else if(isLoading) {
    return <h3 className="info_text"> Chargement... </h3>;
  }

  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );

}
