import { useState } from "react"
import { AddCategories } from "./components/AddCategories"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>(['One Punch', "dragon ball"])

  const onAddCategories = (newCategory: string) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories,])
  }
  return (
    <>
      <h1>GifExpertApp</h1>


      <AddCategories onNewCategories={onAddCategories} />
      {
        categories.map((category, i) => (
          <GifGrid key={`${category}-${i}`} category={category} />
        ))
      }
    </>
  )
}
