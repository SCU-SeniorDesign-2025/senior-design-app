import styled from 'styled-components';
import scu from './assets/scu.png';
// import { useState } from 'react';

function Home() {
  const ScuIcon = styled.img`
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    width: 10rem;
    height: 4rem;
  `
  const LoginDiv = styled.div`
    text-align: center;
    flex-direction: column;
    max-width: 50vw;
    padding-top: 100px;
  `
  const Loginh1 = styled.h1`
    background: linear-gradient(120deg, ${props => props.theme.primary}, ${p => p.theme.accent});
    background-clip: 'text';
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `

  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
      {/* <style>
        {`
         h1 { 
            background: linear-gradient(120deg, ${props => props.theme.primary}, ${p => p.theme.accent});
            background-clip: 'text';
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style> */}
      <ScuIcon src={scu}/>
      <LoginDiv>
        <h1> Welcome to AMC </h1>
        <h2> Name IT! </h2>
      </LoginDiv>
    </div>
  )
}

export default Home;
