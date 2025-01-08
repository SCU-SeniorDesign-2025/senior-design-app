import styled from 'styled-components';
import scu from './assets/scu.png';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
/********** styled components **********/
const ScuIcon = styled.img`
  position: absolute;
  top: .5rem;
  right: 100vw-10vw;
  width: 10rem;
  height: 4rem;
`

function Home() {

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <FontAwesomeIcon icon={faBars} style={{height: '3rem', width: '3rem', position: 'absolute', left: '1rem', top:'1rem'}}/>
      <h2> Home </h2>
      <ScuIcon src={scu}/>
    </div>
  )
}

export default Home;


/* NOTES 
 - use the fontAwesome icons more often they work well, easy to scale, and respond to theme changes

*/