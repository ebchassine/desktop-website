import React, { useRef, useState } from 'react';

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">Music Player</h2>
      <audio ref={audioRef} src="audio/sample1.mp3"></audio>
      <button
        onClick={handlePlayPause}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default MusicPlayer;
