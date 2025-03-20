export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    abilities: {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }[];
    sprites: {
      front_default: string;
      back_default: string;
      other: {
        "official-artwork": {
          front_default: string;
        };
      };
    };
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
  }
  