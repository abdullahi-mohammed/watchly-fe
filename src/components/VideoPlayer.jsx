import React, { useRef, useState } from 'react';
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    Maximize,
    Settings,
    Subtitles,
} from 'lucide-react';
import useMovieStore from '../store/movie';

const CustomVideoPlayer = () => {
    const { selectedMovie } = useMovieStore();
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(selectedMovie?.duration);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setPlaying(!playing);
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !muted;
        setMuted(!muted);
    };

    const handleTimeUpdate = () => {
        if (!videoRef.current) return;
        setPlayed(videoRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        if (!videoRef.current) return;
        setDuration(videoRef.current.duration);
    };

    const handleSeek = (e) => {
        const newTime = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = newTime;
            setPlayed(newTime);
        }
    };

    const toggleFullScreen = () => {
        if (containerRef.current.requestFullscreen) {
            containerRef.current.requestFullscreen();
        }
    };

    const formatTime = (seconds) => {
        if (!seconds && seconds !== 0) return '00:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
    };

    return (
        <div
            ref={containerRef}
            className="relative md:h-[85vh] bg-black w-full max-w-5xl mx-auto rounded overflow-hidden"
        >
            <video
                ref={videoRef}
                src={selectedMovie?.cloudinary_url}
                className="w-full h-auto"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                muted={muted}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                controls={false}
            />

            {/* Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-sm p-3">
                <input
                    type="range"
                    min={0}
                    max={duration}
                    step="any"
                    value={played}
                    onChange={handleSeek}
                    className="w-full mb-2 accent-red-500"
                />

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button onClick={togglePlay}>
                            {playing ? <Pause size={20} /> : <Play size={20} />}
                        </button>

                        <button onClick={toggleMute}>
                            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>

                        <span>
                            {formatTime(played)} / {formatTime(duration)}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span>{selectedMovie?.language || "eng"}</span>
                        <span>Dualsub</span>
                        <span>{selectedMovie?.quality || "480p"}</span>
                        <Subtitles size={18} />
                        <Settings size={18} />
                        <button onClick={toggleFullScreen}>
                            <Maximize size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomVideoPlayer;
