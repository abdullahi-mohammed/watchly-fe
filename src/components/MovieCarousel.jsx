import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useMovieStore from '../store/movie';
import { useNavigate } from 'react-router-dom';

const MovieCarousel = () => {
    const scrollRef = useRef(null);
    const navigate = useNavigate();

    const { movies, setSelectedMovie, loading, fetchMovies } = useMovieStore();

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    console.log('movies', movies);

    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
        navigate("/details/video");
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth',
            });
        }
    };

    if (loading) {
        return <div className="text-white text-center py-8">Loading...</div>;
    }

    return (
        <div className="w-full py-6 px-2 sm:px-4 relative bg-black">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 px-2 sm:px-0">
                <h2 className="text-white text-base sm:text-lg font-medium">SHORT MOVIES</h2>
                <button className="text-white text-sm sm:text-base">VIEW ALL</button>
            </div>

            <div className="relative">
                {/* Left Button (Visible on all screens) */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full"
                >
                    <ChevronLeft />
                </button>

                {/* Scrollable Movies */}
                <div
                    ref={scrollRef}
                    className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-8"
                >
                    {Array.isArray(movies) && movies.length > 0 ? (
                        movies.map((movie, index) => (
                            <div
                                key={index}
                                onClick={() => handleSelectMovie(movie)}
                                className="min-w-[140px] sm:min-w-[200px] cursor-pointer rounded-lg overflow-hidden flex-shrink-0"
                            >
                                <img
                                    src={movie.thumbnail_url || '/placeholder.png'}
                                    alt={movie.title}
                                    className="w-full h-[200px] sm:h-[468px] object-cover rounded-lg"
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-white px-4">No movies available</p>
                    )}
                </div>

                {/* Right Button (Visible on all screens) */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};

export default MovieCarousel;
