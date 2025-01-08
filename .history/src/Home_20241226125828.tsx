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
  const LoginDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: vw/3;
    padding-top: 100px;
  `
  return (
    <>
      <ScuIcon src={scu}/>
      <LoginDiv>
        <h1> Welcome to AMC </h1>
        <h2> Name IT! </h2>
      </LoginDiv>
    </>
  )
}

export default Home;
