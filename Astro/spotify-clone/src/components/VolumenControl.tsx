import { usePlayerStore } from "@/store/playerStore"
import { Slider } from "./Slider"
import { VolumeFull, VolumeLow, VolumeMedium, VolumeSilenced } from "@/icons/VolumenIcon.jsx"
import { useRef } from "react"


export const VolumenControl = () => {
    const volume = usePlayerStore((state) => state.volume)
    const setVolume = usePlayerStore((state) => state.setVolume)
    const previousVolume = useRef(volume)

    const isMuted = volume === 0

    const handleClickVolumen = () => {
        if (isMuted) {
            handleClickSilencie()
            return
        }
        previousVolume.current = volume
        setVolume(0)
    }

    const handleClickSilencie = () => {
        setVolume(previousVolume.current)
    }

    return (
        <div className="flex justify-center w-32 gap-x-2 text-white">
            <button onClick={handleClickVolumen} className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-gray-800">

            {volume === 0 && (<VolumeSilenced />)}
            {volume > 0 && volume < 0.5 && <VolumeLow />}
            {volume >= 0.5 && volume < 1 && <VolumeMedium />}
            {volume === 1 && <VolumeFull />}
            </button>
            <Slider
            defaultValue={[volume * 100]}
            max={100}
            min={0}
            value={[volume * 100]}
            className="w-[95px] "
            onValueChange={(value) => {
                const [newValue] = value
                const volumeValue = newValue / 100
                setVolume(volumeValue)
            }}
        />
        </div>
    )
}
