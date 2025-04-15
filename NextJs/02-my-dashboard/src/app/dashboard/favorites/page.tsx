// import type { PokemonsResponse } from "@/interfaces/pokemons-response";
// import type { SimplePokemon } from "@/interfaces/simple-pokemon";
// import { PokemonGrid } from "@/app/dashboard/pokemons/_components/PokemonGrid";
import type { Metadata } from "next";
import { FavoritePokemons } from "./_components/FavoritePokemons";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Favoritos, esto son los favoritos de los pokemones",
};

export default async function FavoritesPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 text-center">
        Tus favoritos <small>Global state</small>
      </span>
      <FavoritePokemons />
    </div>
  );
}
