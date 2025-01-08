import styled, { ThemeProvider } from 'styled-components';
import scu from './assets/scu.png';
import { useState } from 'react';

function Home() {
  const ScuIcon = styled.img`
    color: ${props => props.theme.accent};
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    width: 10rem;
    height: 4rem;
  `
  return (
    <>
      <ScuIcon src={scu}/>
      <h1> Hello </h1>
    </>
  )
}

export default Home;
