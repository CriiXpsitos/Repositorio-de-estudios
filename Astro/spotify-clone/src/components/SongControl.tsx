import { Slider } from "./Slider"
import { useEffect, useState, type FC, type RefObject } from "react"

interface songControlProps {
    audio: RefObject<HTMLAudioElement>
}

export const SongControl: FC<songControlProps> = ({ audio }) => {
    const [currentTIme, setCurrentTIme] = useState(0)

    const handleTimeUpdate = () => {
        setCurrentTIme(audio.current.currentTime)
    }
    useEffect(() => {
        audio.current.addEventListener("timeupdate", handleTimeUpdate)
        return () => {
            audio.current.removeEventListener("timeupdate", handleTimeUpdate)
        }
    }, [])

    const formatTime = (time : number) => {
        if (typeof time !== 'number') return `00:00`
        const seconds = Math.floor(time % 60)
        const minutes = Math.floor(time / 60)

        return `${minutes} : ${seconds.toString().padStart(2, "0")}`
    }    

    const duration = audio?.current?.duration

    return (
        <div className="flex gap-x-3 text-xs min-w-96">
            <span className="opacity-50">{formatTime(currentTIme)}</span>
            <Slider
            defaultValue={[0]}
            max={audio?.current?.duration ?? 0}
            min={0}
            value={[currentTIme]}
            className="w-[560px] "
            onValueChange={(value) => {
                audio.current.currentTime = value[0]
            }}
            />
            <span className="opacity-50">{duration ? formatTime(duration) : "00:00"}</span>
        </div>
    )
}
