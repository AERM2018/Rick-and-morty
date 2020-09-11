import React, { useState } from 'react'
import { Search } from './components/Search';
import { CharacterGrid } from './components/CharacterGrid';

export const RickAndMortyApp = () => { 
    const [character, setCharacter] = useState("");
   
   
    return (
        <div className="m-5">
            <h1>Rick and morty</h1>
            <hr />
            <Search changeCharacter={setCharacter}/>
            <CharacterGrid name={character} />
        </div>
    )
}
