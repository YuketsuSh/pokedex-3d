import React from "react"
import {Pokemon} from "../lib/types";
import {typeTranslations, uiTranslations} from "../lib/translations";

interface Props {
    pokemon: Pokemon;
}

const PokedexInfo: React.FC<Props> = ({pokemon}) => (
    <div className="pokedex-info">
        <div className="pokemon-name-container">
            <div className="pokemon-name">{pokemon.name}</div>
            <div className="pokemon-name-en">{pokemon.name}</div>
        </div>
        <div className="pokemon-number">N°{String(pokemon.id).padStart(3, "0")}</div>
        <div className="pokemon-types">
            {pokemon.types.map((type) => (
                <div key={type} className={`type-badge type-${type}`}>
                    {typeTranslations[type] || type}
                </div>
            ))}
        </div>

        <div className="pokemon-stats">
            {Object.entries(pokemon.stats).map(([stat, value]) => (
                <div key={stat} className="stat">
                    <div className="stat-name">{uiTranslations[stat] || stat}</div>
                    <div className="stat-value">{value}</div>
                    <div className="stat-bar-container">
                        <div
                            className="stat-bar"
                            style={{"--target-width": `${value}%`} as React.CSSProperties}
                        />
                    </div>
                </div>
            ))}
        </div>

    </div>
);

export default PokedexInfo;