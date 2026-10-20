import MovieCard from '../components/MovieCard';
import { useState } from 'react';

function Home() {
    const movies = [
        {
            id: 1,
            title: 'The Matrix',
            release_date: '1999-03-31',
            url: 'https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png',
        },
        {
            id: 2,
            title: 'Inception',
            release_date: '2010-07-16',
            url: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
        },
        {
            id: 3,
            title: 'Interstellar',
            release_date: '2014-11-07',
            url: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
        },
        {
            id: 4,
            title: 'Tenet',
            release_date: '2020-08-26',
            url: 'https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg',
        },
        {
            id: 5,
            title: 'The Dark Knight',
            release_date: '2008-07-18',
            url: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
        },
        {
            id: 6,
            title: 'Pulp Fiction',
            release_date: '1994-10-14',
            url: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg',
        },
    ];
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="home">
                <form action="" onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        placeholder="Search for movies..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                        Search
                    </button>
                </form>
                <div className="movies-grid">
                    {movies.map(
                        (movie) =>
                            movie.title
                                .toLowerCase()
                                .startsWith(searchQuery) && (
                                <MovieCard key={movie.id} movie={movie} />
                            ),
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;
