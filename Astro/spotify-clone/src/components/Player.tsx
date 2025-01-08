import { usePlayerStore } from "@/store/playerStore.ts";
import { useCallback, useEffect, useRef, useState } from "react";
import { CurrentSong } from "./CurrentSong.jsx";
import { VolumenControl } from "./VolumenControl.tsx";
import { SongControl } from "./SongControl.tsx";
import { useCurrentMusic } from "hooks/useCurrentMusic.ts";
import { SongControllers } from "./SongControllers.tsx";

export const Play = (props:any) => (
  <svg {...props} fill="currentColor" role="img" viewBox="0 0 24 24" aria-hidden="true" height="25" width="25">
    <path d="M8 5.14v14l11-7-11-7z"></path>
  </svg>
);

export const Pause = (props:any) => (
  <svg {...props} fill="currentColor"  role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export function Player() {
  const { currentSong, setCurrentSong, isPlaying, setIsPlaying, setCanPlay, volume } = usePlayerStore((state) => state);
  const [error, setError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { nextSong } = useCurrentMusic(currentSong)

  const handlePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying, setIsPlaying]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const playPauseAudio = async () => {
      try {
        if (isPlaying) {
          await audioElement.play();
        } else {
          audioElement.pause();
        }
      } catch (err) {
        console.error("Error playing/pausing audio:", err);
        setError("Error controlling playback");
      }
    };

    playPauseAudio();
  }, [isPlaying]);

  const { song, songs, playlist } = currentSong;


  const nextPlayMusic = () => {
    setCurrentSong({ songs, playlist, song: nextSong() })
  }

  useEffect(() => {
    audioRef.current?.addEventListener('ended', nextPlayMusic)
    return () => {
      audioRef.current?.removeEventListener('ended', nextPlayMusic)
    }
  }, [currentSong])


  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const loadSong = async () => {
      if (song && playlist) {
        const url = `/Music/${playlist?.id}/0${song?.id}.mp3`;
        audioElement.src = url;
        audioElement.volume = volume;

        try {
          audioElement.load();
          await audioElement.play();
          setCanPlay(true);
          setIsPlaying(true);
          setError(null);
        } catch (err) {
          console.error("Error loading song:", err);
          setError("Error loading song");
          setCanPlay(false);
          setIsPlaying(false);
        }
      }
    };

    loadSong();
  }, [currentSong, setCanPlay, setIsPlaying]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.volume = volume;
    }
  }, [volume]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/5">
      <div className="flex items-center justify-between h-[90px] px-4">
        <div className="w-[30%] min-w-[180px]">
          {currentSong?.song && currentSong.song.title && currentSong.song.image && currentSong.song.artists ? (
            <CurrentSong {...currentSong.song} />
          ) : (
            <div>No song selected</div>
          )}
        </div>

        <div className="flex-1 flex flex-col items-center justify-center max-w-[45%] gap-2">
          <div className="flex flex-col items-center gap-2 w-full">
            <div className="flex items-center justify-center">
              <SongControllers>
                <button
                  disabled={!currentSong.song || !!error}
                  className="bg-white rounded-full p-2 hover:scale-105 hover:bg-gray-100 transition-all disabled:bg-white/80 disabled:cursor-not-allowed"
                  onClick={handlePlayPause}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  <div className="w-6 h-6 text-black">
                    {isPlaying ? <Pause /> : <Play />}
                  </div>
                </button>
              </SongControllers>
            </div>
            <div className="w-full ">
              <SongControl audio={audioRef} />
            </div>
          </div>
          {error && <p className="text-red-500 text-xs absolute bottom-1">{error}</p>}
        </div>

        <div className="w-[30%] min-w-[180px] flex justify-end">
          <VolumenControl />
        </div>

        <audio
          ref={audioRef}
          onCanPlay={() => setCanPlay(true)}
          onError={() => {
            setCanPlay(false);
            setError("Error playing audio");
          }}
        />
      </div>
    </div>
  );
}

