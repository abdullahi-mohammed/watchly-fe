import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import m1 from '../assets/m1.png'
import useMovieStore from '../store/movie';
import { useNavigate } from 'react-router-dom';

const movies = [
    {
        title: 'Movie',
        img: m1,
    },
    {
        title: 'The Assassin',
        img: m1,
    },
    {
        title: 'Saratu',
        img: m1,
    },
    {
        title: 'Bholaa',
        img: m1,
    },
];



const MovieCarousel = () => {
    const scrollRef = useRef(null);
    const navigate = useNavigate();

    const { movies, setSelectedMovie, loading, error, fetchMovies, fetchMovieVideo } = useMovieStore();


    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    console.log('movies', movies);

    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
        navigate("/details/video");
    }

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth',
            });
        }
    };

    if (loading) {
        return <div className="text-white text-center">Loading...</div>;
    }
    return (
        <div className="w-full py-8 px-4 relative bg-black">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-white text-2xl font-bold">SHORT MOVIES</h2>
                <button className="text-white font-bold">VIEW ALL</button>
            </div>

            <div className="relative">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full"
                >
                    <ChevronLeft />
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-8"
                >
                    {movies.map((movie, index) => (
                        <div key={index} onClick={() => handleSelectMovie(movie)} className="min-w-[200px] cursor-pointer rounded-lg overflow-hidden flex-shrink-0">
                            <img
                                src={movie.thumbnail_url ? movie?.thumbnail_url : '/placeholder.png'}
                                alt={movie.title}
                                className="w-full h-[468px] object-cover"
                            />
                        </div>
                    ))}
                </div>

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
