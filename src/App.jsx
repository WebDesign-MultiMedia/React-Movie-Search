import {useState, useEffect} from "react";

import "./App.css";

import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

export default function App() {
  // const [count, setCount] = useState(0)
  const apiKey = "22f6c47d";
  const [movie, setMovie] = useState(null);

  const getMovie = async(searchTerm) =>{
    try {
      const response = await fetch(
      'http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}'
    );

    const data = await response.json();
    setMovie(data);
  } catch(e) {
    console.error(e);
    
  }
  }

  useEffect(() => {
    getMovie("Clueless");
  }, []);

  


  return (
    <>
      <div className='App'>
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
      </div>
    </>
  )
}


