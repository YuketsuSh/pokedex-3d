import React from "react";

const PokedexHeader: React.FC = () => (
    <div className="pokedex-header">
        <div className="pokedex-lights">
            <div className="light light-blue"></div>
            <div className="light light-yellow"></div>
            <div className="light light-red"></div>
        </div>
        <div className="pokedex-title">Pokédex</div>
        <button className="language-switch" id="language-switch">EN</button>
    </div>
);

export default PokedexHeader;