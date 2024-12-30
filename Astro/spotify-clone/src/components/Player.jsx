import { useEffect, useRef, useState } from "react";

export const Play = () => (
  <svg viewBox="0 0 24 24" height="25" width="25">
    <path d="M8 5.14v14l11-7-11-7z"></path>
  </svg>
);

export const Pause = () => (
  <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [CurrentSong, setCurrentSong] = useState(null);
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.src = `/Music/1/01.mp3`;
  }, []);

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.volumen= 0
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-row justify-between w-full px-4 py-2">
      <div className="w-[30%] min-w-[180px]">CurrentSong...</div>

      <div className="flex flex-col items-center gap-2 flex-1 max-w-[45%]">
        <div className="flex items-center justify-center gap-4">
          <button
            className="bg-white rounded-full p-2 hover:scale-105 hover:bg-gray-100 transition-all"
            onClick={() => handleClick()}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {isPlaying ? <Pause /> : <Play />}
            </div>
          </button>
        </div>
      </div>

      <div className="grid place-content-center"></div>

      <audio ref={audioRef} />
    </div>
  );
}
