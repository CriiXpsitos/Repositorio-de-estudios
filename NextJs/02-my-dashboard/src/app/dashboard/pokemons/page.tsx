import type { PokemonsResponse } from "@/interfaces/pokemons-response";
import type { SimplePokemon } from "@/interfaces/simple-pokemon";
import { PokemonGrid } from "./_components/PokemonGrid";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons: SimplePokemon[] = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));


  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 text-center">
        Listado de Pokemon <small>estatico</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
