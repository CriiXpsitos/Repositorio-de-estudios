import { ChangeEvent, FC, FormEvent, useState } from "react"

interface childProps {
    onNewCategories: (newCategory: string) => void
}

export const AddCategories: FC<childProps> = ({onNewCategories}) => {

    const [inputValue, setInputValue] = useState<string>("")

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setInputValue(value)
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!inputValue.trim().length) return
        onNewCategories(inputValue.trim())
        setInputValue("")
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} />
        </form>
    )
}
