import React from "react";

import { Pokemon } from "../lib/types";
import { typeTranslations } from "../lib/translations";
import PokedexScreen from "./PokedexScreen";
import PokedexInfo from "./PokedexInfo";
import PokedexHeader from "./PokedexHeader";
import PokedexControls from "./PokedexControls";
import PokedexFooter from "./PokedexFooter";

interface PokemonCardProps {
    pokemon: Pokemon;
    onNext?: () => void;
    onPrev?: () => void;
    onCry?: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onCry, onPrev, onNext }) => {
    return (
        <>
            <PokedexHeader />
            <div className="pokedex-body">
                <div className="pokedex-screen-container">
                    <PokedexScreen pokemon={pokemon} />
                    <PokedexInfo pokemon={pokemon} />
                </div>
                <PokedexControls onNext={onNext}
                                 onPrev={onPrev}
                                 onCry={onCry}/>
            </div>
            <PokedexFooter />
        </>
    );
}

export default PokemonCard;