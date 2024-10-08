import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [filterRating, setFilterRating] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get('http://localhost:5000/api/movies');
            setMovies(response.data);
        };
        fetchMovies();
    }, []);

    const filteredMovies = movies.filter(movie => {
        return (
            movie.title.toLowerCase().includes(filterText.toLowerCase()) &&
            (filterRating ? movie.rating >= filterRating : true)
        );
    });

    return (
        <div>
            <h1>My Movie App</h1>
            <Filter filterText={filterText} setFilterText={setFilterText} setFilterRating={setFilterRating} />
            <MovieList movies={filteredMovies} />
        </div>
    );
};

export default App;
