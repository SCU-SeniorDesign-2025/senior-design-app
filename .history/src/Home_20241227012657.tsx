import styled from 'styled-components';
import scu from './assets/scu.png';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
/********** styled components **********/

function Home() {

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <FontAwesomeIcon icon={faBars} style={{height: '3rem', width: '3rem', position: 'absolute', left: '1rem', top:'1rem'}}/>
      <h2> Home </h2>
    </div>
  )
}

export default Home;


/* NOTES 
 - use the fontAwesome icons more often they work well, easy to scale, and respond to theme changes

*/