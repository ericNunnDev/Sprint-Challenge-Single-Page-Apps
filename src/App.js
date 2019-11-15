import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import styled from 'styled-components';

export default function App() {
  return (
    <Main>
      <Header />
      <WelcomePage />
      <Route 
        path='/characters'
        render={props => (
          <CharacterList 
          {...props}
          />
        )}
      />
    </Main>
  );
}

const Main = styled.main`
  background-color: #000;
  color: lightgreen;
`