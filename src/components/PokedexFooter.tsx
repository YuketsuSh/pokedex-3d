import React from "react";

const PokedexFooter: React.FC = () => (
    <div className="pokedex-footer">
        <div className="footer-button" id="home-button"><i className="fas fa-home"></i></div>
        <div className="footer-button" id="settings-button"><i className="fas fa-cog"></i></div>
        <div className="footer-button" id="sound-button"><i className="fas fa-volume-up"></i></div>
    </div>
);


export default PokedexFooter;