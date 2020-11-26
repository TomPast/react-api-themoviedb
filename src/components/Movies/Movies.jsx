import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import './Movies.css';

//Composant qui gère les erreurs, le chargement et la création de MovieCard par film
export function Movies({error, isLoading, movies}) {


  if(error) { //Erreur de chargement
    return <h3> Erreur de chargement, veuillez réessayer </h3>;
  }else if(isLoading) { //En train de charger les films
    return <h3 className="info_text"> Chargement... </h3>;
  }
  if(movies.length === 0){ //Pas de résultat
    return <h3 className="info_text">Oh non, il n'y a pas de résultat... </h3>;
  }

  //Sinon on affiche les films
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );

}
