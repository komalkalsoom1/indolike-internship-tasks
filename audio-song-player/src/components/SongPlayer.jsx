import React, { useState, useEffect, useRef } from 'react';

import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';

const SongPlayer = () => {
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:8080/songs')
      .then(response => setSongs(response.data))
      .catch(error => console.error('Error fetching songs:', error));
  }, []);

  const playSong = (index) => {
    if (index === currentIndex) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setCurrentIndex(index);
      setIsPlaying(true);
      setTimeout(() => audioRef.current.play(), 100);
    }
  };

  const playNext = () => {
    let nextIndex = isShuffle ? Math.floor(Math.random() * songs.length) : (currentIndex + 1) % songs.length;
    setCurrentIndex(nextIndex);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 100);
  };

  const playPrev = () => {
    let prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(prevIndex);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 100);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-4">Music Player</h2>
      <div className="w-[500px] bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col items-center">
        {songs.length > 0 && (
          <>
            <h3 className="text-lg font-semibold mb-2">{songs[currentIndex]?.title}</h3>
            <audio ref={audioRef} src={songs[currentIndex]?.url} onEnded={() => isRepeat ? playSong(currentIndex) : playNext()} />
            <div className="flex gap-4 mt-4">
              <button className="p-3 bg-gray-700 rounded-full" onClick={playPrev}><SkipBack /></button>
              <button className="p-3 bg-blue-500 rounded-full" onClick={() => playSong(currentIndex)}>
                {isPlaying ? <Pause /> : <Play />}
              </button>
              <button className="p-3 bg-gray-700 rounded-full" onClick={playNext}><SkipForward /></button>
            </div>
            <div className="flex gap-4 mt-4">
              <button className={`p-3 rounded-full ${isShuffle ? 'bg-green-500' : 'bg-gray-700'}`} onClick={() => setIsShuffle(!isShuffle)}>
                <Shuffle />
              </button>
              <button className={`p-3 rounded-full ${isRepeat ? 'bg-green-500' : 'bg-gray-700'}`} onClick={() => setIsRepeat(!isRepeat)}>
                <Repeat />
              </button>
            </div>
          </>
        )}
      </div>
      <ul className="mt-6 w-full max-w-md">
        {songs.map((song, index) => (
          <li key={song.id} className="flex justify-between items-center p-2 border-b border-gray-700">
            <span>{song.title}</span>
            <button className="p-2 bg-blue-600 rounded-full hover:bg-blue-700" onClick={() => playSong(index)}>
              {currentIndex === index && isPlaying ? <Pause /> : <Play />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongPlayer;
