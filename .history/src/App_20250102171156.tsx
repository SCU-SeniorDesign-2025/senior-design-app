import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import scu from './assets/scu.png';
import { useState } from 'react';

/******* Imported Components *******/
import Login from './pages/Login';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Create from './pages/Create';
import Create_Tags from './pages/Create_Tags';
import Create_Plates from './pages/Create_Plates';
import Create_Signage from './pages/Create_Signage'

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
  return (
    <>
      <ScuIcon src={scu}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          
          <Route path="/create" element={<Create />} />
            <Route path="/create_tags" element={<Create_Tags/>} />
            <Route path="/create_plates" element={<Create_Plates/>} />
            <Route path="/create_signage" element={<Create_Signage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
