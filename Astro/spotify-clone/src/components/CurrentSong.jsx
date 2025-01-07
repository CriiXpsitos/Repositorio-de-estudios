export const CurrentSong = ({ title, image, artists }) => {
    return (
        <div className={`flex items-center gap-5 relative overflow-hidden`}>
            <picture className="w-16 h-16 rounded-lg bg-zinc-800 shadow-lg overflow-hidden">
                <img src={image} alt={title} />
            </picture>
            <div className="space-y-1">
                <h3 className="font-semibold text-sm block">
                    {title}
                </h3>
                <p className="text-xs text-gray-400">
                    {artists?.join(", ")}
                </p>
            </div>
            
        </div>
    )
}
