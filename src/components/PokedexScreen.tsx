import React from "react";
import { Pokemon } from "../lib/types";

interface Props {
    pokemon: Pokemon;
}

const PokedexScreen: React.FC<Props> = ({pokemon}) => (
    <div className="pokedex-screen">
        <div id="pokedex-3d-view"></div>
        <div id="pokedex-2d-view">
            <img className="pokemon-sprite"
                 id="pokemon-sprite"
                 src={pokemon.sprites.front}
                 alt={pokemon.name}
                 />
        </div>
    </div>
);

export default PokedexScreen;