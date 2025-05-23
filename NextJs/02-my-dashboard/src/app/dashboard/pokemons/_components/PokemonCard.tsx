'use client'

import { SimplePokemon } from "@/interfaces/simple-pokemon";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface SimplePokemons {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: SimplePokemons) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector(state => !!state.pokemons[id])
  const dispatch = useAppDispatch()

  

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={name}
            width={100}
            height={100}
            className="w-20 h-20 mx-auto object-cover"
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          {/* <p className="text-sm text-gray-100">John@Doe.com</p> */}
          <Link
            href={`pokemons/${name}`}
           
            className="border rounded-full py-2 px-4 text-xs font-semibold mt-2 text-gray-100"
          >
            Más informacion
          </Link>
        </div>
        <div className="border-b">
          <div onClick={() => dispatch(toggleFavorite(pokemon))} className="cursor-pointer px-4 py-2 hover:bg-gray-100 flex">
            <div className="text-red-600">
              <Heart className={`${isFavorite ? "fill-red-500" : "fill-none"}`}/>
            </div>
            <div className="pl-3">
              <p className="text-sm capitalize font-medium text-gray-800 leading-none">
                {isFavorite ? "Esta en tus favoritos" : "No esta en tus favoritos"}
              </p>
              <p className="text-xs capitalize text-gray-500">
                {isFavorite ? "Quita este pokemon de favoritos" : "Pon este pokemon en favoritos"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
