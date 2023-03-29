import React from 'react';
import { useEffect, useState } from 'react';

import SearchIcon from './search.svg';
import './App.css'
import MovieCard from './MovieCard';

//c597de6

const API_URL = 'http://www.omdbapi.com/?apikey=c597de6';

const movie1 = {
    "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
    "Year": "2016",
    "imdbID": "tt18689424",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2I4OTllM2MtMWVhNC00MjkzLWJlMDUtN2FhMGQ2ZGVjMjllXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
}

const App = () => {
    const [Movies, setMovies] = useState([])
    const [searchTerm, setsearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Superman')
    }, []);

    return (
        <div className='app'>
            <h1>Leisure</h1>
            <div className='search'>

                <input
                    placeholder='Search For Movies'
                    value={searchTerm}
                    onChange={(e) => setsearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => { searchMovies(searchTerm) }}
                />
            </div>
            {
                Movies?.length > 0
                    ? (
                        <div className='container'>
                            {Movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2> No movies found</h2>
                        </div>
                    )
            }


        </div>

    );
}


export default App; 