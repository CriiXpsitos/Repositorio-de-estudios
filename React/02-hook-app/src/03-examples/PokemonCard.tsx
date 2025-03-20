import { useLayoutEffect, useRef } from "react";

interface Sprites {
  front_default?: string;
  front_shiny?: string;
}

interface Props {
  id: number;
  name: string;
  sprites?: Sprites;
}

export const PokemonCard = ({ id, name, sprites }: Props) => {

  const h2ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const rect = h2ref.current?.getBoundingClientRect();
    console.log(rect?.height); // para ver que tienes el rect si quieres usarlo
  }, [name]);

  return (
    <section style={{ height: 200, display: "flex", flexDirection: "row" }}>
      <h2 className="text-capitalize" ref={h2ref}>
        #{id} - {name}
      </h2>

      {/* imagenes */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        {sprites?.front_default && (
          <img
            src={sprites.front_default}
            alt={`${name} normal`}
            width={96}
            height={96}
          />
        )}
        {sprites?.front_shiny && (
          <img
            src={sprites.front_shiny}
            alt={`${name} shiny`}
            width={96}
            height={96}
          />
        )}
      </div>
    </section>
  );
};
