import styled from 'styled-components';
import scu from './assets/scu.png';
import { useRef } from 'react';

function Home() {
  const nameRef = useRef();
  const passRef = useRef();

  const handleClick = () => {
    // event.preventDefault();
    console.log('Name:', nameRef?.current.value);
    console.log('Email:', passRef?.current.value);
  }

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
    margin-top: 1rem;
    color: black;
    font-size: 1.4rem;
    height: 6vh;
    width: 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 5px;
    border-radius: 15px;
    transition: all .4s ease-in-out;
    z-index: 2;
    &:hover{
      transform: scale(1.1);
      backdrop-filter: blur(20px);
      /* box-shadow: 0 10px 10px 0 ${p => p.theme.primary}; */
      filter: drop-shadow(5px 5px 5px ${p => p.theme.primary +'d4'});
      margin-top: -4px;
    }
  `
  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
      <ScuIcon src={scu}/>
      <LoginDiv>
        <LoginH1> Welcome to AMC </LoginH1>
        <LoginH2> Name IT! </LoginH2>
        <StyledInput placeholder='username' ref={nameRef} />
        <StyledInput placeholder='password' ref={passRef} />
        <ButtonStyled onClick={handleClick}> Login </ButtonStyled>
      </LoginDiv>
    </div>
  )
}

export default Home;
