import styled from 'styled-components';
import scu from './assets/scu.png';
// import { useState } from 'react';

function Home() {
  const ScuIcon = styled.img`
    color: ${props => props.theme.accent};
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    width: 10rem;
    height: 4rem;
  `
  const LoginText = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 100px;
  `
  return (
    <>
      <ScuIcon src={scu}/>
      <LoginText> Hello </LoginText>
    </>
  )
}

export default Home;
