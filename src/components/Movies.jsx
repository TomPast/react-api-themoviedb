import React from 'react';
import { MovieCard } from './MovieCard';

export function Movies({error, isLoading, movies}) {
  if(error) {
    return <p> Erreur de chargement, veuillez réessayer </p>;
  }else if(isLoading) {
    return <p> Chargement... </p>;
  }

  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );

}
