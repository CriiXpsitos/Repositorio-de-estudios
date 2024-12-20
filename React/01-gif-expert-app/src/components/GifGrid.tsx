import { FC } from "react"

interface childProps {
  category: string
}


export const GifGrid: FC<childProps> = ({category}) => {
  return (
    <>
    <h3>{category}</h3>
    <p>Hola mundo</p>
    </>
  )
}
