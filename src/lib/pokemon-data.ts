import { Pokemon } from "./types";

export const pokemonData: Pokemon[] = [
    {
        id: 1,
        name: "Bulbasaur",
        types: ["grass", "poison"],
        stats: {
            hp: 45,
            attack: 49,
            defense: 49,
            special_attack: 65,
            special_defense: 65,
            speed: 45,
        },
        sprites: {
            front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            back: '',
            shiny_front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
            shiny_back: '',
        },
    },
];