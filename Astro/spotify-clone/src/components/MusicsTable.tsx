import { type FC, useState, useEffect, useRef } from "react";
import { Time } from "@/icons/Time.jsx";
import { type Song, type Playlist } from "@/lib/data";
import { Play } from "./Player";

interface Props {
    songs: Song[];
    playlist: Playlist[];
}

export const MusicsTable: FC<Props> = ({ songs, playlist }) => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);

    const tableRef = useRef<HTMLTableElement>(null); // Referencia al componente de la tabla

    const handleRowClick = (index: number) => {
        setSelectedRow(selectedRow === index ? null : index); // Selecciona o deselecciona la fila
    };

    const handleRowDoubleClick = (index: number) => {
        console.log(`Fila seleccionada: ${index}`);
        console.log(playlist);
        alert(`Fila seleccionada: ${index}`);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (tableRef.current && !tableRef.current.contains(event.target as Node)) {
            setSelectedRow(null); // Restablece el estado si se hace clic fuera de la tabla
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <table
            ref={tableRef} // Referencia de la tabla
            className="table-auto text-left min-w-full divide-y divide-gray-500/50"
        >
            <thead>
                <tr className="text-gray-300 text-sm font-light">
                    <th className="px-6 py-2 w-6">#</th>
                    <th className="px-4 py-2">Titulo</th>
                    <th className="px-4 py-2">Album</th>
                    <th className="px-4 py-2">
                        <Time />
                    </th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song, index) => (
                    <tr
                        key={song.id}
                        className={`text-gray-300 text-sm font-light ${
                            selectedRow === index
                                ? "bg-gray-700" // Color fijo si está seleccionado
                                : hoveredRow === index
                                ? "bg-gray-600" // Color al hacer hover si no está seleccionado
                                : "hover:bg-gray-700" // Hover normal
                        }`}
                        onClick={() => handleRowClick(index)}
                        onDoubleClick={() => handleRowDoubleClick(index)}
                        onMouseEnter={() => setHoveredRow(index)}
                        onMouseLeave={() => setHoveredRow(null)}
                    >
                        <td className="px-4 py-2">
                            {selectedRow === index || hoveredRow === index ? (
                                <button>
                                    <span className="text-white text-right w-2 h-2 text-xs">
                                        <Play className="size-5 h-5 text-sm"/>
                                    </span>
                                </button>
                            ) : (
                                <span className="text-sm ml-2">
                                    {index + 1}
                                </span>
                            )}
                        </td>
                        <td className="px-4 py-2 flex gap-3" data-id={song.id}>
                            <picture>
                                <img
                                    src={song.image}
                                    loading="eager"
                                    alt={song.title}
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                />
                            </picture>
                            <div className="flex flex-col">
                                <h3>{song.title}</h3>
                                <span>{song.artists.join(", ")}</span>
                            </div>
                        </td>
                        <td className="px-4 py-2">{song.album}</td>
                        <td className="px-4 py-2">{song.duration}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
