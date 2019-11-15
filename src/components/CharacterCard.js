import React from 'react';
import styled from 'styled-components';

const CharacterCard = props => {
  return (
    <CharacterWrapper key={props.char.id}>
      <Avatar src={props.char.image} />
      <h2>{props.char.name}</h2>
      <p>Status: {props.char.status}</p>
      <p>Species: {props.char.species}</p>
    </CharacterWrapper>
  );
}

const CharacterWrapper = styled.div`
  border: 1px solid #999;
  margin: 5px auto;
  width: 50%;
`
const Avatar = styled.img`
  border-radius: 5px;
  padding-top: 10px;
`

export default CharacterCard;
