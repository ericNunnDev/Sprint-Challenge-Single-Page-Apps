import React from 'react';
import styled from 'styled-components';

const CharacterCard = props => {
  return (
    <CharacterWrapper key={props.char.id}>
      <Avatar src={props.char.image} />
      <h2>{props.char.name}</h2>
      <p><strong>Species: </strong>{props.char.species}</p>
      <p><strong>Status: </strong>{props.char.status}</p>
      <p><strong>Location: </strong>{props.char.location.name}</p>
    </CharacterWrapper>
  );
}

const CharacterWrapper = styled.div`
  border: 2px ridge #999;
  margin: 10px auto;
  width: 50%;
`
const Avatar = styled.img`
  border-radius: 5px;
  padding-top: 10px;
`

export default CharacterCard;
