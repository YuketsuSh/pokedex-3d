import React from "react";

interface PokedexControlsProps {
    onNext: () => void;
    onPrev: () => void;
    onCry?: () => void;
}

const PokedexControls: React.FC<PokedexControlsProps> = ({onNext, onPrev, onCry}) => (
    <div className="pokedex-controls">
        <div className="view-toggle">
            <div className="view-option active" data-view="2d">2D</div>
            <div className="view-option" data-view="3d">3D</div>
        </div>
        <div className="variant-toggle">
            <div className="variant-option active" data-variant="normal">Normal</div>
            <div className="variant-option" data-variant="shiny">Shiny</div>
        </div>

        <div className="d-pad">
            <div className="d-pad-button d-pad-up"><i className="fas fa-arrow-up"></i></div>
            <div className="d-pad-button d-pad-down"><i className="fas fa-arrow-down"></i></div>
            <div className="d-pad-button d-pad-left"><i className="fas fa-arrow-left"></i></div>
            <div className="d-pad-button d-pad-right"><i className="fas fa-arrow-right"></i></div>
            <div className="d-pad-button d-pad-center"></div>
        </div>

        <div className="action-buttons">
            <div className="action-button button-a" onClick={onCry} id="pokemon-cry-button">A</div>
            <div className="action-button button-b" id="pokemon-info-button">B</div>
        </div>

        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search a pokemon..." id="search-input" />
            <div className="search-buttons">
                <div className="search-button" onClick={onPrev}>Previous</div>
                <div className="search-button" onClick={onNext}>Next</div>
            </div>
        </div>

    </div>
);

export default PokedexControls;