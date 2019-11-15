import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const getChars = () => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      setChars(res.data)
    })
    .catch(e => {
      console.log(e)
    });
  }
    
    getChars()//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [chars]);

  return (
    <section className="character-list">
      {chars.map(char => {

      })}
    </section>
  );
}
