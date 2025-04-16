import { useRef } from 'react';


export const useAudio = () => {
    const sounds = useRef<Record<string, HTMLAudioElement>>({
        loading: new Audio("/sounds/opening.mp3"),
        open: new Audio("/sounds/opening.mp3"),
        nav: new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3"),
        select: new Audio("https://www.soundjay.com/buttons/sounds/button-21.mp3"),
        error: new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3"),
        cry: new Audio(),
        voice: new Audio(),
    });

    const playSound = (key: keyof typeof sounds.current) => {
        const sound = sounds.current[key];
        if (!sound) return;
        sound.currentTime = 0;
        sound.play().catch(err => {
            console.error(`Error playing sound "${key}": `, err);
        });
    };

    const setCry = (url: string) => {
        sounds.current.cry.src = url;
    };

    const setVoice = (url: string) => {
        sounds.current.voice.src = url;
    };

    return {
        playSound,
        setCry,
        setVoice,
    }
}