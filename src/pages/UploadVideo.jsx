import React, { useState } from 'react';
import useMovieStore from '../store/movie'

const VideoUploadForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        language: '',
        quality: '480p',
        thumbnail: null,
        video: null,
    });

    const uploadMovie = useMovieStore((s) => s.uploadMovie)
    const loading = useMovieStore((s) => s.loading)
    const error = useMovieStore((s) => s.error)

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData()
        for (let key in formData) {
            data.append(key, formData[key])
        }
        console.log('Submitting form data:', data);

        await uploadMovie(data)
    }

    return (
        <div className="max-w-xl mx-auto text-black bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Upload New Video</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Video Title */}
                <div>
                    <label className="block text-sm font-medium mb-1">Video Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        rows="4"
                        required
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="e.g. Action, Romance"
                    />
                </div>

                {/* Language */}
                <div>
                    <label className="block text-sm font-medium mb-1">Language</label>
                    <input
                        type="text"
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="e.g. English"
                    />
                </div>

                {/* Quality */}
                <div>
                    <label className="block text-sm font-medium mb-1">Video Quality</label>
                    <select
                        name="quality"
                        value={formData.quality}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    >
                        <option value="480p">480p</option>
                        <option value="720p">720p</option>
                        <option value="1080p">1080p</option>
                        <option value="4k">4K</option>
                    </select>
                </div>

                {/* Thumbnail */}
                <div>
                    <label className="block text-sm font-medium mb-1">Thumbnail</label>
                    <input
                        type="file"
                        name="thumbnail"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full"
                        required
                    />
                </div>

                {/* Video File */}
                <div>
                    <label className="block text-sm font-medium mb-1">Video File</label>
                    <input
                        type="file"
                        name="video"
                        accept="video/*"
                        onChange={handleChange}
                        className="w-full"
                        required
                    />
                </div>

                {/* Error Message */}
                {error && <div className="text-red-500">{error}</div>}

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                    >
                        {loading ? 'Uploading...' : 'Upload Video'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default VideoUploadForm;
