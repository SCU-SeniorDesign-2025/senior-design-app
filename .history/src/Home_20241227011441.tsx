import styled from 'styled-components';
import scu from './assets/scu.png';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
/********** styled components **********/
// const menuStyled = styled.

function Home() {

  return (
    <div>
      <FontAwesomeIcon icon={faBars} style={{height: '3rem', width: '3rem', margin: '1rem'}}/>
    </div>
  )
}

export default Home;
