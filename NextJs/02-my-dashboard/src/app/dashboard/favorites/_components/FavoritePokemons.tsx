'use client'

import { useAppSelector } from "@/store";
import { PokemonCard } from "../../pokemons/_components/PokemonCard";
import { NoFavorites } from "./NoFavorites";

export const FavoritePokemons = () => {
  const pokemons = useAppSelector((state) => state.pokemons);

  return (
    <div className="flex flex-wrap gap-10 items-center justify-items-center">
      {
        Object.keys(pokemons).length ? (
          Object.values(pokemons).map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) :  (
          <NoFavorites />
        )
      }
      
    </div>
  );
};
