import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faPlus, faChartSimple } from '@fortawesome/free-solid-svg-icons'

import React from 'react';


const SideBar = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '4rem', height: '100vh', padding: '3rem 2rem'}}>
        <FontAwesomeIcon style={{color: 'var(--accent-100)', height: 30, width: 30}} icon={faBars} />
        <FontAwesomeIcon style={{color: 'var(--accent-100)', height: 30, width: 30}} icon={faHouse} />
        <FontAwesomeIcon style={{color: 'var(--accent-100)', height: 30, width: 30}} icon={faPlus} />
        <FontAwesomeIcon style={{color: 'var(--accent-100)', height: 30, width: 30}} icon={faChartSimple} />
    </div>
  )
}

export default SideBar