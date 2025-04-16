export interface PokemonStats {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
}

export interface PokemonSprites {
    front: string;
    back: string;
    shiny_front: string;
    shiny_back: string;
}

export interface Pokemon {
    id: number;
    name: string;
    types: string[];
    stats: PokemonStats;
    sprites: PokemonSprites;
}