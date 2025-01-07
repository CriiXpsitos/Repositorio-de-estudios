import { create } from "zustand"
import { type Playlist, type Song } from "@/lib/data";

export interface CurrentSong {
    playlist: Playlist | null;
    song: Song | null;
    songs: Song[];
}

interface PlayerStore {
    isPlaying: boolean,
    currentSong: CurrentSong,
    canPlay: boolean,
    volume: number,
    setIsPlaying: (isPlaying: boolean) => void,
    setCurrentSong: (currentSong: CurrentSong) => void,
    setCanPlay: (canPlay: boolean) => void,
    setVolume: (volume : number) => void
}

export const usePlayerStore= create<PlayerStore>((set) => ({
    isPlaying: false,
    currentSong: {
        playlist: null,
        song: null,
        songs: []
    },
    canPlay: false,
    volume: 1,
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentSong: (currentSong) => set({ currentSong }),
    setCanPlay: (canPlay) => set({ canPlay }),
    setVolume: (volume) => set({ volume })
}))