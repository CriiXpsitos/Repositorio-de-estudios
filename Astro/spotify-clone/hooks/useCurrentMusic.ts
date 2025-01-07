import {type Song } from "@/lib/data";
import {type CurrentSong } from "@/store/playerStore";

export const useCurrentMusic = (currentMusic:CurrentSong) => {
    const getCurrentSongIndex = () => {
        if(currentMusic.songs.length === 0 || currentMusic.song === null) return -1 
        return currentMusic.songs.findIndex(e => e.id === currentMusic.song!.id) ?? -1
    }

    const nextSong = () => {
        const {songs} = currentMusic
        const totalOfSongsInPlaylist = songs.length
        if ( totalOfSongsInPlaylist === 0) return null

        const index = getCurrentSongIndex()
        if(index + 1 >= totalOfSongsInPlaylist){
            return null
        }
        return songs[index + 1]
    }

    const previousSong = () => {
        const index = getCurrentSongIndex()
        if(index <= 0){
            return null
        }
        return currentMusic.songs[index - 1]
    }


    return {nextSong, previousSong}
}