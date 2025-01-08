import { Play, Pause } from "./Player";
import { usePlayerStore } from "@/store/playerStore";
export function CardPlayButton({ id }) {
  const { currentSong, setCurrentSong, isPlaying, setIsPlaying} =
    usePlayerStore((state) => state);


  const isPlayingPlayList = isPlaying && currentSong?.playlist?.id === id


  const handleClick = () => {
    if (currentSong?.playlist?.id === id) {
      setIsPlaying(!isPlaying); // Pausar si ya está reproduciendo la playlist actual
    } else {
      fetch(`/api/get-info-playlist.json?id=${id}`).then(res => res.json()).then(data => {
        const { songs, playlist } = data
        
        setIsPlaying(true)
        setCurrentSong({ songs, playlist, song: songs[0] })
      })

    }
  };




  return (
    <button
      onClick={handleClick}
      className="z-10 card-play-button w-10 h-10 rounded-full text-black bg-green-500 flex items-center justify-center hover:bg-green-400 hover:scale-105 transition-all"
    >
      {isPlayingPlayList ? <Pause /> : <Play />}
    </button>
  );
}
