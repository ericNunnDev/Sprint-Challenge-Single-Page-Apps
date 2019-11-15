import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import Navigation from './components/Navigation.js';
import styled from 'styled-components';

const App = () => {
  return (
    <Main>
      <Header />
      <Navigation />
      <hr />
      <Route 
      exact
      path='/'
      component={WelcomePage}
      />
      <Route 
        path='/characters'
        component={CharacterList}
      />
    </Main>
  );
}

const Main = styled.main`
  background-color: #000;
  color: lightgreen;
`

export default App;