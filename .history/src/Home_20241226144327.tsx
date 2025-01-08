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
    display: flex;
    flex-direction: column;
    align-items: center;
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
    color: ${p => p.theme.text};
    margin-bottom: 1rem;
  `
  const StyledInput = styled.input`
    color: ${p => p.theme.text};
    background: ${p => p.theme.secondary};
    width: 15rem;
    height: 2rem;
    border: 0px;
    border-radius: .5rem;
    margin: 1.5rem;
    font-size: 1.4rem;
    padding: 1.4rem;
  `
  const ButtonStyled = styled.button`
    background-color: ${p => p.theme.primary};
    color: black;//${p => p.theme.text};
    font-size: 1.4rem;
    height: 8vh;
    width: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 5px;
    border-radius: 15px;
    transition: all .2s ease-in-out;
    &:hover{
      /* transform: scale(1.2); */
      backdrop-filter: blur(10px);
      box-shadow: 0 20px 20px 0 ${p => p.theme.primary};
      margin-top: -8px;
    }
  `
  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
      <ScuIcon src={scu}/>
      <LoginDiv>
        <LoginH1> Welcome to AMC </LoginH1>
        <LoginH2> Name IT! </LoginH2>
        <StyledInput placeholder='username'/>
        <StyledInput placeholder='password'/>
        <ButtonStyled> Login </ButtonStyled>
      </LoginDiv>
    </div>
  )
}

export default Home;
