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
  // const Loginh1 = styled.h1`
  //   color: linear-gradient(120deg, #9f1a0c, #420650);
  // `

  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
      <ScuIcon src={scu}/>
      <LoginDiv>
        <h1 style={{
          color: `linear-gradient(120deg, #9f1a0c, #420650)`
        }}> Welcome to AMC </h1>
        <h2> Name IT! </h2>
      </LoginDiv>
    </div>
  )
}

export default Home;
