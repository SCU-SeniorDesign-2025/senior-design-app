import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import moon from './assets/moon.svg';
import sun from './assets/sun.svg';
import { useState } from 'react';

/******* Imported Components *******/
import Login from './Login';
import Home from './Home';

/******* Themes *******/
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

/******* Styled Components *******/
const Screen = styled.div`
background: ${props => props.theme.bg};
color: ${props => props.theme.text};
height: 100vh;
width: 100vw;
border: none;
`;
const ModeIcon = styled.img`
color: ${props => props.theme.accent};
position: absolute;
top: 1rem;
right: 1.5rem;
width: 3rem;
height: 3rem;
&:hover {
  filter: blur(.1rem);
}
`

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(curr => curr === darkTheme ? lightTheme : darkTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Screen>
        <ModeIcon onClick={toggleTheme} src={theme === darkTheme ? moon : sun}/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/about" element={<Home />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </BrowserRouter>
      </Screen>
    </ThemeProvider>
  )
}

export default App
