import { FC, useEffect, useState } from "react"
import type { Gif } from "../helpers/getGif"

interface childProps {
  category: string
}


export const GifGrid: FC<childProps> = ({ category }) => {
  const [gifs, setGifs] = useState<Gif[]>([])

  useEffect(() => {
    const fetchGifs = async (category: string) => {
      const { getGifs } = await import("../helpers/getGif") // Extrae la función
      console.log(getGifs) // Asegúrate de que está definida
      const newGifs = await getGifs(category) // Ahora sí es una función
      setGifs(newGifs)
    }

    fetchGifs(category)
  }, [category])


  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {gifs.map(({ id, title, url }) => (
          <div key={id} className="card">
            <img className="" src={url} alt={title} />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </>
  )
}
