import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import axios from 'axios';

const CharacterList = props => {
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
    
    getChars();
  }, []);

  return (
    <section className="character-list">
      {chars.map(char => (
        <Link to={`/character/${char.id}`}>
        <CharacterCard key={char.id} char={char} />
        </Link>
      ))}
    </section>
  );
}

export default CharacterList;