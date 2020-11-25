import React, { useState, useEffect } from 'react';
import { Movies } from './components/Movies';

import './App.css';

// Informations API
const API_KEY = '92b418e837b833be308bbfb1fb2aca1e';
const API_DISCOVER_QUERY = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=frFR&sort_by=popularity.desc&page=1&timezone=Europe/Paris&include_null_first_air_dates=false`;

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_DISCOVER_QUERY)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setMovies(result.results);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  }, [])

  return (
      <Movies error={error} isLoading={isLoading} movies={movies} />
  );
}

export default App;
