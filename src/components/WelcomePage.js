import React from 'react';
import img from '../images/rick-morty.jpg'
import styled from 'styled-components';

export const WelcomePage = () => {
  return (
    <section className='welcome-page'>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <WelcomeImage
          className='main-img'
          src={img}
          alt='rick'
        />
      </header>
    </section>
  );
}

const WelcomeImage = styled.img`
  max-width: 100%;
`
export default WelcomePage;