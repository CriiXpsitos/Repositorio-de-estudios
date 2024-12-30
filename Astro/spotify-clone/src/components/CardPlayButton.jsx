import { Play, Pause } from "./Player";
import { usePlayerStore } from "@/store/playerStore";
export function CardPlayButton({ id }) {
  const { currentSong, setCurrentSong, isPlaying, setIsPlaying } =
    usePlayerStore((state) => state);
  const handleClick = (event) => {
    event.stopPropagation();
    // Aquí puedes agregar la lógica que desees para el botón
  };

  return (
    <button
      onClick={handleClick}
      className="z-10 card-play-button w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-400 hover:scale-105 transition-all"
    >
      {isPlaying ? <Pause /> : <Play />}
    </button>
  );
}
