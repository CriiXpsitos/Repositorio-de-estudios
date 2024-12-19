import { useState } from "react"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', "dragon ball"])

  console.log(categories)
  return (
    <>
      <h1>GifExpertApp</h1>


      <ol>
        {
          categories.map(category => (
            <li key={category}>{category}</li>
          ))
        }
      </ol>
    
    </>
  )
}
