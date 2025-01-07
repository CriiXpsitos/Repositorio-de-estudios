import { usePlayerStore } from "@/store/playerStore";
import { useCurrentMusic } from "hooks/useCurrentMusic";
import { Next, Previous } from "@/icons/SongControllersIcons";
import type { ReactNode } from "react";

interface SongControllersProps {
    children: ReactNode;
}

export const SongControllers = ({ children }: SongControllersProps) => {
    const { currentSong, setCurrentSong } = usePlayerStore(state => state);
    const { song, songs, playlist } = currentSong;
    const { nextSong, previousSong } = useCurrentMusic(currentSong);

    const hasPrevious = previousSong() !== null;
    const hasNext = nextSong() !== null;

    const playNextSong = () => {
        const nextMusic = nextSong();
        if (nextMusic === null) return;
        setCurrentSong({ songs, playlist, song: nextMusic });
    };

    const playPreviousSong = () => {
        const previousMusic = previousSong();
        if (previousMusic === null) return; 
        setCurrentSong({ songs, playlist, song: previousMusic });
    };

    return (
        <div className="flex items-center gap-5">
            <button
                disabled={!hasPrevious || song === null} 
                className="text-white/80 size-5 disabled:text-white/50 hover:text-white/90 transition-all"
                onClick={playPreviousSong}
            >
                <Previous />
            </button>
            {children}
            <button
                disabled={!hasNext || song === null} 
                className="text-white/80 size-5 disabled:text-white/50 hover:text-white transition-all"
                onClick={playNextSong}
            >
                <Next />
            </button>
        </div>
    );
};
