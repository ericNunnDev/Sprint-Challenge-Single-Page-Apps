import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';

const SearchForm = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      console.log(res.data.results)
      const characters = res.data.results.filter(character => 
        character.name.toLowerCase().includes(search.toLowerCase())
      );
    setResults(characters)
    })
  }, [search])

  const handleChange = e => {
    setSearch(e.target.value);
  };
 
  return (
    <section className="search-form">
     <form>
       <input
         type='text'
         placeholder='Search Characters'
         value={search}
         onChange={handleChange}
         name='character'
       />
       <button type='submit'>Search</button>
     </form>
     <div>
     {results.map(char => (
        <CharacterCard char={char} />
      ))}
     </div>
    </section>
  );
}

export default SearchForm;