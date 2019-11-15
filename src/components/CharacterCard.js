import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CharacterCard = props => {
  const [char, setChar] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;

    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      setChar(res.data);
    })
    .catch(e => {
      console.log(e);
    });
  }, []);

  if (char === null) {
    return <div>Loading Character...</div>
  }

  const { name, status, species } = char;
  return (
    <CharacterWrapper>
      <h2>{name}</h2>
      <p>Status: {status}</p>
      <p>Species {species}</p>
    </CharacterWrapper>
  );
}

const CharacterWrapper = styled.div`
  border: 1px solid #999;
`

export default CharacterCard;
