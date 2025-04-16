'use client';

import { useEffect, useState } from 'react';
import { pokemonData } from "../lib/pokemon-data";
import type { Pokemon } from "../lib/types";

interface LoaderProps {
    onLoaded: (pokemons: Pokemon[]) => void;
}


export default function LoadingScreen({onLoaded}: LoaderProps) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
       const timer = setTimeout(() => {
          onLoaded(pokemonData);
          setLoading(false);
       }, 1500);

       return () => clearTimeout(timer);

    }, [onLoaded]);

    if (!loading) return null;

    return (
      <div id="loading-screen">
          <div className="loading-animation"></div>
          <p className="typing-text">Initialisation du Pokédex...</p>
      </div>
    );
};