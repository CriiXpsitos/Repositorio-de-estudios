import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Pokemon } from "../interfaces/pokemonInterfaz";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHook = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, isLoading,  } = useFetch<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Informacion de Pokemon</h1>
      <hr />
      {isLoading && <LoadingMessage />}

      {data && (
        <PokemonCard id={data?.id} name={data?.name} sprites={data?.sprites} />
      )}

      <button
        onClick={() => decrement(1)}
        className={`btn btn-primary mt-2 ${counter === 1 && "disabled"}`}
      >
        Anterior
      </button>
      <button onClick={() => increment(1)} disabled={isLoading} className="btn btn-primary mt-2">
        Siguiente
      </button>
    </>
  );
};
