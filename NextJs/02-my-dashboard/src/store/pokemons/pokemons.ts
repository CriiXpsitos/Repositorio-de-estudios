import { SimplePokemon } from '@/interfaces/simple-pokemon';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'


interface PokemonsFavoriteState {
    [key: string] : SimplePokemon
}


// const getInitialState = ():PokemonsFavoriteState => {
//   // const favorites = JSON.parse(localStorage?.getItem("favorite-pokemons") ?? "{}")

//   return favorites
// }


const initialState: PokemonsFavoriteState = {
    "1": {id: "1", name: "bulbasaur"}
    // ...getInitialState()
}

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {

      const pokemon = action.payload
      const {id} = pokemon

      if(!!state[id]){
        delete state[id]
        // return
      }else {
        state[id] = pokemon

      }

    }
  }
});

export const {toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer