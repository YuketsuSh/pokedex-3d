import React, {useState, useEffect} from "react";
import type { Pokemon } from '../src/lib/types';


import LoadingScreen from "../src/components/LoadingScreen";
import {pokemonData} from "../src/lib/pokemon-data";
import PokemonCard from "./components/PokemonCard";
import {useAudio} from "./hooks/useAudio";

const App: React.FC = () => {

  const [pokemons, setPokemons] = useState<Pokemon[]>(pokemonData);

  const [isLoading, setIsLoading] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);

  const { playSound, setCry, setVoice } = useAudio();

  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {

    const handleInteraction = () => {
     setHasInteracted(true);

     document.removeEventListener("click", handleInteraction);
     document.removeEventListener("keydown", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("keydown", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    }

    if (hasInteracted) {
      playSound("loading");
    }


  }, [hasInteracted]);

  const handleLoadedPokemons = (loadedPokemons: Pokemon[]) => {
    setPokemons(loadedPokemons);
    setIsLoading(false);

    if (hasInteracted){
      playSound("open");



    }

  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % pokemons.length);
    playSound("nav")
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + pokemons.length) % pokemons.length);
    playSound("nav")
  }

  const playCry = () => {
    const cryUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemons[currentIndex]?.id}.ogg`;
    setCry(cryUrl);
    playSound("cry");
  };

  return (
      <>
        { isLoading ? (
            <LoadingScreen onLoaded={handleLoadedPokemons} />
        ) : (
            <div id="pokedex-container">
              <div id="pokedex-ui">
                <PokemonCard pokemon={pokemons[currentIndex]}
                             onNext={handleNext}
                             onPrev={handlePrev}
                             onCry={playCry}
                />
              </div>
            </div>
        )}
      </>
  );
}

export default App;