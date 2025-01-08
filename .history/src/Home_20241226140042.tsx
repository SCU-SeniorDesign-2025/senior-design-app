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
  const LoginH1 = styled.h1`
    background: linear-gradient(120deg, ${p => p.theme.primary}, ${p => p.theme.accent});
    background-clip: 'text';
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `
  const LoginH2 = styled.h2`
    color: ${p => p.theme.text}
  `

  const NameInput = styled.input`
    color: ${p => p.theme.text};
    background: ${p => p.theme.accent};
    width: 15rem;
    height: 2rem;
    border: 0px;
    border-radius: .5rem;
  `

  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
      <ScuIcon src={scu}/>
      <LoginDiv>
        <LoginH1> Welcome to AMC </LoginH1>
        <LoginH2> Name IT! </LoginH2>
        <NameInput placeholder='username'/>
      </LoginDiv>
    </div>
  )
}

export default Home;
