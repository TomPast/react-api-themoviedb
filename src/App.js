import React, { useState, useEffect } from 'react';
import { Movies } from './components/Movies/Movies';
import { SearchMovieBar } from './components/SearchMovieBar/SearchMovieBar';
import mainLogo from'./img/my-movies-logo.png';
import './App.css';

// Informations API
const API_KEY = '92b418e837b833be308bbfb1fb2aca1e';
const API_DISCOVER_QUERY = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&page=1&timezone=Europe/Paris&include_null_first_air_dates=false`;
const API_SEARCH_MOVIE_QUERY = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr-FR&page=1&include_adult=false&query=`

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");

  //Fonction appelant l'API avec l'URL passée en paramètre
  const updateMovies = (URL) =>{
    fetch(URL)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          console.log(result.results);
          setMovies(result.results);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }

  //Au chargement de la page -> Récupération des 20 films les plus populaires
  useEffect(() => {
    updateMovies(API_DISCOVER_QUERY);
  }, [])

  //Lorsque l'utilisateur lance une recherche -> Récupération des films correspondants à la valeur entrée
  const handleOnSubmit = () =>{
    setIsLoading(true);
    if(search){
      updateMovies(API_SEARCH_MOVIE_QUERY+search);
    }else{
      updateMovies(API_DISCOVER_QUERY);
    }
  }

  const handleOnChange = (value) =>{
    setSearch(value);
  }

  return (
    <>
      <header className="page_header">
        <img className="img_logo" src={mainLogo} alt=""/>
        <SearchMovieBar onSearchChange={handleOnChange} onSubmit={handleOnSubmit}/>
      </header>
      <Movies error={error} isLoading={isLoading} movies={movies} />
    </>

  );
}

export default App;
