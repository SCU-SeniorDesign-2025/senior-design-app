import styled from 'styled-components';
import { useRef } from 'react';
import { useNavigate } from "react-router";

/********** styled components **********/
const LoginDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50vw;
  margin-top: 150px;
  padding: 1.9rem;
  border-radius: 15px;
  box-shadow: ${p => p.theme.secondary} 0px 3px 8px;
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

function Login() {
  const nameRef = useRef<HTMLInputElement>();
  const passRef = useRef<HTMLInputElement>();
  const nav = useNavigate();

  const handleClick = () => {
    // event.preventDefault();
    console.log('Name: ', nameRef.current?.value);
    console.log('Email: ', passRef.current?.value);

    if(nameRef.current?.value === 'name' && passRef.current?.value === 'password'){
      console.log('Login Confirmed!');
      nav('/home');
    }
  }

  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
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

export default Login;
