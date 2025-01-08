import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import scu from './assets/scu.png';
import { useState } from 'react';

/******* Imported Components *******/
import Login from './Login';
import Home from './Home';
import History from './History';
import Create from './Create';
import Create_Tags from './Create_Tags';
import Create_Plates from './Create_Plates';
import Create_Signage from './Create_Signage'


/******* Themes *******/
const lightTheme = {
  bg: '#F2D9D9',
  text: '#260E0D',
  primary: '#5C5C0A',
  secondary: '#E77874',
  accent: '#E01710'
}
const darkTheme = {
  // bg: '#260D0D',
  // text: '#F2D9D8',
  // primary: '#F5F5A4',
  // secondary: '#8C1D19',
  // accent: '#EF241D',

  /* Primary Color */
  primary: '#7C0202', /* Dark maroon */
  primary_hover: '#990202', /* Slightly lighter maroon for hover states */
  secondary: '#2E1A1A', /* Muted dark maroon for secondary elements */
  bg: '#0F0F0F', /* Near-black for dark mode background */
  highlight: '#FFB3B3', /* Pale pink for highlights and focus states */
  text_primary: '#FFFFFF', /* White for main text */
  // text_secondary: '#B0B0B0', /* Soft gray for secondary text */
  accent: '#C71E30', /* Bright red for accents or alerts */
  border: '#333333', /* Subtle dark gray for borders */
  shadow: '#1A1A1A', /* Soft black for shadows */
}

/******* Styled Components *******/
const Screen = styled.div`
  background: ${props => props.theme.bg};
  color: ${props => props.theme.text};
  height: 100vh;
  width: 100vw;
  border: none;
`;
const ScuIcon = styled.img`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  width: 10rem;
  height: 4rem;
  &:hover{
    transform: scale(1.1);
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
        <ScuIcon src={scu} onClick={toggleTheme}/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/history" element={<History />} />
            
            <Route path="/create" element={<Create />} />
              <Route path="/create_tags" element={<Create_Tags/>} />
              <Route path="/create_plates" element={<Create_Plates/>} />
              <Route path="/create_signage" element={<Create_Signage/>} />
          </Routes>
        </BrowserRouter>
      </Screen>
    </ThemeProvider>
  )
}

export default App
