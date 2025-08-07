import { create } from 'zustand'
import api from '../utils/axios'

const useMovieStore = create((set) => ({
    movies: [],
    selectedMovie: null,
    loading: false,
    error: null,

    setSelectedMovie: (movie) => {
        set({ selectedMovie: movie })
    },

    fetchMovies: async () => {
        set({ loading: true, error: null })
        try {
            const res = await api.get('/movies')
            console.log(res.data, 'Fetched movies');

            set({ movies: res.data, loading: false })
        } catch (err) {
            set({ error: err.message, loading: false })
        }
    },

    uploadMovie: async (formData) => {
        set({ loading: true, error: null })
        try {
            await api.post('/movies/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            set({ loading: false })
        } catch (err) {
            set({ error: err.message, loading: false })
        }
    },

    fetchMovieVideo: async (movieId) => {
        set({ loading: true, error: null });
        try {
            const res = await api.get(`/movies/${movieId}/video`);
            // You can store the video in a separate state if needed
            set({ loading: false });
            return res.data; // Return video data to the caller
        } catch (err) {
            set({ error: err.message, loading: false });
            return null;
        }
    },
}))

export default useMovieStore