import styled, { ThemeProvider } from 'styled-components';
import moon from './assets/moon.svg';
import sun from './assets/sun.svg';
import { useState } from 'react';

const lightTheme = {
  bg: '#F2D9D9',
  text: '#260E0D',
  primary: '#5C5C0A',
  secondary: '#E77874',
  accent: '#E01710'
}
const darkTheme = {
  bg: '#260D0D',
  text: '#F2D9D8',
  primary: '#F5F5A4',
  secondary: '#8C1D19',
  accent: '#EF241D'
}


function App() {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(curr => curr === darkTheme ? lightTheme : darkTheme)
  }

  const Screen = styled.div`
    background: ${props => props.theme.bg};
    color: ${props => props.theme.text};
    height: 100vh;
    width: 100vw;
    border: none;
  `;

  const Img = styled.img`
    color: ${props => props.theme.accent};
    background: ${props => props.theme.accent};
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    width: 3rem;
    height: 3rem;
  `

  return (
    <ThemeProvider theme={theme}>
      <Screen>
        {/* <Button onClick={toggleTheme}></Button> */}
        <Img onClick={toggleTheme} src={theme === darkTheme ? moon : sun}/>
      </Screen>
    </ThemeProvider>
  )
}

export default App
