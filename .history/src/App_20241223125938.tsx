import styled, { ThemeProvider } from 'styled-components';
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
    font-size: 16px;
    height: 100vh;
    width: 100vw;
    border: none;
  `;

  return (
    <ThemeProvider theme={theme}>
      <Screen>
        <h1> Hello World! </h1>
      </Screen>
    </ThemeProvider>
  )
}

export default App
